import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUpForm from "./authPages/SignUpForm";
import HomePage from "./pages/HomePage";
import LoginForm from "./authPages/LoginForm";
import InterviewForm from "./pages/components/InterviewForm";
import InterviewPage from "./pages/InterviewPage";
import Wildcard from "./pages/Wildcard";
import { useFirebase } from "./context/Firebase";

const App = () => {
  const firebase = useFirebase();
  return (
    <Routes>
      {
        !firebase.isLoggedIn && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
          </>
        )
      }

      {
        firebase.isLoggedIn && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Navigate to='/' />} />
            <Route path="/login" element={<Navigate to='/' />} />
            <Route path="/interviewForm" element={<InterviewForm />} />
            <Route path="/interviewPage" element={<InterviewPage />} />
          </>
        )
      }

      {/* <Route path='*' element={<Wildcard />} /> */}
    </Routes>
  )
}

export default App;