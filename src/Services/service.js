import React from "react";
import "./service.css";

const ServiceSection = () => {
  const loremIpsumText =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

  const handleScheduleMeeting = () => {
    // Handle the schedule meeting functionality
    console.log("Schedule meeting button clicked");
  };

  return (
    <section id="Service" className="gradient-custom">
      <div className="services">
        <h1>SEE WHAT WE CAN DO FOR YOU</h1>
        <h3>Schedule Your First Meeting</h3>
        <p>{loremIpsumText}</p>

        <button onClick={handleScheduleMeeting}>SCHEDULE NOW</button>
      </div>
    </section>
  );
};

export default ServiceSection;
