import Experience from "@/components/experience";
import Navigation from "@/components/navigation";
import Projects from "@/components/project";
import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col gap-6 my-6">
      <Navigation />
      <Experience />
      <Projects />
    </div>
  );
};

export default Resume;
