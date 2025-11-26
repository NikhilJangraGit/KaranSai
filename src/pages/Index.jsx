import { useState, useEffect } from "react";
import Navigation from "../components/Navigation.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Packages from "../components/Packages.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {

  return (<>    
          <Navigation />
          <Hero />
          <Services />
          <Packages />
          <ContactForm />
          <Footer />
          </>
  );
};

export default Index;
