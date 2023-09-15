import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactsList from "../pages/ContactsList";
import AddNewContact from "../pages/AddNewContact"
import ModifyContact from "../pages/ModifyContact"


const Router = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<ContactsList/>} />
        <Route path="/create" element={<AddNewContact/>} />
        <Route path="*" element={<h1>404 error!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;