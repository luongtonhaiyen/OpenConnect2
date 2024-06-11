import React, { useState } from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ManageWorkshop = () => {
  const [workshops, setWorkshops] = useState([
    {
      id: 1,
      type: "Làm bánh",
      name: "Workshop A",
      description: "This is workshop A",
      date: "2023-06-15",
      time: "10:00 - 12:00",
      companyName: "Company X",
      price: "$100",
      quantity: "10",
      status: "Sold Out",
    },
    {
      id: 2,
      type: "Làm nến",
      name: "Workshop B",
      description: "This is workshop B",
      date: "2023-07-20",
      time: "14:00 - 16:00",
      companyName: "Company Y",
      price: "$120",
      quantity: "8",
      status: "Sold Out",
    },
    {
      id: 3,
      type: "Cắm hoa",
      name: "Workshop C",
      description: "This is workshop C",
      date: "2023-08-10",
      time: "09:00 - 11:00",
      companyName: "Company Z",
      price: "$80",
      quantity: "12",
      status: "Sold Out",
    },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const companies = ["Company X", "Company Y", "Company Z"];
  const types = ["Làm bánh", "Làm nến", "Cắm hoa", "Vẽ tranh", "Làm gốm"];

  const handleEdit = (workshop) => {
    setSelectedWorkshop(workshop);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedWorkshop(null);
  };

  const handleSaveEdit = () => {
    // Update the workshop in the list
    setWorkshops((prevWorkshops) =>
      prevWorkshops.map((w) =>
        w.id === selectedWorkshop.id ? selectedWorkshop : w
      )
    );
    setShowEditModal(false);
    setSelectedWorkshop(null);
  };

  const handleView = (workshop) => {
    setSelectedWorkshop(workshop);
    setShowViewModal(true);
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
    setSelectedWorkshop(null);
  };

  const handleStatusChange = (id) => {
    const updatedWorkshops = workshops.map((workshop) => {
      if (workshop.id === id) {
        workshop.status =
          workshop.status === "Sold Out" ? "Availability" : "Sold Out";
      }
      return workshop;
    });
    setWorkshops(updatedWorkshops);
  };

  const handleShowAddModal = () => {
    setSelectedWorkshop({
      id: null,
      name: "",
      companyName: companies[0],
      type: types[0],
      description: "",
      date: "",
      time: "",
      price: "",
      quantity: "",
    });
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setSelectedWorkshop(null);
  };

  const handleSaveAdd = () => {
    // Perform save logic for adding a new workshop
    const newWorkshop = {
      ...selectedWorkshop,
      id: workshops.length + 1, // Generate unique id
      status: "Avai", // Default status
    };

    setWorkshops([...workshops, newWorkshop]);
    setShowAddModal(false);
    setSelectedWorkshop(null);
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
                  Manage Workshop
                </li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Manage Workshop</h6>
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
              <h5>Manage Workshop</h5>
              <Button variant="primary" onClick={handleShowAddModal}>
                Add New Workshop
              </Button>
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
                        Type
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                        Name
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                        Date
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7 ">
                        Company Name
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                        Giá
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7">
                        Số lượng
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7 text-center">
                        Status
                      </th>
                      <th className="text-uppercase text-xs font-weight-bolder opacity-7 text-center">
                        Edit/View
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {workshops.map((workshop, index) => (
                      <tr key={workshop.id}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <h6 className="mb-0 text-sm">{workshop.type}</h6>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {workshop.name}
                          </p>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {workshop.date}
                          </p>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {workshop.companyName}
                          </p>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {workshop.price}
                          </p>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {workshop.quantity}
                          </p>
                        </td>
                        <td className="text-center">
                          <button
                            className={`btn btn-sm ${
                              workshop.status === "Availability"
                                ? "btn-success"
                                : "btn-secondary"
                            }`}
                            onClick={() => handleStatusChange(workshop.id)}
                          >
                            {workshop.status}
                          </button>
                        </td>
                        <td className="text-center">
                          <div className="d-flex justify-content-center">
                            <NavLink
                              to="#"
                              className="text-secondary font-weight-bold text-xs me-1"
                              data-toggle="tooltip"
                              data-original-title="Edit workshop"
                              onClick={() => handleEdit(workshop)}
                            >
                              Edit
                            </NavLink>
                            <NavLink
                              to="#"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="View workshop"
                              onClick={() => handleView(workshop)}
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

        {/* Modal Chỉnh Sửa Thông Tin Workshop */}
        <Modal show={showEditModal} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Workshop</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter workshop name"
                  value={selectedWorkshop ? selectedWorkshop.name : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      name: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Select
                  value={selectedWorkshop ? selectedWorkshop.companyName : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      companyName: e.target.value,
                    })
                  }
                >
                  {companies.map((company, index) => (
                    <option key={index} value={company}>
                      {company}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicType">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  value={selectedWorkshop ? selectedWorkshop.type : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      type: e.target.value,
                    })
                  }
                >
                  {types.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter workshop description"
                  value={selectedWorkshop ? selectedWorkshop.description : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Select workshop date"
                  value={selectedWorkshop ? selectedWorkshop.date : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      date: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter workshop time"
                  value={selectedWorkshop ? selectedWorkshop.time : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      time: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter workshop price"
                  value={selectedWorkshop ? selectedWorkshop.price : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      price: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter workshop quantity"
                  value={selectedWorkshop ? selectedWorkshop.quantity : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      quantity: e.target.value,
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

        {/* Modal Xem Chi Tiết Workshop */}
        <Modal show={showViewModal} onHide={handleCloseViewModal}>
          <Modal.Header closeButton>
            <Modal.Title>View Workshop</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="viewFormBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  plaintext
                  readOnly
                  defaultValue={selectedWorkshop ? selectedWorkshop.name : ""}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="viewFormBasicCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  plaintext
                  readOnly
                  defaultValue={
                    selectedWorkshop ? selectedWorkshop.companyName : ""
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="viewFormBasicType">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  plaintext
                  readOnly
                  defaultValue={selectedWorkshop ? selectedWorkshop.type : ""}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="viewFormBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  plaintext
                  readOnly
                  defaultValue={
                    selectedWorkshop ? selectedWorkshop.description : ""
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="viewFormBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  plaintext
                  readOnly
                  defaultValue={selectedWorkshop ? selectedWorkshop.date : ""}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="viewFormBasicTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  plaintext
                  readOnly
                  defaultValue={selectedWorkshop ? selectedWorkshop.time : ""}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="viewFormBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  plaintext
                  readOnly
                  defaultValue={selectedWorkshop ? selectedWorkshop.price : ""}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="viewFormBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="text"
                  plaintext
                  readOnly
                  defaultValue={
                    selectedWorkshop ? selectedWorkshop.quantity : ""
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseViewModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal Thêm Mới Workshop */}
        <Modal show={showAddModal} onHide={handleCloseAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Workshop</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="addFormBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter workshop name"
                  value={selectedWorkshop ? selectedWorkshop.name : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      name: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="addFormBasicCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Select
                  value={selectedWorkshop ? selectedWorkshop.companyName : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      companyName: e.target.value,
                    })
                  }
                >
                  {companies.map((company, index) => (
                    <option key={index} value={company}>
                      {company}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="addFormBasicType">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  value={selectedWorkshop ? selectedWorkshop.type : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      type: e.target.value,
                    })
                  }
                >
                  {types.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="addFormBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter workshop description"
                  value={selectedWorkshop ? selectedWorkshop.description : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="addFormBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Select workshop date"
                  value={selectedWorkshop ? selectedWorkshop.date : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      date: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="addFormBasicTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter workshop time"
                  value={selectedWorkshop ? selectedWorkshop.time : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      time: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="addFormBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter workshop price"
                  value={selectedWorkshop ? selectedWorkshop.price : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      price: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="addFormBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter workshop quantity"
                  value={selectedWorkshop ? selectedWorkshop.quantity : ""}
                  onChange={(e) =>
                    setSelectedWorkshop({
                      ...selectedWorkshop,
                      quantity: e.target.value,
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
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
};

export default ManageWorkshop;