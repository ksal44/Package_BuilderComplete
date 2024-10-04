import React, { useState, useEffect } from 'react';

function CompanyTrackerPage() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch the companies the user is working with
    fetch('/api/companies')
      .then(response => response.json())
      .then(data => setCompanies(data))
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  return (
    <div>
      <h1>Company Tracker</h1>
      <ul>
        {companies.map(company => (
          <li key={company.id}>
            {company.name} - {company.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyTrackerPage;
