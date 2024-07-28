import React from "react";

const Projects = () => {
  return (
    <div className="w-full  px-10 py-5 bg-slate-200">
      <p className="text-2xl font-bold">Projects</p>
      <div className="divider divider-neutral"></div>
      <div className="flex flex-col gap-4">
        <p className="mb-2 text-justify font-bold">
          Game Points (GP) · (2024 - Present)
        </p>
        <p>
          This is a Next.js project, a game rating collection website. Use
          typescript, tailwind to create.
        </p>
        <p className="text-justify">Front-end: React</p>
        <p>Back-end: Node.js</p>
        <p>Database: MongoDB</p>
      </div>
    </div>
  );
};

export default Projects;
