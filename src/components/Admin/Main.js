import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";

export default function Main() {
  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
          id="navbarBlur"
          navbar-scroll="true"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-5 text-dark" href="javascript:;">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Dashboard</h6>
            </nav>
            <div
              className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group">
                  <span className="input-group-text text-body">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-body font-weight-bold px-0"
                  >
                    <i className="fa fa-user me-sm-1"></i>
                    <span className="d-sm-inline d-none">Admin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                          Today's Money
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                          $53,000
                          <span className="text-success text-sm font-weight-bolder">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          className="fa-solid fa-coins text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                          Today's Users
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                          2,300
                          <span className="text-success text-sm font-weight-bolder">
                            +3%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          className="fa-solid fa-earth-americas text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                          New Clients
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                          +3,462
                          <span className="text-danger text-sm font-weight-bolder">
                            -2%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          className="fa-regular fa-newspaper text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                          Sales
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                          $103,430
                          <span className="text-success text-sm font-weight-bolder">
                            +5%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          className="fa-solid fa-cart-shopping text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-lg-5 mb-lg-0 mb-4">
                <div class="card z-index-2">
                  <div class="card-body p-3">
                    <div class="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3">
                      <div class="chart">
                        <BarChart />
                      </div>
                    </div>
                    <h6 class="ms-2 mt-4 mb-0"> Active Users </h6>
                    <p class="text-sm ms-2">
                      {" "}
                      (<span class="font-weight-bolder">+23%</span>) than last
                      week{" "}
                    </p>
                    <div class="container border-radius-lg">
                      <div class="row">
                        <div class="col-3 py-3 ps-0">
                          <div class="d-flex mb-2">
                            <div class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center"></div>
                            <p class="text-xs mt-1 mb-0 font-weight-bold">
                              Users
                            </p>
                          </div>
                          <h4 class="font-weight-bolder">36K</h4>
                          <div class="progress w-75">
                            <div
                              class="progress-bar bg-dark w-60"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div class="col-3 py-3 ps-0">
                          <div class="d-flex mb-2">
                            <div class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center me-2 d-flex align-items-center justify-content-center"></div>
                            <p class="text-xs mt-1 mb-0 font-weight-bold">
                              Clicks
                            </p>
                          </div>
                          <h4 class="font-weight-bolder">2m</h4>
                          <div class="progress w-75">
                            <div
                              class="progress-bar bg-dark w-90"
                              role="progressbar"
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div class="col-3 py-3 ps-0">
                          <div class="d-flex mb-2">
                            <div class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center me-2 d-flex align-items-center justify-content-center"></div>
                            <p class="text-xs mt-1 mb-0 font-weight-bold">
                              Sales
                            </p>
                          </div>
                          <h4 class="font-weight-bolder">435$</h4>
                          <div class="progress w-75">
                            <div
                              class="progress-bar bg-dark w-30"
                              role="progressbar"
                              aria-valuenow="30"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div class="col-3 py-3 ps-0">
                          <div class="d-flex mb-2">
                            <div class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center me-2 d-flex align-items-center justify-content-center"></div>
                            <p class="text-xs mt-1 mb-0 font-weight-bold">
                              Items
                            </p>
                          </div>
                          <h4 class="font-weight-bolder">43</h4>
                          <div class="progress w-75">
                            <div
                              class="progress-bar bg-dark w-50"
                              role="progressbar"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="card z-index-2">
                  <div class="card-header pb-0">
                    <h6>Sales overview</h6>
                    <p class="text-sm">
                      <i class="fa fa-arrow-up text-success"></i>
                      <span class="font-weight-bold">4% more</span> in 2024
                    </p>
                  </div>
                  <div class="card-body p-3">
                    <div class="chart">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
