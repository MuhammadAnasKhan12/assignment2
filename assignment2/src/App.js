import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={"main"}>
        <div className={"top-bg"}>
          <div className={"bg-overlay"}></div>
          <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div class="container">
              <a href="/" class="logo text-uppercase navbar-brand">
                Dorsin
              </a>
              <button
                aria-label="Toggle navigation"
                type="button"
                class="navbar-toggler"
              >
                <i class="mdi mdi-menu"></i>
              </button>
              <div id="navbarCollapse" class="collapse navbar-collapse">
                <div data-nav="list" class="navbar-collapse">
                  <ul id="mySidenav" class="navbar-center navbar-nav">
                    <li class="nav-item">
                      <a href="#home" class="nav-link">
                        {" "}
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#services" class="nav-link">
                        {" "}
                        Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#features" class="nav-link">
                        {" "}
                        Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#pricing" class="nav-link">
                        {" "}
                        Pricing
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#team" class="nav-link">
                        {" "}
                        Team
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#blog" class="nav-link">
                        {" "}
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#contact" class="nav-link">
                        {" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div class="nav-button ms-auto">
                    <ul class="navbar-end navbar-nav">
                      <li>
                        <button
                          type="button"
                          class="btn btn-primary navbar-btn btn-rounded waves-effect waves-light btn btn-none"
                          fdprocessedid="qief9i"
                        >
                          Try it Free
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className={"mid-text"}>
            <div className={"mid-t"}>
              <h1>We help startups launch their products </h1>
              <div className={"mid-p"}>
                <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
              </div>
              <a class="play" href="/">
                <i class="fa-regular fa-circle-play"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={"mid"}>
          <div className={"mid-top"}>
            <h3>OUR SERVICES</h3>
            <div className={"mid-para"}>
              <p>
                We craft digital, graphic and dimensional thinking, to create
                category leading brand experiences that have meaning and add a
                value for our clients.
              </p>
            </div>
          </div>
          <div className={"mid-cards"}>
            <div class="card">
              <div class="card-body">
                <h3>
                  <i class="fa-sharp fa-solid fa-gem"></i>
                </h3>
                <h5 class="card-title">Digital Design</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Moltin gives you the platform.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h4>
                  <i class="fa-regular fa-rectangle-list"></i>
                </h4>
                <h5 class="card-title">Unlimited Colors</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Moltin gives you the platform.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h3>
                  <i class="fa-sharp fa-solid fa-gem"></i>
                </h3>
                <h5 class="card-title">Strategy Solutions</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Moltin gives you the platform.
                </p>
              </div>
            </div>
          </div>

          <div className={"mid-cards"}>
            <div class="card">
              <div class="card-body">
                <h3>
                  <i class="fa-brands fa-react"></i>
                </h3>
                <h5 class="card-title">Digital Design</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Moltin gives you the platform.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h4>
                  <i class="fa-sharp fa-solid fa-plane"></i>
                </h4>
                <h5 class="card-title">Unlimited Colors</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Moltin gives you the platform.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h3>
                  <i class="fa-sharp fa-solid fa-plane"></i>
                </h3>
                <h5 class="card-title">Strategy Solutions</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Moltin gives you the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <div className={"b1"}>
          <div className={"b-left"}>
            <div className={"b11"}>
              <h4>
                A digital web design studio creating modern & engaging online
                experiences
              </h4>
            </div>
            <p className={"mid-para"}>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia
            </p>

            <ul>
              <li>We put a lot of effort in design</li>
              <li>The most important ingredient of successful website.</li>
              <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
              <li>Submit Your Organization.</li>
            </ul>
          </div>
          <div className={"b-right"}></div>
        </div>
        {/* footer */}
        <div className={"footer"}>
          <div className={"f-c"}>
            <div className={"info"}>
              <div className={"list mt-4 col-lg-3"}>
                <h3>DORSIN</h3>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              <div className={"list mt-4 col-lg-3"}>
                <h3>Information</h3>
                <ul>
                  <li>Terms & Condition</li>
                  <li>About Us</li>
                  <li>Jobs</li>
                  <li>Bookmarks</li>
                </ul>
              </div>

              <div className={"list mt-4 col-lg-3"}>
                <h3>Support</h3>
                <ul>
                  <li>FAQ</li>
                  <li> Contact</li>
                  <li>Discussion</li>
                </ul>
              </div>

              <div className={"list mt-4 col-lg-3"}>
                <h3>Subscribe</h3>
                <p>
                  In an ideal world this text wouldn’t exist, a client would
                  acknowledge the importance of having web copy before the
                  design starts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
