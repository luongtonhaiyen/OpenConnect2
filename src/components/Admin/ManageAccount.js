import React, { useState } from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ManageAccount = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      userName: "John Michael",
      email: "john@creative-tim.com",
      phone: "123-456-7890",
      status: "Online",
    },
    {
      id: 2,
      userName: "Alexa Liras",
      email: "alexa@creative-tim.com",
      phone: "234-567-8901",
      status: "Offline",
    },
    {
      id: 3,
      userName: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      phone: "345-678-9012",
      status: "Online",
    },
    {
      id: 4,
      userName: "Michael Levi",
      email: "michael@creative-tim.com",
      phone: "456-789-0123",
      status: "Online",
    },
    {
      id: 5,
      userName: "Richard Gran",
      email: "richard@creative-tim.com",
      phone: "567-890-1234",
      status: "Offline",
    },
    {
      id: 6,
      userName: "Miriam Eric",
      email: "miriam@creative-tim.com",
      phone: "678-901-2345",
      status: "Offline",
    },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleSaveEdit = () => {
    // Perform save logic here
    // For example, update the user information in the state or make an API call
    // After saving, close the modal
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleView = (user) => {
    // Handle view logic here, if needed
    console.log("Viewing user:", user);
  };

  const handleStatusChange = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        user.status = user.status === "Online" ? "Offline" : "Online";
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <>
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
              ManageAccount
                </li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Manage Account</h6>
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
              <h5>Manage Account</h5>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <Table className="table align-items-center bg-danger mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                        No
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                        User Name
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                        Email
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                        Phone
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7 text-center">
                        Edit/View
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7 text-center">
                        Lock/Unlock
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <h6 className="mb-0 text-sm">{user.userName}</h6>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {user.email}
                          </p>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {user.phone}
                          </p>
                        </td>
                        <td className="text-center">
                          <div className="d-flex justify-content-center">
                            <button
                              className="text-secondary font-weight-bold text-xs"
                              onClick={() => handleEdit(user)}
                            >
                              Edit
                            </button>
                            <button
                              className="text-secondary font-weight-bold text-xs"
                              onClick={() => handleView(user)}
                            >
                              View
                            </button>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="d-flex justify-content-center">
                            <button
                              className={`btn btn-sm ${
                                user.status === "Online"
                                  ? "btn-success"
                                  : "btn-secondary"
                              }`}
                              onClick={() => handleStatusChange(user.id)}
                            >
                              {user.status === "Online" ? "Unlock" : "Lock"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        {/* Modal chỉnh sửa thông tin người dùng */}
        <Modal show={showEditModal} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedUser && (
              <Form>
                <Form.Group className="mb-3" controlId="formEditUserName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedUser.userName}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        userName: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEditEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={selectedUser.email}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        email: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEditPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedUser.phone}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        phone: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
};

export default ManageAccount;
