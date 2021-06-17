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
  faFileAlt,
  faAngleDoubleDown,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

const MAX_LENGTH = 25;

export default class SLot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: [],
      showing: true,
    };
  }

  showTooltip() {
    <ReactTooltip id="button-tooltip">Simple tooltip</ReactTooltip>;
  }

  renderList = () => {
    const { showing } = this.state;

    if (this.props.slots.length > 0) {
      return this.props.slots.map((item, key) => (
        <Container className="main-slot" key={item.id}>
          <Row className="rect-slot">
            <Col>
              <Row>
                <Col className="general star_slot" xs="2">
                  <FontAwesomeIcon icon={faStar} />
                </Col>
                <Col className="general" xs="2">
                  {item.docType}
                </Col>
                <Col className="general" xs>
                  <div className="slot-content">
                    <p className="slot-document-name">{item.title}</p>
                    <p className="slot-document-type">
                      {item.extra} <FontAwesomeIcon icon={faDownload} />{" "}
                    </p>
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
                  <a href="#" className="slot_link">
                    {item.number}
                  </a>
                </Col>
              ) : null}

              {item.docs ? (
                <Col className="docs" xs="2">
                  <div className="number_div">
                    <FontAwesomeIcon icon={faFileImport} />
                  </div>
                  <a href="#" className="slot_link">
                    {item.docs}
                  </a>
                </Col>
              ) : null}
            </Col>
            <Col xs="1">
              <div className="sort-down">
                <FontAwesomeIcon
                  icon={faAngleDoubleDown}
                  size="xs"
                  onClick={() => this.setState({ showing: !showing })}
                />
              </div>
            </Col>
          </Row>

          {item.origin &&
          item.evaluation &&
          item.layout &&
          item.createdDate &&
          item.restrictions &&
          item.tags &&
          showing ? (
            <Row className="rectangle-slot">
              <Col>
                <Row>
                  <Col xs="4" className="sub-slot star_slot">
                    <FontAwesomeIcon size="6x" icon={faFileAlt} />
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
                    {item.tags.length > MAX_LENGTH ? (
                      <div
                        data-tip
                        data-for="registerTip"
                        className="general_three"
                      >
                        {`${item.tags.substring(0, MAX_LENGTH)}...`}
                        <ReactTooltip
                          id="registerTip"
                          place="top"
                          effect="solid"
                        >
                          {item.tags}
                        </ReactTooltip>
                      </div>
                    ) : null}
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
