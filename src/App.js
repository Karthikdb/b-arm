import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./components/Endauth.js";
import DistLogin from "./components/DistLogin.js";
import "./style/main.css";
import "./style/style.css";


export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/distlogin">
          <DistLogin />
        </Route>
        <Route path="/createaccount">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div class="f11w1">
      <section class="u28 u28v0" id="u28" data-trackas="header">
        <div class="u28w1">
          <div class="cwidth">
            <div class="u28s1">
              <a class="u28home rw-logo" data-lbl="logo">Home</a>
              <a class="u28ham" data-trackas="menu" data-lbl="menu">Menu</a>
            </div>
            <div class="u28s2">
              <div class="u28w2">
                <form
                  name="askoracle"
                  id="askoracle"
                  class="askoracle"
                  data-contentpaths="/content/Web/Shared/Auto-Suggest Panel Event"
                  method="get"
                  action="index.html"
                >
                  <input type="hidden" name="Nty" value="1" />
                  <input type="hidden" name="Dy" value="1" />
                  <input type="hidden" name="Ntk" value="SI-ALL5" />
                  <input type="hidden" name="cty" value="in" />
                  <input type="hidden" name="lang" value="en" />
                  <div class="u28w3">
                    <div class="u28logo rw-logo"><span>Oracle</span></div>
                    <a class="u28-back rw-cv-left">
                      <span>Back</span>
                    </a>
                    <a class="u28-searchicon">
                      <span>Search</span>
                    </a>
                    <span class="u28input">
                      <input
                        id="askoracleinput"
                        name="Ntt"
                        data-filtertxt="Filtered By:"
                        data-ctytxt="Country: India"
                        value=""
                        data-prefix="Ask"
                        placeholder="Ask"
                        autocomplete="off"
                        role="combobox"
                        aria-label="Search Oracle.com"
                      />
                      <span class="u28-microphone rw-microphone">
                        <span>Search by voice</span>
                      </span>
                      <span class="u28submit icn-search">
                        <input
                          class="u28searchbttn"
                          type="submit"
                          value="Submit Search"
                        />
                      </span>
                    </span>
                  </div>
                </form>
              </div>
              <div class="u28-profile">
                <a class="u28prof" href="/createaccount" data-lbl="sign-in-account"
                  ><span>Sign In</span></a
                >
                <div class="u28-profilew1">
                  <span class="u28actbck u28back">Back</span>
                  <span class="u28acttitle">Oracle Account</span>
                  <ul class="u28l-out">
                    <li>
                      <a  data-lbl="profile:sign-in-account" class="u28btn1"
                        >Sign In</a
                      >
                    </li>
                    <li>
                      <a  data-lbl="profile:create-account" class="u28btn2"
                        >Create an Account</a
                      >
                    </li>
                  </ul>
                  <ul class="u28l-in">
                    <li><a data-lbl="help">Help</a></li>
                    <li>
                      <a id="u28pfile-sout" data-lbl="signout">Sign Out</a>
                    </li>
                  </ul>
                  <div class="u28-profilew2">
                    <span class="u28acttitle">Cloud Account</span>
                    <a class="u28cloudbg" data-lbl="sign-in-to-cloud"
                      >Sign in to Cloud</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="u28s3">
              <a class="u28b1" data-lbl="free-cloud-trial">Free Cloud Trial</a>
            </div>
          </div>
        </div>
        <div class="u28w4" id="u28w4">
          <div class="u28w1a u28w5 clstrgt">
            <div class="u28w6">
              <div class="u28w8 u28trgt"></div>
              <div class="u28w9">
                <div class="u28result u28noresults">
                  <div class="u28rw1">
                    <div class="u28rw2">
                      <h4>No results found</h4>
                      <p>Your search did not match any results</p>
                      <p>
                        We suggest you try the following to help find what
                        you're looking for:
                      </p>
                      <ul class="u28w7a">
                        <li>Check the spelling of your keyword search.</li>
                        <li>
                          Use synonyms for the keyword you typed, for example,
                          try &ldquo;application&rdquo; instead of
                          &ldquo;software.&rdquo;
                        </li>
                        <li>Try one of the popular searches shown below.</li>
                        <li>Start a new search.</li>
                      </ul>
                      <p>&nbsp;</p>
                      <p><strong>Trending Questions</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav id="u28nav" class="u28nav" data-trackas="menu">
          <span class="mnavback u28back">Back</span>
        </nav>
      </section>

      <section
        class="ch10 ch10v0 pghero herotabs"
        data-trackas="ch10"
        data-ocomid="ch10"
      >
        <div
          class="ch10bg"
        ></div>
        <div class="ch10w1">
          <div class="ch10w2 cwidth">
            <div class="ch10w3">
              <h2>Discover the global startups who are scaling with Oracle.</h2>
              <div class="obttns">
                <div>
                  <a>Read their Stories</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav
        class="u03 u03v5 u03bttns"
        data-trackas="breadcrumb"
        data-ocomid="u03"
      >
        <div class="cwidth">
          <div class="u03w1">
            <ul>
              <li class="u03first"><a>Oracle India</a></li>
            </ul>
            <h1></h1>
          </div>
          <div class="u03w2">
            <div class="u03w2">
              <div class="obttns">
                <div>
                  <a target="_blank">Distributor Login</a>
                </div>
                <div>
                  <a href="/createaccount" >Join now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav class="ct12 ct12v0" data-moretxt="More" data-ocomid="ct12">
        <div class="ct12w1 cwidth">
          <div class="ct12w2">
            <ul>
              <li>
                <div><a>Overview</a></div>
              </li>
              <li class="ct12current">
                <div><a>Meet the Startups</a></div>
              </li>
              <li>
                <div><a>Cloud for Startups</a></div>
              </li>
            </ul>
          </div>
          <div class="ct12w4">
            <div class="obttns">
              <div class="obttn4">
                <a>Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="cc01 cc01v0 cpad">
        <div class="cc01w1 cwidth">
          <h2 class="hd34">Why are startups building on Oracle Cloud?</h2>
          <ul class="obullets">
            <li>
              Startups worldwide are discovering that Oracle Cloud delivers the
              speed, security, and value they need to scale.
            </li>
            <li>
              Partnering with Oracle unlocks opportunities to up-level your
              solution, exposure, and customer base.
            </li>
            <li>
              Startups around the world and across industries are developing
              transformational technology with us.
            </li>
          </ul>
          <div class="obttns">
            <div>
              <a target="_blank" title="Join Oracle for Startups"
                >Join Oracle for Startups</a
              >
            </div>
          </div>
        </div>
      </section>

      <section
        class="cb71 cb71v0 cpad bgblue txtlight"
        data-trackas="cb71"
        data-ocomid="cb71"
      >
        <div class="cb71w1 cwidth">
          <div class="cb71w2">
            <div class="cb71w3">
              <h2>Startups Rev Up Customer Experience for Yamaha</h2>
              <p>
                Yamaha tapped two exciting startups to bring their CX vision to
                life. The powerful combination of an enterprise suite with
                integrated startup technology completed the vision of a seamless
                customer experience.
              </p>
              <div class="obttns">
                <div class="obttn1">
                  <a target="_blank">Read the Case Study (PDF)</a>
                </div>
              </div>
            </div>
            <div class="cb71w5">
              <img
                src="https://cdn.glitch.com/b36806ac-bf58-4782-83e7-5ba58b1bab5f%2Fyamaha-case-study.jpg?v=1586326910651"
                alt="Yamaha's customer experience Oracle Startup"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        class="cw81 cw81v0 bgvlightgrey cpad"
        data-trackas="cw81"
        data-ocomid="cw81"
        data-visblocksize="16"
        data-cw81more="View more"
        data-cw81less="View less"
        data-cw81noresult="No startups found."
        data-cw81ctaurl="Visit website"
      >
        <div class="cw81w1 cwidth">
          <h3>Meet the Startups</h3>
          <div class="cw81w2">
            <form class="oform">
              <div class="cw81w4">
                <input type="text" placeholder="Search" /><button
                  class="icn-img icn-search"
                >
                  &nbsp;
                </button>
              </div>
              <div class="col-framework col-smallgutters col3 col-noanimation">
                <div class="col-w1">
                  <div class="col-item">
                    <div class="col-item-w1 cw81region">
                      <select>
                        <option>All regions</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-item">
                    <div class="col-item-w1 cw81industry">
                      <select>
                        <option>All industries</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-item">
                    <div class="col-item-w1 cw81tech">
                      <select>
                        <option>All technologies</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div class="cw81tags">
              <ul>
                <li class="cw81tagreset">
                  <a><span>Clear All</span></a>
                </li>
              </ul>
            </div>
            <div class="cw81w3 col-framework col-multi col-gutters col4">
              <div
                class="col-w1 cw81hidden"
                data-template="cw81-startups"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="cb143 cb143v0 cpad"
        data-trackas="cb143"
        data-ocomid="cb143"
      >
        <div class="cb143w1 cwidth">
          <h2>Follow Oracle for Startups</h2>
          <ul class="icn-socialcolors">
            <li class="icn-twitter">
              <a target="_blank" title="Oracle on Twitter"
                ><span>Twitter</span></a
              >
            </li>
            <li class="icn-youtube">
              <a target="_blank" title="Oracle on YouTube"
                ><span>YouTube</span></a
              >
            </li>
            <li class="icn-blogs">
              <a target="_blank" title="Oracle Blogs"><span>Blogs</span></a>
            </li>
            <li class="icn-podcast">
              <a target="_blank" title="Oracle Podcast"><span>Podcast</span></a>
            </li>
          </ul>
        </div>
      </section>

      <div
        id="u10"
        class="u10 u10v6"
        data-trackas="ffooter"
        data-ocomid="redwood"
      >
        <div class="u10w1">
          <div class="u10w2">
            <div class="u10w3">
              <h5>Resources for</h5>
              <ul>
                <li><a data-lbl="resources-for:developer">Developers</a></li>
                <li><a data-lbl="resources-for:startup">Startups</a></li>
                <li>
                  <a data-lbl="resources-for:student-and-educator"
                    >Students and Educators</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="u10w2">
            <div class="u10w3">
              <h5>Partners</h5>
              <ul>
                <li>
                  <a data-lbl="partners:oracle-partnernetwork-ocom"
                    >Oracle PartnerNetwork</a
                  >
                </li>
                <li><a data-lbl="partners:find-partner">Find a Partner</a></li>
                <li><a data-lbl="partners:login-to-opn">Log in to OPN</a></li>
              </ul>
            </div>
          </div>
          <div class="u10w2">
            <div class="u10w3">
              <h5>Emerging Technologies</h5>
              <ul>
                <li>
                  <a data-lbl="emerging-tech:ai">Artificial Intelligence</a>
                </li>
                <li>
                  <a data-lbl="emerging-tech:internet-of-things"
                    >Internet of Things (IoT)</a
                  >
                </li>
                <li>
                  <a data-lbl="emerging-tech:solutions">More Solutions</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="u10w2">
            <div class="u10w3">
              <h5>How We Operate</h5>
              <ul>
                <li>
                  <a data-lbl="how-we-operate:cloud-security"
                    >Corporate Security Practices</a
                  >
                </li>
                <li>
                  <a data-lbl="how-we-operate:doing-business-with-oracle"
                    >Doing Business with Oracle</a
                  >
                </li>
                <li>
                  <a data-lbl="how-we-operate:oracle-at-oracle"
                    >Oracle@Oracle</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="u10w2">
            <div class="u10w3">
              <h5>Contact Us</h5>
              <ul>
                <li><a>Sales: +91 80 67862950</a></li>
                <li>
                  <a data-lbl="contact-us:global-contacts">Global Contacts</a>
                </li>
                <li>
                  <a data-lbl="contact-us:subscribe-to-emails"
                    >Subscribe to emails</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="u10w4">
            <hr />
          </div>
          <div class="u10w5">
            <ul class="scl-icons">
              <li class="scl-facebook">
                <a title="Oracle on Facebook" data-lbl="scl-icon:facebook"></a>
              </li>
              <li class="scl-twitter">
                <a
                  title="Follow Oracle on Twitter"
                  data-lbl="scl-icon:twitter"
                ></a>
              </li>
              <li class="scl-linkedin">
                <a title="Oracle on LinkedIn" data-lbl="scl-icon:linkedin"></a>
              </li>
              <li class="scl-youtube">
                <a
                  title="Watch Oracle on YouTube"
                  data-lbl="scl-icon:you-tube"
                ></a>
              </li>
            </ul>
            <div class="u10-ologo"><a>Oracle</a></div>
            <h3>Integrated Cloud Applications & Platform Services</h3>
            <ul class="u10-links">
              <li><a data-lbl="copyright">&#169; 2020 Oracle</a></li>
              <li><a data-lbl="site-map">Sitemap</a></li>
              <li>
                <a data-lbl="terms-of-use-and-privacy"
                  >Terms of Use and Privacy</a
                >
              </li>
              <li class="u10mtool" id="u10cmenu">
                <a class="u10ticon u10regn" data-lbl="country-region"
                  >Country/Region</a
                >
              </li>
              <li><div id="teconsent"></div></li>
              <li><a data-lbl="ad-choices">Ad Choices</a></li>
              <li><a data-lbl="ad-choices">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>)
}
