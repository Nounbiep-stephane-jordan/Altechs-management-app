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
                />
              }
            ></Route>
            <Route
              path="/add_vendor"
              exact={true}
              element={
                <Form
                  title={"Add Vendor"}
                  setMessage={setMessage}
                  type="vendor_store"
                />
              }
            ></Route>
            <Route
              path="/update/:id"
              exact={true}
              element={<Edit title={"Update Client"} setMessage={setMessage} />}
            ></Route>
            <Route
              path="/client_category"
              exact={true}
              element={<Category setMessage={setMessage} />}
            ></Route>
            <Route
              path="/vendors"
              exact={true}
              element={<Vendor setMessage={setMessage} />}
            ></Route>
            <Route
              path="/employees"
              exact={true}
              element={<Employee setMessage={setMessage} />}
            ></Route>
            <Route
              path="/interns"
              exact={true}
              element={<Intern setMessage={setMessage} />}
            ></Route>
            <Route
              path="/roles"
              exact={true}
              element={<Role setMessage={setMessage} />}
            ></Route>
            <Route
              path="/receipt"
              exact={true}
              element={<Receipt setMessage={setMessage} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </notificationContext.Provider>
    </>
  );
}

export default App;
