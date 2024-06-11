import React, { useState } from "react";
import { Table } from "react-bootstrap";

const ManageTransaction = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      userName: "John Michael",
      workshop: "Làm nến",
      price: "$150",
      quantity: "2",
      total: "$300",
      status: "Completed",
    },
    {
      id: 2,
      userName: "Alexa Liras",
      workshop: "Làm nến",
      price: "$150",
      quantity: "2",
      total: "$300",
      status: "Completed",
    },
    {
      id: 3,
      userName: "Laurent Perrier",
      workshop: "Làm nến",
      price: "$150",
      quantity: "2",
      total: "$300",
      status: "Cancel",
    },
    {
      id: 4,
      userName: "Michael Levi",
      workshop: "Làm nến",
      price: "$150",
      quantity: "2",
      total: "$300",
      status: "Completed",
    },
    {
      id: 5,
      userName: "Richard Gran",
      workshop: "Làm nến",
      price: "$150",
      quantity: "2",
      total: "$300",
      status: "Completed",
    },
    {
      id: 6,
      userName: "Miriam Eric",
      workshop: "Làm nến",
      price: "$150",
      quantity: "2",
      total: "$300",
      status: "In Progress",
    },
  ]);

  return (
    <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg">
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
                Transaction
                </li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Transaction</h6>
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
        <div className="card mb-4">
          <div className="card-header pb-4">
            <h5>Manage Transaction</h5>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <Table className="table align-items-center bg-danger mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-xs font-weight-bolder opacity-7 text-center">
                      No
                    </th>
                    <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                      User Name
                    </th>
                    <th className="text-uppercase text-xs font-weight-bolder opacity-7 text-center">
                      Workshop
                    </th>
                    <th className="text-uppercase text-xs font-weight-bolder opacity-7 text-center">
                      Price
                    </th>
                    <th className="text-uppercase text-xs font-weight-bolder opacity-7 text-center">
                      Quantity
                    </th>
                    <th className="text-uppercase text-xs font-weight-bolder opacity-7 text-center">
                      Total
                    </th>
                    <th className="text-uppercase text-xs font-weight-bolder opacity-7 text-center">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {transactions.map((transaction, index) => (
                    <tr key={transaction.id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="d-flex align-items-center ">
                          <h6 className="mb-0 text-sm">
                            {transaction.userName}
                          </h6>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs text-secondary mb-0">
                          {transaction.workshop}
                        </p>
                      </td>
                      <td>
                        <p className="text-xs text-secondary mb-0">
                          {transaction.price}
                        </p>
                      </td>
                      <td className="text-center">
                        <p className="text-xs text-secondary mb-0">
                          {transaction.quantity}
                        </p>
                      </td>
                      <td className="text-center">
                        <p className="text-xs text-secondary mb-0">
                          {transaction.total}
                        </p>
                      </td>
                      <td className="text-center">
                        <span
                          className={`badge ${
                            transaction.status === "Completed"
                              ? "bg-success"
                              : transaction.status === "Cancel"
                              ? "bg-danger"
                              : "bg-warning"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageTransaction;
