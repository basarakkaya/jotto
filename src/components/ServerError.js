import React from "react";

const ServerError = () => {
  return (
    <div data-test="server-error" className="alert alert-danger">
      There was an error retrieving the secret word; please try again later!
    </div>
  );
};

export default ServerError;
