import React from "react";
import { Container } from "react-bootstrap";
import AdminChart from "../../components/AdminChart";
import SalesReport from "../../components/SalesReport";

const Dashboard = () => {
  return (
    <Container
      style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        border: "1px solid black",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <AdminChart />

      <SalesReport />
    </Container>
  );
};

export default Dashboard;
