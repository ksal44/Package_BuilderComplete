import React, { useState } from 'react';
import { buildBronzePackage, buildSilverPackage, buildGoldPackage, buildDiamondPackage, selectBestPackage } from './functions';
import PackageEditor from './packageEditor';
import './packagePage1.css'
import logo from './images/logo.png'

const PackagePage = () => {
    const [state, setState] = useState('FL');
    const [age, setAge] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');
    const [packageResults, setPackageResults] = useState([]);
    const [bestPackageResult, setBestPackageResult] = useState(null);
    const [budget, setBudget] = useState('');
    const [showEditor, setShowEditor] = useState(false); // Assuming you have a way to set budget

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page

        // Define package functions with names for easy reference
        const packageFunctions = [
            { func: buildBronzePackage, name: 'Bronze' },
            { func: buildSilverPackage, name: 'Silver' },
            { func: buildGoldPackage, name: 'Gold' },
            { func: buildDiamondPackage, name: 'Diamond' }
        ];

        const results = packageFunctions.map(({ func, name }) => {
            const result = func(state, parseInt(age, 10), relationshipStatus);
            return {
                name: name,
                ...result
            };
        });

        // Update the state with all package results
        setPackageResults(results);

        // Select the best package within the budget
        const bestPackage = selectBestPackage(state, parseInt(age, 10), relationshipStatus, parseInt(budget, 10));
        setBestPackageResult(bestPackage); // Update the state with the best package result
    };

    return (
        //whole page till I have more pages and the header and nav can be static on App.js
        <div className='whole-page'>
            <header className="header">
                <img src={logo} alt="Empower Insurance Group Logo" className="header-logo" />
            </header>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/agent-reports">Agent Reports</a></li>
                    <li><a href="/package-builder">Package Builder</a></li>
                </ul>
            </nav>
            <div className='main-layout'>
                <form className='input-form' onSubmit={handleSubmit}>
                    <select className='input' value={state} onChange={(e) => setState(e.target.value)}>
                        <option value="" disabled>Select State</option>
                        <option value="AL">Alabama (AL)</option>
                        <option value="AZ">Arizona (AZ)</option>
                        <option value="CA">California (CA)</option>
                        <option value="FL">Florida (FL)</option>
                        <option value="GA">Georgia (GA)</option>
                        <option value="IA">Iowa (IA)</option>
                        <option value="KS">Kansas (KS)</option>
                        <option value="NV">Nevada (NV)</option>
                        <option value="OK">Oklahoma (OK)</option>
                        <option value="TX">Texas (TX)</option>                   
                        <option value="LA">Lousiana (LA)</option>
                        <option value="MS">Mississippi (MS)</option>
                        
                    </select>
                    <input
                        className='input'
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                    />
                    <select className='input' value={relationshipStatus} onChange={(e) => setRelationshipStatus(e.target.value)}>
                        <option value="" disabled>Select Relationship Status</option>
                        <option value="Individual">Individual</option>
                        <option value="IndividualAndSpouse">Individual And Spouse</option>
                        <option value="OneParent">One Parent</option>
                        <option value="Family">Family</option>
                    </select>
                    <input
                        className='input'
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        placeholder="Budget"
                    />
                    <button type="submit">Build Packages</button>
                </form>
                {packageResults.length > 0 && (
                    <div className='package-container'>
                        {packageResults.map((result, index) => (
                            <div className='package' key={index}> {/* Corrected 'classname' to 'className' */}
                                <h2 className='package-name'>{result.name} Package</h2>
                                <div className='coverage-level'>
                                    Coverage Level: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result.coverageLevel)}
                                </div>
                                <div className='package-cost'>Total Cost: ${result.totalCost.toFixed(2)}</div>
                                <ul>
                                    {result.policies.map((policy, idx) => (
                                        <li className='policy' key={idx}>
                                            <p className='policy-info'>{policy.policy}</p>
                                            <p className='policy-info'>Price - ${policy.price.toFixed(2)}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
                {bestPackageResult && (
                    <div className='best-package'>
                        <h2 className='package-name'>Best Package: {bestPackageResult.name}</h2>
                        <div className='coverage-level'>
                            Coverage Level: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(bestPackageResult.coverageLevel)}
                        </div>
                        <div className='package-cost'>Total Cost: ${bestPackageResult.totalCost.toFixed(2)}</div>
                        <ul>
                            {bestPackageResult.policies.map((policy, idx) => (
                                <li className='policy-best' key={idx}>
                                    <p className='policy-info'>{policy.policy}:</p>
                                    <div className='best-policy-price'>
                                        <p className='policy-info'>Base Price - ${policy.basePrice.toFixed(2)}</p>
                                        <p className='policy-info'>Price - ${policy.price.toFixed(2)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setShowEditor(true)}>Edit Package</button>
                    </div>
                )}

                {showEditor && <PackageEditor packageDetails={bestPackageResult} onClose={() => setShowEditor(false)} state={state} relationshipStatus={relationshipStatus} age={age} budget={budget} />}
            </div>
        </div>
    );
};

export default PackagePage;
