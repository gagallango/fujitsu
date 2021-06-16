import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slot.css";
import {
  faStar,
  faFileImport,
  faShareAlt,
  faSortDown,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SLot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: [],
      showing: true,
    };
  }

  renderList = () => {
    const { showing } = this.state;

    if (this.props.slots.length > 0) {
      return this.props.slots.map((item, key) => (
        <Container className="main-slot" key={item.id}>
          <Row className="rect-slot">
            <Col>
              <Row>
                <Col className="general" xs="2">
                  <FontAwesomeIcon icon={faStar} />
                </Col>
                <Col className="general" xs>
                  <div className="slot-content">
                    <p className="slot-document-name">{item.title}</p>
                    <p className="slot-document-type">{item.extra}</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="general slot-description">{item.description}</Col>
            <Col className="general">
              <Col className="completed" xs="6">
                {item.slotState}
              </Col>
              {item.number ? (
                <Col className="number" xs="2">
                  <div className="number_div">
                    <FontAwesomeIcon icon={faShareAlt} />
                  </div>
                  {item.number}
                </Col>
              ) : null}

              {item.docs ? (
                <Col className="docs" xs="2">
                  <div className="number_div">
                    <FontAwesomeIcon icon={faFileImport} />
                  </div>
                  {item.docs}
                </Col>
              ) : null}
              <div className="sort-down">
                <FontAwesomeIcon
                  icon={faSortDown}
                  onClick={() => this.setState({ showing: !showing })}
                />
              </div>
            </Col>
          </Row>
          {showing ? (
            <Row className="rectangle-slot">
              <Col>
                <Row>
                  <Col xs="4" className="sub-slot">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </Col>
                  <Col xs="8" className="sub-slot">
                    <p className="general_two">Origen:</p>
                    <p className="general_three">{item.origin}</p>
                    <br />
                    <p className="general_two">Evaluación de la fuente:</p>
                    <p className="general_three">{item.evaluation}</p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="sub-slot">
                    <p className="general_two">Plantilla utilizada:</p>
                    <p className="general_three">{item.layout}</p>
                    <br />
                    <p className="general_two">Fecha de creación:</p>
                    <p className="general_three">{item.createdDate}</p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="sub-slot">
                    <p className="general_two">Restricciones del documento:</p>
                    <p className="general_three">{item.restrictions}</p>
                    <br />
                    <p className="general_two">Etiquetas del documento:</p>
                    <p className="general_three">{item.tags}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : null}
        </Container>
      ));
    }
    return null;
  };

  render() {
    return <>{this.renderList()}</>;
  }
}
