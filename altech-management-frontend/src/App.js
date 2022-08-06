import Sidebar from "./containers/SideBar/sidebar";
import "./App.css";
import Header from "./containers/header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from "./containers/pages/client/client";
import Form from "./component/Form/Form";
import Category from "./containers/pages/client/category/ClientCategory";

import { createContext, useState } from "react";
import Edit from "./component/Form/edit/edit";
import Vendor from "./containers/pages/vendor/vendor";
import Employee from "./containers/pages/employee/employee";
import Intern from "./containers/pages/intern/Intern";
import Role from "./containers/pages/role/Role";
import Receipt from "./containers/pages/receipt/Receipt";
import EmployeeForm from "./containers/pages/employee/form/employeeForm";
import InternForm from "./containers/pages/intern/form/InternForm";
import InternEdit from "./containers/pages/intern/form/internEdit";
import RoleForm from "./containers/pages/role/form/roleForm";
import RoleEdit from "./containers/pages/role/form/roleEdit";
import ReceiptForm from "./containers/pages/receipt/form/receiptForm";
import ReceiptEdit from "./containers/pages/receipt/form/receiptEdit";
import VendorEdit from "./containers/pages/vendor/form/vendorEdit";
import VendorCategory from "./containers/pages/vendor/category/vendorCategory";
import ReceiptCategory from "./containers/pages/receipt/category/receiptCategory";
import Home from "./containers/home/home";

export const notificationContext = createContext("");
function App() {
  const [message, setMessage] = useState("");

  return (
    <>
      <notificationContext.Provider value={message}>
        <BrowserRouter>
          <Header />
          <Sidebar />

          <Routes>
            <Route
              path="/"
              element={<Home setnewMessage={setMessage} />}
            ></Route>
            <Route
              path="/client"
              exact={true}
              element={<Client setnewMessage={setMessage} />}
            ></Route>
            <Route
              path="/add"
              exact={true}
              element={
                <Form
                  title={"Add Client"}
                  setMessage={setMessage}
                  type="clients_store"
                  route="client"
                />
              }
            ></Route>
            <Route
              path="/add_employee"
              exact={true}
              element={<EmployeeForm setMessage={setMessage} />}
            ></Route>
            <Route
              path="/add_vendor"
              exact={true}
              element={
                <Form
                  title={"Add Vendor"}
                  setMessage={setMessage}
                  type="vendor_store"
                  route="vendors"
                />
              }
            ></Route>
            <Route
              path="/add_intern"
              exact={true}
              element={<InternForm setMessage={setMessage} />}
            ></Route>
            <Route
              path="/add_role"
              exact={true}
              element={<RoleForm setMessage={setMessage} />}
            ></Route>
            <Route
              path="/add_receipt"
              exact={true}
              element={<ReceiptForm setMessage={setMessage} />}
            ></Route>
            <Route
              path="/update_vendor/:id"
              exact={true}
              element={
                <VendorEdit
                  title={"Update vendor"}
                  setMessage={setMessage}
                  type="vendor_update"
                  route="vendors"
                  edit="vendor_edit"
                />
              }
            ></Route>
            <Route
              path="/update_client/:id"
              exact={true}
              element={
                <Edit
                  title={"Update client"}
                  setMessage={setMessage}
                  type="clients_update"
                  route="client"
                  edit="clients_edit"
                />
              }
            ></Route>
            <Route
              path="/update_intern/:id"
              exact={true}
              element={<InternEdit setMessage={setMessage} />}
            ></Route>
            <Route
              path="/update_role/:id"
              exact={true}
              element={<RoleEdit setMessage={setMessage} />}
            ></Route>
            <Route
              path="/update_receipt/:id"
              exact={true}
              element={<ReceiptEdit setMessage={setMessage} />}
            ></Route>
            <Route
              path="/client_category"
              exact={true}
              element={<Category setMessage={setMessage} />}
            ></Route>
            <Route
              path="/vendor_category"
              exact={true}
              element={<VendorCategory setMessage={setMessage} />}
            ></Route>
            <Route
              path="/receipt_category"
              exact={true}
              element={<ReceiptCategory setMessage={setMessage} />}
            ></Route>
            <Route
              path="/vendors"
              exact={true}
              element={<Vendor setnewMessage={setMessage} />}
            ></Route>
            <Route
              path="/employees"
              exact={true}
              element={<Employee setnewMessage={setMessage} />}
            ></Route>
            <Route
              path="/interns"
              exact={true}
              element={<Intern setnewMessage={setMessage} />}
            ></Route>
            <Route
              path="/roles"
              exact={true}
              element={<Role setnewMessage={setMessage} />}
            ></Route>
            <Route
              path="/receipts"
              exact={true}
              element={<Receipt setnewMessage={setMessage} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </notificationContext.Provider>
    </>
  );
}

export default App;
