import React from "react";

const Title = () => {
  return (
    <div className="w-full  px-10 py-5 bg-slate-200">
      <div className="flex flex-row items-end gap-6 pt-2">
        <p className="text-4xl font-bold">Arthas Liu</p>
        <p className="font-bold mr-[15rem]">Web Developer</p>
        <p>Email: arthaszs007@gmail.com</p>
        <p>Tel: 5879686803</p>
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
