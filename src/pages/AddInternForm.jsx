import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const AddIntern = ({ addIntern }) => {
  const [formData, setFormData] = useState({
    companyname: '',
    designation: '',
    time: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIntern(formData);
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar/>

        <div className="flex-1 overflow-y-auto p-8 mt-[64px] ml-[250px]">

        <h1 className="text-2xl font-bold mb-4 text-center">Add Company Details</h1>
        <div className="bg-slate-100 p-8 shadow-md rounded-lg w-full max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
            <label htmlFor="companyName" className="block text-base font-medium mb-2">Company Name</label>

              <input
                type="text"
                name="companyname"
                value={formData.companyname}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"

              />
            </div>
            <div className="mb-6">
            <label htmlFor="designation" className="block text-base font-medium mb-2">Designation</label>

            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"

            />
            </div> 
            <div className="mb-6">
            <label htmlFor="timePeriod" className="block text-base font-medium mb-2">Time Period</label>

            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"

            />
            </div>
            <div className="flex justify-end">
              <button
                className="py-2 px-4 bg-[#0F1D2F] text-white rounded hover:bg-blue-600">
                Submit
              </button>
            </div>

          </form>
          </div>
        </div>
        </div>
    </div>
  );
};

export default AddIntern;
