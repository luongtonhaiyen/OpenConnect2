import React, { useState } from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Company = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Company X",
      description: "Cong ty chuyen ve nen thom",
      email: "X@gmail.com",
      phone: "123456789",
    },
    {
      id: 2,
      name: "Company Y",
      description: "Cong ty chuyen ve nen thom",
      email: "Y@gmail.com",
      phone: "987654321",
    },
    {
      id: 3,
      name: "Company Z",
      description: "Cong ty chuyen ve nen thom",
      email: "Z@gmail.com",
      phone: "123123123",
    },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleEdit = (company) => {
    setSelectedCompany(company);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedCompany(null);
  };

  const handleSaveEdit = () => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((w) =>
        w.id === selectedCompany.id ? selectedCompany : w
      )
    );
    setShowEditModal(false);
    setSelectedCompany(null);
  };

  const handleView = (company) => {
    setSelectedCompany(company);
    setShowViewModal(true);
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
    setSelectedCompany(null);
  };

  const handleShowAddModal = () => {
    setSelectedCompany({
      id: null,
      name: "",
      description: "",
      email: "",
      phone: "",
    });
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setSelectedCompany(null);
  };

  const handleSaveAdd = () => {
    const newCompany = {
      ...selectedCompany,
      id: companies.length + 1,
    };
    setCompanies([...companies, newCompany]);
    setShowAddModal(false);
    setSelectedCompany(null);
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
                  Manage Company
                </li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Manage Company</h6>
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
            <div className="card-header pb-4 d-flex justify-content-between align-items-center">
              <h5>Manage Company</h5>
              <Button variant="primary" onClick={handleShowAddModal}>
                Add New Company
              </Button>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <Table className="table align-items-center mb-0 bg-danger">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                        No
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                        Company Name
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
                    </tr>
                  </thead>
                  <tbody>
                    {companies.map((company, index) => (
                      <tr key={company.id}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <h6 className="mb-0 text-sm">{company.name}</h6>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {company.email}
                          </p>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {company.phone}
                          </p>
                        </td>
                        <td className="text-center">
                          <div className="d-flex justify-content-center">
                            <NavLink
                              to="#"
                              className="text-secondary font-weight-bold text-xs me-1"
                              data-toggle="tooltip"
                              data-original-title="Edit company"
                              onClick={() => handleEdit(company)}
                            >
                              Edit
                            </NavLink>
                            <NavLink
                              to="#"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="View company"
                              onClick={() => handleView(company)}
                            >
                              View
                            </NavLink>
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
        <Modal show={showEditModal} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter company name"
                  value={selectedCompany ? selectedCompany.name : ""}
                  onChange={(e) =>
                    setSelectedCompany({
                      ...selectedCompany,
                      name: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={selectedCompany ? selectedCompany.email : ""}
                  onChange={(e) =>
                    setSelectedCompany({
                      ...selectedCompany,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  value={selectedCompany ? selectedCompany.phone : ""}
                  onChange={(e) =>
                    setSelectedCompany({
                      ...selectedCompany,
                      phone: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter company description"
                  value={selectedCompany ? selectedCompany.description : ""}
                  onChange={(e) =>
                    setSelectedCompany({
                      ...selectedCompany,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
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

        {/* View Company Modal */}
        <Modal show={showViewModal} onHide={handleCloseViewModal}>
          <Modal.Header closeButton>
            <Modal.Title>View Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedCompany && (
              <div>
                <p>
                  <strong>Company Name: </strong>
                  {selectedCompany.name}
                </p>
                <p>
                  <strong>Email: </strong>
                  {selectedCompany.email}
                </p>
                <p>
                  <strong>Phone: </strong>
                  {selectedCompany.phone}
                </p>
                <p>
                  <strong>Description: </strong>
                  {selectedCompany.description}
                </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseViewModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Add Company Modal */}
        <Modal show={showAddModal} onHide={handleCloseAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formAddCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter company name"
                  value={selectedCompany ? selectedCompany.name : ""}
                  onChange={(e) =>
                    setSelectedCompany({
                      ...selectedCompany,
                      name: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={selectedCompany ? selectedCompany.email : ""}
                  onChange={(e) =>
                    setSelectedCompany({
                      ...selectedCompany,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  value={selectedCompany ? selectedCompany.phone : ""}
                  onChange={(e) =>
                    setSelectedCompany({
                      ...selectedCompany,
                      phone: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter company description"
                  value={selectedCompany ? selectedCompany.description : ""}
                  onChange={(e) =>
                    setSelectedCompany({
                      ...selectedCompany,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveAdd}>
              Add Company
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
};

export default Company;
