import React from "react";

export default function Header() {
  return (
    <>
    <div className="container p-lg-5">
      <div className="text-center">
        <img src="image/bootstrap-logo.svg.png" alt="logo" />
      </div>
      <div className="text-center mt-lg-3">
        <p className="fw-medium fs-3">Create Product</p>
        <p className="text-secondary-emphasis fs-4">
          Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
        </p>
      </div>
    </div>
    </>
  );
}
