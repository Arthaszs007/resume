"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Must fill full blanks");
      return;
    }
    alert("Form submitted successfully!");
  };
  return (
    <div className="w-full  px-10 py-5 bg-slate-200">
      <p className="text-2xl font-bold">Contact Me</p>
      <div className="divider divider-neutral"></div>
      <form className=" w-full flex justify-center" onSubmit={Submit}>
        <div className="w-[40rem] space-y-6">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              type="text"
              className="grow"
              placeholder="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              maxLength={16}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="email"
              className="grow"
              placeholder="name@site.com"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              maxLength={26}
            />
          </label>
          <textarea
            className="w-full"
            rows={5}
            cols={50}
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            maxLength={200}
          />
          <div className="w-full flex justify-center">
            <button className="btn btn-accent ">Submit</button>
          </div>
          <p></p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
