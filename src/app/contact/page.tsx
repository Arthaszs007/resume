import Navigation from "@/components/navigation";
import React from "react";
import Contact from "@/components/contact";

const ContactMe = () => {
  return (
    <div className="flex flex-col gap-6 my-6">
      <Navigation />
      <Contact />
    </div>
  );
};

export default ContactMe;
