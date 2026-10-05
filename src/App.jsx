import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./gx/Nav";
import Hero from "./gx/Hero";
import BeforeAfter from "./gx/BeforeAfter";
import Features from "./gx/Features";
import Steps from "./gx/Steps";
import Showcase from "./gx/Showcase";
import Pricing from "./gx/Pricing";
import Testimonials from "./gx/Testimonials";
import Faq from "./gx/Faq";
import FinalCta from "./gx/FinalCta";
import Footer from "./gx/Footer";

import LegalPage from "./gx/LegalPage";
import About from "./pages/About";
import { privacyContent, termsContent } from "./gx/legalData";

function LandingPage() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <BeforeAfter />
        <Features />
        <Steps />
        <Showcase />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div
        id="top"
        className="relative min-h-screen overflow-x-clip bg-paper text-ink"
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/privacy-policy"
            element={<LegalPage content={privacyContent} />}
          />

          <Route
            path="/terms-and-conditions"
            element={<LegalPage content={termsContent} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}