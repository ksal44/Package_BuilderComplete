
import React, { useState, useEffect } from 'react';
import { buildStateSpecificPackage } from './functions';
import './packageEditor.css'


const PackageEditor = ({ onClose, state, age, relationshipStatus, packageDetails }) => {
  const [policies, setPolicies] = useState(
    packageDetails.policies.map(policy => ({
      ...policy,
      // Default all except specified policies to not included
      included: policy.policy === 'Cancer Package' || policy.policy === 'Heart & Stroke Package'
    }))
  );
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    // Only sum the price of policies marked as included
    const calculatedTotalPrice = policies.reduce(
      (acc, policy) => acc + (policy.included ? policy.price : 0), 0);
    setTotalPrice(parseFloat(calculatedTotalPrice.toFixed(2)));
  }, [policies]);

  const togglePolicyInclusion = (index) => {
    setPolicies(currentPolicies =>
      currentPolicies.map((policy, idx) => idx === index ? { ...policy, included: !policy.included } : policy)
    );
  };

  const addStateSpecificPolicies = () => {
    const { policies: newPolicies, totalCost } = buildStateSpecificPackage(state, age, relationshipStatus);
    setPolicies([...policies, ...newPolicies]); // Combine with existing policies
    setTotalPrice(parseFloat((totalPrice + totalCost).toFixed(2))); // Update total price
  };

  const handleIncrement = (policyIndex) => {
    setPolicies(currentPolicies => currentPolicies.map((policy, idx) => {
      if (idx === policyIndex) {
        const updatedCoverageLevel = Math.min(policy.coverageLevel + 5000, 75000);
        const updatedPrice = parseFloat((policy.price + policy.basePrice).toFixed(2));
        return { ...policy, coverageLevel: updatedCoverageLevel, price: updatedPrice };
      }
      return policy;
    }));
  };

  const handleDecrement = (policyIndex) => {
    setPolicies(currentPolicies => currentPolicies.map((policy, idx) => {
      if (idx === policyIndex) {
        const updatedCoverageLevel = Math.max(policy.coverageLevel - 5000, 0);
        const updatedPrice = parseFloat((policy.price - policy.basePrice).toFixed(2));
        return { ...policy, coverageLevel: updatedCoverageLevel, price: updatedPrice };
      }
      return policy;
    }));
  };

  // const shouldShowButtons = (policyDescriptiveName) => {
  //   return policyDescriptiveName === 'Cancer Package' || policyDescriptiveName === 'Heart & Stroke Package';
  // };

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
                Base Price: <span className="base-price">${policy.basePrice}</span>Price: <span className="price">${policy.price}</span>
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
                  <button onClick={() => handleIncrement(idx)}>Inc</button>
                  <button onClick={() => handleDecrement(idx)}>Dec</button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
      <button className="add-state-specific-policies-btn" onClick={addStateSpecificPolicies}>Add State Specific Policies</button>
      <button className="close-editor-btn" onClick={onClose}>Close</button>
    </div>
  );
  
};

export default PackageEditor;


// return (
//   <div className="package-editor" style={{ position: 'fixed', top: '10%', left: '25%', backgroundColor: 'white', padding: '20px', zIndex: 100 }}>
//     <h2 className="editor-title">Edit Package: {packageDetails.name}</h2>
//     <div className="total-price">Total Price: ${totalPrice}</div>
//     {policies.map((policy, idx) => (
//       <div className="policy-item" key={idx} style={{ marginBottom: '10px' }}>
//         <div className="policy-content">
//           {/* Policy name and coverage level on one line */}
//           <div className="policy-header">
//             <span className="policy-name">{policy.policy}:</span>
//             {policy.coverageLevel && (
//               <span className="coverage-level"> Coverage Level - ${policy.coverageLevel}</span>
//             )}
//           </div>
//           {/* Pricing information on a new line below policy name and coverage level */}
//           <div className="policy-pricing">
//             Base Price - <span className="base-price">${policy.basePrice}</span>,
//             Price - <span className="price">${policy.price}</span>
//           </div>
//           {/* Aligning buttons to the right */}
//           {shouldShowButtons(policy.policy) && (
//             <div className="policy-buttons">
//               <button onClick={() => handleIncrement(idx)}>Inc</button>
//               <button onClick={() => handleDecrement(idx)}>Dec</button>
//             </div>
//           )}
//         </div>
//       </div>
//     ))}
//     <button className="add-state-specific-policies-btn" onClick={addStateSpecificPolicies} style={{ margin: '20px 0' }}>Add State Specific Policies</button>
//     <button className="close-editor-btn" onClick={onClose} style={{ marginTop: '20px' }}>Close</button>
//   </div>
// );
