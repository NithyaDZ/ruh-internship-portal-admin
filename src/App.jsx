// src/App.jsx
import React from 'react';
import './index.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Analyze from "./pages/Analyze";
import SelectInternship from "./pages/SelectInternship";
import UpdateInstructions from "./pages/UpdateInstructions";
import AddInternship from "./pages/AddInternship";
import PreferenceUpdate from "./pages/PreferenceUpdate";
import AddNotices from "./pages/AddNotices";
import CompanyDetails from "./pages/CompanyDetails";
import StudentFeedback from "./pages/StudentFeedback";
import SupervisorFeedback from "./pages/SupervisorFeedback";
import DiaryUpdates from "./pages/DiaryUpdates";
import AddInternForm from "./pages/AddInternForm";

function App(){
  
  return (
    <div>
    <BrowserRouter>
     <Routes>
            <Route  path="/" element={<Analyze/>} />
            <Route  path='/analyze' element={<Analyze/>} />
            <Route  path='/select-internship' element={<SelectInternship/>} />
            <Route  path='/update-instruction' element={<UpdateInstructions/>} />
            <Route  path='/add-internship' element={<AddInternship/>} />
            <Route  path='/preference-update' element={<PreferenceUpdate/>} />
            <Route  path='/add-notices' element={<AddNotices/>} />
            <Route  path='/company-details' element={<CompanyDetails/>} />
            <Route  path='/student-feedback' element={<StudentFeedback/>} />
            <Route  path='/supervisor-feedback' element={<SupervisorFeedback/>} />
            <Route  path='/diary-updates' element={<DiaryUpdates/>} />
            <Route  path='/Add-intern' element={<AddInternForm/>} />
            {/* Add more routes as needed */}
          
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
