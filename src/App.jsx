// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import AnalyzePage from './pages/Analyze';
import SelectInternshipsPage from './pages/SelectInternships';
import UpdateInstructionsPage from './pages/UpdateInstructions';
import AddInternshipsPage from './pages/AddInternships';
import PreferenceUpdatePage from './pages/PreferenceUpdate';
import AddNoticesPage from './pages/AddNotices';
import CompanyDetailsPage from './pages/CompanyDetails';
import StudentFeedbackPage from './pages/StudentFeedback';
import SupervisorFeedbackPage from './pages/SupervisorFeedback';
import DiaryUpdatesPage from './pages/DiaryUpdates';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Header />
        <div className="flex-1">
          <Switch>
            <Route exact path="/analyze" component={AnalyzePage} />
            <Route exact path="/select-internships" component={SelectInternshipsPage} />
            <Route exact path="/update-instructions" component={UpdateInstructionsPage} />
            <Route exact path="/add-internships" component={AddInternshipsPage} />
            <Route exact path="/preference-update" component={PreferenceUpdatePage} />
            <Route exact path="/add-notices" component={AddNoticesPage} />
            <Route exact path="/company-details" component={CompanyDetailsPage} />
            <Route exact path="/student-feedback" component={StudentFeedbackPage} />
            <Route exact path="/supervisor-feedback" component={SupervisorFeedbackPage} />
            <Route exact path="/diary-updates" component={DiaryUpdatesPage} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
