import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutUsPage from "./AboutUsPage.jsx";
import DonatePage from "./DonatePage.jsx";
import BlogPage from "./BlogPage.jsx";
import VolunteerPage from "./VolunteerPage.jsx";
import SignInPage from "./SignInPage.jsx";
import SignUpPage from "./SignUpPage.jsx";

function main() {
  return (
    <React.StrictMode>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </React.StrictMode>
  );
};
export default main;
