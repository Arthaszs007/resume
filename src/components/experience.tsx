import React from "react";

const Experience = () => {
  return (
    <div className="w-full  px-10 py-5 bg-slate-200">
      <p className="text-2xl font-bold">Experience</p>
      <div className="divider divider-neutral"></div>
      <div className="flex flex-col gap-4">
        <p className="mb-2 text-justify font-bold">
          Southern Alberta Institute of Technology (SAIT) Junior Web Developer
        </p>
        <p>January 2024 - Present (7 months) Calgary, Alberta, Canada</p>
        <p className="text-justify">
          Proficient in JavaScript, React, and Next.js for building dynamic,
          interactive web applications. Skilled in modern web development
          technologies to create efficient, scalable solutions.
        </p>
        <p>Role: Full-stack Developer.</p>
        <p>Technologies Used:</p>
        <p>
          Front-end: &nbsp;&nbsp;React, TypeScript, Tailwind CSS, Redux. <br />
          Built dynamic game detail, home, sign in/up, ranking, and news pages.{" "}
          <br />
          Implemented authentication using NextAuth.js with GitHub provider
        </p>
        <p>
          Back-end: &nbsp;&nbsp; Node.js, MongoDB, Mongoose.
          <br />
          Created RESTful APIs and logic functions. <br />
          Managed database models and data validation.
        </p>
        <p>
          Tools: &nbsp;&nbsp; Development: VS Code with third-party plugins.
          <br />
          Version Control: Git for branch management (development and main
          branches).
          <br />
          Deployment: Vercel with environment variable configuration.
        </p>
      </div>
    </div>
  );
};

export default Experience;
