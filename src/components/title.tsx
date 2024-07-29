import React from "react";

const Title = () => {
  return (
    <div className="w-full  px-10 py-5 bg-slate-200">
      <div className="flex flex-row items-end gap-6 pt-2">
        <div className="avatar">
          <div className="mask mask-squircle w-24">
            <img src="/22.png" />
          </div>
        </div>
        <p className="text-4xl font-bold">Arthas Liu</p>
        <p className="font-bold mr-[2rem]">Web Developer</p>
        <div className="flex flex-col">
          <p>
            Github:
            <a href="https://github.com/Arthaszs007">
              https://github.com/Arthaszs007
            </a>
          </p>
          <p>
            Linkedin:
            <a href="https://www.linkedin.com/in/arthas-liu-4463b7304"></a>
            https://www.linkedin.com/in/arthas-liu-4463b7304
          </p>
        </div>
      </div>
      <div className="divider divider-neutral"></div>
      <div className="flex flex-row gap-4">
        <kbd className="kbd">Full-stack </kbd>
        <kbd className="kbd">JavaScript</kbd>
        <kbd className="kbd">TypeScript</kbd>
        <kbd className="kbd">Next.js</kbd> <kbd className="kbd">React</kbd>
        <kbd className="kbd">Node.js</kbd>
        <kbd className="kbd">Web Developer</kbd>
      </div>
    </div>
  );
};

export default Title;
