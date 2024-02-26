import React, { RefObject } from "react";

const Contact = () => {
  return (
    <div id="Contact" className="my-4">
      <h2 className="text-3xl font-bold  my-8 ">Available for opportunities</h2>
      <div className="flex flex-col gap-12 max-w-sm">
        <p>
          Feel free to reach out if you are looking for a developer, have a
          question or just want to connect.
        </p>

        <a
          href="mailto:cherubinkubwayo@gmail.com"
          className="link link-primary"
        >
          cherubinkubwayo@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
