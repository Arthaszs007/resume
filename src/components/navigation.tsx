import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <div className="navbar bg-slate-200">
        <Link className="btn btn-ghost text-xl" href={"/main"}>
          Home
        </Link>
        <Link className="btn btn-ghost text-xl" href={"/resume"}>
          Resume
        </Link>
        <Link className="btn btn-ghost text-xl" href={"contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
