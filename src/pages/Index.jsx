import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Packages from "../components/Packages";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

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
