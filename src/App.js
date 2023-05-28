import React from 'react';
import Home from './Home/home';
import About from './About/about';
import Product from './Product/product';
import Pricing from './Pricing/pricing';
import Reviews from './Reviews/review';
import GovSection from './GovSection/govsection';
import Services from './Services/service';
import Articles from './Articles/articles';
import 'bootstrap/dist/css/bootstrap.css';

// import About from './About';
// Import other section components here

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Product />
      <Pricing />
      <Reviews />
      <GovSection />
      <Services />
      <Articles />
      {/* Render other section components here */}
    </div>
  );
}

export default App;
