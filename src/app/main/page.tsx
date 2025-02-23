import Navigation from "@/components/navigation";
import Summary from "@/components/summary";
import Title from "@/components/title";
import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col gap-6 my-6">
      <Navigation />
      <Title />
      <Summary />
    </div>
  );
};

export default Main;
