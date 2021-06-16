import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slot.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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
                <Col xs xs="2">
                  <FontAwesomeIcon icon={faStar} />
                </Col>
                <Col xs>
                  <div className="slot-content">
                    <p className="slot-document-name">{item.title}</p>
                    <p className="slot-document-type">{item.extra}</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>{item.description}</Col>
            <Col>
              <Col xs xs="2">
                {item.slotState}
              </Col>
              <Col xs>{item.number}</Col>
              <Col xs>{item.docs}</Col>
              {/* <div>
                <button onClick={() => this.setState({ showing: !showing })}>
                  toggle
                </button>
                {showing ? <div>This is visible</div> : null}
              </div>{" "} */}
            </Col>
          </Row>
        </Container>
      ));
    }
    return null;
  };

  render() {
    console.log("Aqui props", this.props.slots.title);
    return <>{this.renderList()}</>;
  }
}
