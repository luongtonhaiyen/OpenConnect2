import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../components";


const Login = () => {
  return (
    <>
      <Header/>
      <div className="container my-3 py-3"style={{ backgroundColor: '#f0f9ff' }}>
        <h1 className="text-center">Đăng nhập</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label for="display-4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="my-3">
                <label for="floatingPassword display-4">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>Bạn chưa có tài khoản ? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-primary" type="submit" disabled>
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
