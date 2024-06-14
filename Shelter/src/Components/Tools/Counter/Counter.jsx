import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth <= 768; // Adjust the breakpoint as needed


  return (
    <div className="counter-container" style={{ backgroundColor: '#27295b' }}>

      {/* <div className={`counter-item ${isSmallScreen ? 'small-screen' : 'large-screen'}`}>
        <span className="counter-value">234k</span>
        <span className="counter-label">Clients</span>
      </div>
      <div className={`counter-item ${isSmallScreen ? 'small-screen' : 'large-screen'}`}>
        <span className="counter-value">10</span>
        <span className="counter-label">Years Experience</span>
      </div>
      <div className={`counter-item ${isSmallScreen ? 'small-screen' : 'large-screen'}`}>
        <span className="counter-value">115</span>
        <span className="counter-label">Managed Properties</span>
      </div> */}
      <section style={{ display: "flex", justifyContent: "center" }}>
  {/* Container */}
  <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Component */}
    <div className="mx-auto flex w-full max-w-[798px] flex-col rounded-[36px] bg-blue py-8 text-white">
      {/* Facts Div */}
      <div
        className="grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {/* Fact Item */}
        <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
          <h4 className="mb-4 text-2xl font-bold md:text-3xl">200+</h4>
          <p className="text-sm">Blocks</p>
        </div>
        {/* Fact Item */}
        <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
          <h4 className="mb-4 text-2xl font-bold md:text-3xl">45</h4>
          <p className="text-sm">Templates</p>
        </div>
        {/* Fact Item */}
        <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
          <h4 className="mb-4 text-2xl font-bold md:text-3xl">1500+</h4>
          <p className="text-sm">Customers</p>
        </div>
        {/* Fact Item */}
        <div className="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
          <h4 className="mb-4 text-2xl font-bold md:text-3xl">890</h4>
          <p className="text-sm">Support Tickets</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Counter;