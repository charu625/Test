import React from "react";
import "bootrap/dist/css/boostrap.css";
const Navbar = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="row">
          <div className="col-sm-2">Home</div>
          <div className="col-sm-2">About</div>
          <div className="col-sm-2">Post</div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
