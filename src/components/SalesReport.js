import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Row, Table } from "react-bootstrap";

const SalesReport = () => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Table striped bordered hover className="cart-table">
          <thead>
            <tr>
              <th>Title</th>
              <th className="mouse-hover">
                <FontAwesomeIcon icon="sort" size="sm" /> Sunday
              </th>
              <th className="mouse-hover">
                <FontAwesomeIcon icon="sort" size="sm" /> Monday
              </th>
              <th className="mouse-hover">
                <FontAwesomeIcon icon="sort" size="sm" /> Tuesday
              </th>
              <th className="mouse-hover">
                <FontAwesomeIcon icon="sort" size="sm" /> Wednesday
              </th>
              <th className="mouse-hover">
                <FontAwesomeIcon icon="sort" size="sm" /> Thursday
              </th>
              <th>Friday</th>
              <th className="mouse-hover">
                <FontAwesomeIcon icon="sort" size="sm" /> Saturday
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Quantity (/drink)</td>
              <td>150</td>
              <td> 100 </td>
              <td> 150 </td>
              <td> 250 </td>
              <td> 350 </td>
              <td> 370 </td>
              <td> 110 </td>
            </tr>
            <tr>
              <td>Price Average (USD)</td>
              <td>3</td>
              <td> 4 </td>
              <td> 3 </td>
              <td> 5 </td>
              <td> 3 </td>
              <td> 4 </td>
              <td> 3 </td>
            </tr>
            <tr>
              {" "}
              <td>Cost (USD)</td>
              <td> 50 </td>
              <td>50 </td>
              <td>50 </td>
              <td>50 </td>
              <td>50 </td>
              <td>50 </td>
              <td>50 </td>
            </tr>
            <tr>
              <td className="total-revenue">Revenue (USD)</td>
              <td> {3 * 150} </td>
              <td> {4 * 100} </td>
              <td> {3 * 150} </td>
              <td> {5 * 250} </td>
              <td> {3 * 350} </td>
              <td> {4 * 370} </td>
              <td> {3 * 110} </td>
            </tr>
            <tr>
              <td>Profit (USD)</td>
              <td> {3 * 150 - 50} </td>
              <td> {4 * 100 - 50} </td>
              <td> {3 * 150 - 50} </td>
              <td> {5 * 2500 - 50} </td>
              <td> {3 * 350 - 50} </td>
              <td> {4 * 370 - 50} </td>
              <td> {3 * 110 - 50} </td>
            </tr>
          </tbody>{" "}
        </Table>
      </Row>
    </Container>
  );
};

export default SalesReport;
