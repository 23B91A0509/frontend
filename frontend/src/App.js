import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Signin } from './component/signin/signin';
import { ForgotPw } from './component/signin/forget password';
// import { SignUp } from './component/Signup/signup';
import { Signin } from './component/signin/signin';
//import { NotFound } from './components/notfound/notfound'; // assuming you have a NotFound component
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { SignUp } from './component/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/forgotpw" element={<ForgotPw />} /> */}
          
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;