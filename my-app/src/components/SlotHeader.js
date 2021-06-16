import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SlotHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: [],
      counter: 0,
    };
  }
  async componentDidMount() {
    this.renderData();
  }

  renderData() {
    this.setState({
      slots: slots,
      counter: slots.length,
    });
  }
  render() {
    console.log("AQUIIIII", this.props);
    return (
      <div>
        <header className="menu-slot">
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col xs="2">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </Col>
                  <Col xs="1">
                    <FontAwesomeIcon icon={faUser} />
                  </Col>
                  <Col xs="6">
                    <p className="nav-title">Nombre de Persona Física</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <p className="expedientes">Expedientes(0)</p>
                  </Col>
                  <Col xs="4">
                    <p className="documentos">
                      Documentos({this.props.counter})
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}
