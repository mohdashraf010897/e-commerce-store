import React from "react";

const NotFound = () => {
  return (
    <div className="not-found">
      {" "}
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <a class="button" href="/">
        <i class="icon-home"></i> Go back in initial page, is better.
      </a>{" "}
    </div>
  );
};

export default NotFound;
