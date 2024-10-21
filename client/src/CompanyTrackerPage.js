import React, { useState, useEffect } from 'react';
import './CompanyTrackerPage.css'

function CompanyTrackerPage() {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    state: '',
    payrollSystem: '',
    ownerName: '',
    email: '',
    cellNumber: '',
    employees: ''
  });

  // Fetch companies on component mount
  useEffect(() => {
    fetch('/api/companies')
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error('Error fetching companies:', error));
  }, []);

  // Handle input change for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  // Handle form submission to add a new company
  const handleAddCompany = (e) => {
    e.preventDefault(); // Prevent page reload
    const updatedCompanies = [...companies, { ...newCompany, id: Date.now() }];
    setCompanies(updatedCompanies);

    // Reset form fields after submission
    setNewCompany({
      name: '',
      state: '',
      payrollSystem: '',
      ownerName: '',
      email: '',
      cellNumber: '',
      employees: ''
    });
  };

  return (
    <div>
      <h1>Company Tracker</h1>

      {/* Company List */}
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name} - {company.status || 'Active'}<br />
            <strong>Owner:</strong> {company.ownerName}, <strong>State:</strong> {company.state}<br />
            <strong>Email:</strong> {company.email}, <strong>Cell:</strong> {company.cellNumber}<br />
            <strong>Payroll System:</strong> {company.payrollSystem}, <strong>Employees:</strong> {company.employees}
          </li>
        ))}
      </ul>

      {/* Form to Add New Company */}
      <h2>Add a New Company</h2>
      <form onSubmit={handleAddCompany}>
        <input 
          type="text" 
          name="name" 
          placeholder="Company Name" 
          value={newCompany.name} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="text" 
          name="state" 
          placeholder="State" 
          value={newCompany.state} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="text" 
          name="payrollSystem" 
          placeholder="Payroll System" 
          value={newCompany.payrollSystem} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="text" 
          name="ownerName" 
          placeholder="Owner Name" 
          value={newCompany.ownerName} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={newCompany.email} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="text" 
          name="cellNumber" 
          placeholder="Cell Number" 
          value={newCompany.cellNumber} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="number" 
          name="employees" 
          placeholder="Number of Employees" 
          value={newCompany.employees} 
          onChange={handleInputChange} 
          required 
        />
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
}

export default CompanyTrackerPage;

