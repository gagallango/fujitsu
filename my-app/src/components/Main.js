import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SLot from "./Slot";
import "./Main.css";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      slots: [],
      counter: 0,
    };
  }

  async componentDidMount() {
    this.renderData();
  }

  async renderData() {
    try {
      let slots = [
        {
          id: 1,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          description: "A - 1 | Descripción del documento",
          slotState: "Completado",
          number: "+99",
          docs: "5",
        },
        {
          id: 2,
          title: "Nombre del documento",
          extra: "Documento audio - MP3",
          description: "",
          slotState: "Completado",
          number: "",
          docs: "",
        },
        {
          id: 3,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          description: "A - 1 | Descripción del documento",
          slotState: "Completado",
          number: "",
          docs: "5",
        },
        {
          id: 4,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          description: "A - 1 | Descripción del documento",
          slotState: "Completado",
          number: "8",
          docs: "5",
        },
        {
          id: 5,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          description: "A - 1 | Descripción del documento",
          slotState: "Completado",
          number: "12",
          docs: "",
        },
        {
          id: 6,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          description: "A - 1 | Descripción del documento",
          slotState: "Completado",
          number: "",
          docs: "5",
        },
      ];
      this.setState({
        slots: slots,
        loading: false,
        counter: slots.length,
      });
    } catch (Error) {
      console.error(Error);
    }
  }
  render() {
    console.log(this.state.slots);
    return (
      <div>
        <div className="menu-slot">
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
                    <p>Expedientes(0)</p>
                  </Col>
                  <Col xs="4">
                    <p>Documentos({this.state.counter})</p>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
        <div>
          <SLot slots={this.state.slots} />
        </div>
      </div>
    );
  }
}
