import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import img from "./assets/prudential.png";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TiMessages } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";
export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-light row">
        <div className="col-1"></div>
        <div class="container col-10">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <img src={img} />
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div class="d-flex align-items-center" role="search">
              <HiMagnifyingGlass className="mag" />
              <TiMessages className="msg" />
              <CiCreditCard1 className="crd" />
              Online Payments
              <div class="d-flex " className="click">
                <a class="indv" href="">
                  Individual
                </a>
                <a href="">Cooperate</a>
              </div>
              <button>Login</button>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </nav>

      <div class=" row">
        <div class="col-1"></div>
        <ul class="col-10  d-flex justify-content-around bg-danger pt-3 pb-3 mt-3 rounded-start rounded-end">
          <li>Life stimulator</li>
          <li>Buy a policy</li>
          <li>Make a claim</li>
          <li>Talk to an Adviser</li>
          <li>About PZL</li>
          <li>Readers digest</li>
        </ul>
        <div class="col-1"></div>
      </div>
    </>
  );
}
