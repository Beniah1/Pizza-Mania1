import React from "react";

const Navbar = () => {
  // Your code here

  return (
    <div>
    <nav class="navbar navbar-expand-lg ctm-color">
      <div class="container">
        <a class="navbar-brand text-white fw-bold" href="#pizzamania">PIZZAMANIA</a>
        <button
          class="navbar-toggler navbar-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#types">Types</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>    </div>
  ); }


export default Navbar; 
