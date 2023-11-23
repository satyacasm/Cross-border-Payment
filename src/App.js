import React from 'react';
import Vision from './components/Vision';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import FeedbackForm from './components/Feedback';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Vision />
      <Cards />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;