// src/App.jsx
import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Analyze from "./pages/Analyze";
import SelectInternships from "./pages/SelectInternship";
import UpdateInstructions from "./pages/UpdateInstructions";
import AddInternships from "./pages/AddInternship";
import PreferenceUpdate from "./pages/PreferenceUpdate";
import AddNotices from "./pages/AddNotices";
import CompanyDetails from "./pages/CompanyDetails";
import StudentFeedback from "./pages/StudentFeedback";
import SupervisorFeedback from "./pages/SupervisorFeedback";
import DiaryUpdates from "./pages/DiaryUpdates";

const App = () => {
  return (
    <div>
    <BrowserRouter>
     <Routes>
            <Route  path="/" element={<Analyze/>} />
            <Route  path='/analyze' element={<Analyze/>} />
            <Route  path="/select-internships" element={<SelectInternships />} />
            <Route  path="/update-instructions" element={<UpdateInstructions/>} />
            <Route  path="/add-internships" element={<AddInternships/>} />
            <Route  path="/preference-update" element={<PreferenceUpdate/>} />
            <Route  path="/add-notices" element={<AddNotices/>} />
            <Route  path="/company-details" element={<CompanyDetails/>} />
            <Route  path="/student-feedback" element={<StudentFeedback/>} />
            <Route  path="/supervisor-feedback" element={<SupervisorFeedback/>} />
            <Route  path="/diary-updates" element={<DiaryUpdates/>} />
            {/* Add more routes as needed */}
          
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
