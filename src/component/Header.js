import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top px-3">
        <div class="container-fluid align-items-end">
          <Link class="navbar-brand" to="/">
            <img
              src="images/logo.png"
              class="img-fluid logo"
              alt="logo"
              srcset=""
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav m-auto">
              <li class="nav-item mx-md-2">
                <Link
                  to="/"
                  class="nav-link active fw-bold text-primary"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item mx-md-3">
                <Link class="nav-link fw-bold text-primary" to="about">
                  About
                </Link>
              </li>
              <li class="nav-item mx-md-3">
                <Link class="nav-link fw-bold text-primary" to="blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item mx-md-3">
                <Link class="nav-link fw-bold text-primary" to="faq">
                  FAQ
                </Link>
              </li>
            </ul>
            <form class="d-md-flex justify-content-center align-items-center">
              <div class="text-start my-2 my-md-0">
                <button
                  class="login btn btn-none rounded-pill mx-1"
                  type="submit"
                >
                  Sign In
                </button>
                <button
                  class="login btn btn-none rounded-pill mx-1"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
