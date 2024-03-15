
import React, { useState, useEffect } from 'react';
import { buildStateSpecificPackage } from './functions';
import WarningModal from './WarningModalBudget';
import './packageEditor.css'




const PackageEditor = ({ onClose, state, age, relationshipStatus, budget, packageDetails }) => {
  const [policies, setPolicies] = useState(
    packageDetails.policies.map(policy => ({
      ...policy,
      // Default all except specified policies to not included
      included: policy.policy === 'Cancer Package' || policy.policy === 'Heart & Stroke Package'
    }))
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [addedStateSpecificPolicies, setAddedStateSpecificPolicies] = useState(false);



  useEffect(() => {
    // Only sum the price of policies marked as included
    const calculatedTotalPrice = policies.reduce((acc, policy) => {
      if (policy.included && !(policy.coverageLevel === 0 && (policy.policy === 'Cancer Package' || policy.policy === 'Heart & Stroke Package'))) {
        return acc + policy.price;
      }
      return acc;
    }, 0);

    const newTotalPrice = parseFloat(calculatedTotalPrice.toFixed(2))
    setTotalPrice(parseFloat(calculatedTotalPrice.toFixed(2)));
    if (newTotalPrice > budget) {
      setShowWarning(true); // Set warning state to true
    } else {
      setShowWarning(false); // Set warning state to false
    }
  }, [policies, budget]);

  const togglePolicyInclusion = (index) => {
    setPolicies(currentPolicies =>
      currentPolicies.map((policy, idx) => idx === index ? { ...policy, included: !policy.included } : policy)
    );
  };

  const addStateSpecificPolicies = () => {
    const { policies: newPolicies, totalCost } = buildStateSpecificPackage(state, age, relationshipStatus);
    setPolicies([...policies, ...newPolicies]); // Combine with existing policies
    setTotalPrice(parseFloat((totalPrice + totalCost).toFixed(2)));
    setAddedStateSpecificPolicies(true);
  };

  const handleSave = () => {
    // Implement the save functionality here
    console.log('Package saved');
    // Optionally, close the editor or perform other actions upon save
  };
  
  const handleIncrement = (policyIndex) => {
    setPolicies(currentPolicies => currentPolicies.map((policy, idx) => {
      if (idx === policyIndex) {
        const incrementAmount = 5000;
        const maxCoverageLevel = 75000;
        let updatedCoverageLevel = policy.coverageLevel + incrementAmount;
        let updatedPrice = policy.price;
  
        // If the updated coverage level is less than or equal to the max, update price
        if (updatedCoverageLevel <= maxCoverageLevel) {
          updatedPrice = parseFloat((policy.price + policy.basePrice).toFixed(2));
        } else {
          // If the updated coverage level exceeds the max, set it to the max and do not change the price
          updatedCoverageLevel = maxCoverageLevel;
        }
  
        return { ...policy, coverageLevel: updatedCoverageLevel, price: updatedPrice };
      }
      return policy;
    }));
  };

const handleDecrement = (policyIndex) => {
  setPolicies(currentPolicies => currentPolicies.map((policy, idx) => {
    if (idx === policyIndex) {
      const decrementAmount = 5000;
      let updatedCoverageLevel = policy.coverageLevel - decrementAmount;
      let updatedPrice = policy.price;

      if (updatedCoverageLevel > 0) {
        updatedPrice = parseFloat((policy.price - policy.basePrice).toFixed(2));
      } else {
        updatedCoverageLevel = 0;
        // If the policy is one of the special cases, prevent decrementing the price
        if (policy.policy === 'Cancer Package' || policy.policy === 'Heart & Stroke Package') {
          updatedPrice = policy.price;
        }
      }

      return { ...policy, coverageLevel: updatedCoverageLevel, price: updatedPrice };
    }
    return policy;
  }));
};

  // const shouldShowButtons = (policyDescriptiveName) => {
  //   return policyDescriptiveName === 'Cancer Package' || policyDescriptiveName === 'Heart & Stroke Package';
  // };
//changed above may not need
  return (
    <div className="package-editor" style={{ position: 'fixed', top: '10%', left: '25%', backgroundColor: 'white', padding: '20px', zIndex: 100 }}>
      <h2 className="editor-title">Edit Package: {packageDetails.name}</h2>
      <div className="total-price">Total Price: ${totalPrice}</div>
      {policies.map((policy, idx) => (
        <div className="policy-item" key={idx} style={{ marginBottom: '10px' }}>
          <div className="policy-content">
            <div className="policy-details">
              {/* Policy name and coverage level on one line */}
              <div className="policy-header">
                <span className="policy-name">{policy.policy}:</span>
                {policy.coverageLevel && (
                  <span className="coverage-level"> Coverage Level - ${policy.coverageLevel}</span>
                )}
              </div>
              {/* Pricing information on a new line below policy name and coverage level */}
              <div className="policy-pricing">
                Price: <span className="price">${policy.price}</span>
              </div>
            </div>
            <div className="policy-actions">
              {!(policy.policy === 'Cancer Package' || policy.policy === 'Heart & Stroke Package') && (
                <input
                  className="policy-inclusion-checkbox"
                  type="checkbox"
                  checked={policy.included}
                  onChange={() => togglePolicyInclusion(idx)}
                />
              )}
              {/* Aligning buttons to the right based on policy name */}
              {(policy.policy === 'Cancer Package' || policy.policy === 'Heart & Stroke Package') && (
                <>
                  <button className='incdec-button' onClick={() => handleIncrement(idx)}>Inc</button>
                  <button className='incdec-button' onClick={() => handleDecrement(idx)}>Dec</button>
                </>
              )}
            </div>
          </div>
        </div>
      ))};
      {!addedStateSpecificPolicies && (
        <button className="add-state-specific-policies-btn" onClick={addStateSpecificPolicies}>Add State Specific Policies</button>
      )};
      {addedStateSpecificPolicies && (
        <button className="save-btn" onClick={handleSave}>Save</button>
      )}
      <button className="close-editor-btn" onClick={onClose}>Close</button>
      <WarningModal isOpen={showWarning} onClose={() => setShowWarning(false)} message="Warning: Price exceeds Budget" />
    </div>
  );
  
};

export default PackageEditor;
