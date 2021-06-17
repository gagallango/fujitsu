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
  faFileInvoice,
  faVolumeUp,
  faAngleDoubleDown,
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
          docType: (
            <FontAwesomeIcon
              className="docType_doc_slot"
              icon={faFileInvoice}
            />
          ),
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
          tags: "Etiqueta 1, Etiqueta 2, Etiqueta 3, Etiqueta 4, Etiqueta 5, Etiqueta 6, Etiqueta 7, Etiqueta 8",
        },
        {
          id: 2,
          title: "Nombre del documento",
          extra: "Documento audio - MP3",
          docType: (
            <FontAwesomeIcon
              className="docType_speaker_slot"
              icon={faVolumeUp}
            />
          ),
          description: "",
          slotState: "Completado",
          number: "",
          docs: "",
        },
        {
          id: 3,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          docType: (
            <FontAwesomeIcon
              className="docType_doc_slot"
              icon={faFileInvoice}
            />
          ),
          description: "A - 1 | Descripción del documento",
          slotState: "Completado",
          number: "",
          docs: "5",
        },
        {
          id: 4,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          docType: (
            <FontAwesomeIcon
              className="docType_doc_slot"
              icon={faFileInvoice}
            />
          ),
          description: "A - 1 | Descripción del documento",
          slotState: "Completado",
          number: "8",
          docs: "5",
        },
        {
          id: 5,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          docType: (
            <FontAwesomeIcon
              className="docType_doc_slot"
              icon={faFileInvoice}
            />
          ),
          description: "A - 1 | Descripción del documento",
          slotState: "Completado",
          number: "12",
          docs: "",
        },
        {
          id: 6,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          docType: (
            <FontAwesomeIcon
              className="docType_doc_slot"
              icon={faFileInvoice}
            />
          ),
          description: "A - 1 | Descripción del documento",
          slotState: "Completado",
          number: "",
          docs: "5",
        },
        {
          id: 7,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          docType: (
            <FontAwesomeIcon
              className="docType_doc_slot"
              icon={faFileInvoice}
            />
          ),
          description: "A - 1 | Descripción del documento",
          slotState: "Completado",
          number: "",
          docs: "5",
        },
        {
          id: 8,
          title: "Nombre del documento",
          extra: "Documento texto - PDF",
          docType: (
            <FontAwesomeIcon
              className="docType_doc_slot"
              icon={faFileInvoice}
            />
          ),
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
        <Container className="menu_slot">
          <Row>
            <Col>
              <Row>
                <Col className="color_arrow" xs="1">
                  <FontAwesomeIcon
                    onClick={this.handleCancel}
                    icon={faArrowLeft}
                  />
                </Col>
                <Col xs="6" className="title_desplegar">
                  <div className="user_down">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <p className="nav_title">Nombre de Persona Física</p>
                </Col>
              </Row>
              <Row className="info_row">
                <Col xs="2">
                  <p className="expedientes">Expedientes(4)</p>
                </Col>
                <Col xs="1">
                  <p className="documentos">Documentos({this.state.counter})</p>
                </Col>
              </Row>
            </Col>
            <Col xs="4">
              <Row className="search_row">
                <Col>
                  <Form className="search_form">
                    <FormControl
                      type="text"
                      placeholder="Buscar por nombre"
                      className="mr-sm-2"
                    />
                    <Button className="btn btn-primary">Search</Button>
                  </Form>
                </Col>
              </Row>
              <Row className="info_row">
                <Col></Col>
                <Col className="tool_desplegar">
                  Desplegar todo{" "}
                  <div className="sort_down">
                    <FontAwesomeIcon
                      icon={faAngleDoubleDown}
                      size="xs"
                      onClick={() => this.setState({ showing: !showing })}
                      className="rotate"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {showing ? (
          <div>
            <SLot slots={this.state.slots} />
          </div>
        ) : null}
      </div>
    );
  }
}
