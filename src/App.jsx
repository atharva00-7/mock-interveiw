import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InterviewPage from "./pages/InterviewPage";
import { useFirebase } from "./context/Firebase";
import InterviewDetailPage from "./pages/InterviewDetailPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
const App = () => {
  const firebase = useFirebase();
  return (
    <Routes>
      {
        !firebase.isLoggedIn && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        )
      }

      {
        firebase.isLoggedIn && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Navigate to='/' />} />
            <Route path="/login" element={<Navigate to='/' />} />
            <Route path="/interviewForm" element={<InterviewDetailPage />} />
            <Route path="/interviewPage" element={<InterviewPage />} />
          </>
        )
      }

      {/* <Route path='*' element={<Wildcard />} /> */}
    </Routes>
  )
}

export default App;