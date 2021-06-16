import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import SLot from "./Slot";
import "./Main.css";
import {
  faArrowLeft,
  faUser,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
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
          origin:
            "Departamento de origen de este documento, puede doblar las líneas que sean necesarias",
          evaluation: "Evaluación",
          layout: "Nombre plantilla",
          createdDate: "00/00/0000 00:00",
          restrictions: "3 restricciones",
          tags: ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3"],
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

  handleCancel = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };

  render() {
    const { showing } = this.state;

    return (
      <div>
        <header className="menu-slot">
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col xs="2">
                    <FontAwesomeIcon
                      onClick={this.handleCancel}
                      icon={faArrowLeft}
                    />
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
                  <Col xs="1">
                    <p className="documentos">
                      Documentos({this.state.counter})
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs="4">
                <Row>
                  <Col>
                    <Form className="search-form">
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col xs="9" className="tool-desplegar">
                    <p>Desplegar todo</p>
                    <div className="sort-down">
                      <FontAwesomeIcon
                        icon={faSortDown}
                        onClick={() => this.setState({ showing: !showing })}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </header>
        {showing ? (
          <div>
            <SLot slots={this.state.slots} />
          </div>
        ) : null}
      </div>
    );
  }
}
