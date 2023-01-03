const Footer = () => {
    return (
      <>
       
      <footer class="py-3">
        <div class="container-fluid">
          <div class="row justify-content-center align-items-center gy-3 gy-md-0">
            <div class="col-md text-center">
              <a class="navbar-brand" href="#">
                <img
                  src="images/footerlogo.png"
                  width="150px"
                  alt="logo"
                  srcset=""
                />
              </a>
            </div>
            <div class="col-md text-center">
              <ul class="nav justify-content-center">
                <li class="nav-item footer">
                  <a
                    class="nav-link text-white active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item footer">
                  <a class="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item footer">
                  <a class="nav-link text-white" href="#">
                    FAQ
                  </a>
                </li>
                <li class="nav-item footer">
                  <a class="nav-link text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <ul class="nav justify-content-center">
                <li class="nav-item footer">
                  <a
                    class="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li class="nav-item footer">
                  <a class="nav-link text-white" href="#">
                    Terms & Conditions
                  </a>
                </li>
                <li class="nav-item footer">
                  <a class="nav-link text-white" href="#">
                    Cancellation & Refund Policy
                  </a>
                </li>
              </ul>
              <p class="text-white footer">
                &copy;2022 Bookmypet.All Rights Reserved.
              </p>
            </div>
            <div class="col-md text-center">
              <a href="#">
                <img
                  class="footicon"
                  src="https://www.bookmypet.com/img/visa.png"
                  alt=""
                  srcset=""
                />
              </a>
              <a href="#">
                <img
                  class="footicon"
                  src="https://www.bookmypet.com/img/facebook.png"
                  alt=""
                  srcset=""
                />
              </a>
              <a href="#">
                <img
                  class="footicon"
                  src="https://www.bookmypet.com/img/instagram.png"
                  alt=""
                  srcset=""
                />
              </a>
              <a href="#">
                <img
                  class="footicon"
                  src="https://www.bookmypet.com/img/tik-tok.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      </>
    );
  };
  
  export default Footer;
  