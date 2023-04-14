import { Button, Col, Container, Form, FormCheck, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import CustomSidebar from "./CustomSidebar";
import CustomPlayer from "./CustomPlayer";
import CustomMain from "./CustomMain";

const CustomIndex = () => {
  return (
    <>
      <div className="d-flex">
        <CustomSidebar />;
        <CustomMain />
      </div>

      <CustomPlayer />
    </>
  );
};

export default CustomIndex;
