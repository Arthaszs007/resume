import Education from "@/components/education";
import Experience from "@/components/experience";
import Projects from "@/components/project";
import Summary from "@/components/summary";
import Title from "@/components/title";
import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col gap-6 my-6">
      <Title />
      <Summary />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
};

export default Main;
