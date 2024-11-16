import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./authPages/SignUpForm";
import HomePage from "./pages/HomePage";
import LoginForm from "./authPages/LoginForm";
import InterviewForm from "./pages/components/InterviewForm";
import { useFirebase } from "./context/Firebase";

const App = () => {
  const firebase = useFirebase();
  const isLoggedIn = firebase.isLoggedIn;
  console.log(isLoggedIn);
  return(
    <Routes>
      <Route path="/" element={<HomePage isLoggedIn={isLoggedIn}/>} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/interviewForm" element={<InterviewForm />} />
    </Routes>
  )
}

export default App;