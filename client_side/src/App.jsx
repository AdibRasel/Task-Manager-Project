import React, { Fragment } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

// Page Import 
import DeshboardPage from "./pages/DashboardPage";
import RegistrationPage from "./pages/RegistrationPage";
import CreatePage from "./pages/CreatePage";
import NewPage from "./pages/NewPage";
import ProgressPage from "./pages/ProgressPage";
import CompletedPage from "./pages/CompletedPage";
import CanceldPage from "./pages/CanceledPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import ForgetPassPage from "./pages/ForgetpassPage";
//Page Import end

const App = () =>{
  return(
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DeshboardPage/>}/>
          <Route exact path="/CreatePage" element={<CreatePage/>}/>
          <Route exact path="/NewPage" element={<NewPage/>}/>
          <Route exact path="/ProgressPage" element={<ProgressPage/>}/>
          <Route exact path="/CompletedPage" element={<CompletedPage/>}/>
          <Route exact path="/CanceldPage" element={<CanceldPage/>}/>
          <Route exact path="/ProfilePage" element={<ProfilePage/>}/>
          <Route exact path="/LoginPage" element={<LoginPage/>}/>
          <Route exact path="/RegistrationPage" element={<RegistrationPage/>}/>
          <Route exact path="/ForgetPassPage" element={<ForgetPassPage/>}/>
          <Route exact path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;