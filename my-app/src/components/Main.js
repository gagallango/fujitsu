import React, { Component } from "react";
import SLot from "./Slot";

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
        <SLot slots={this.state.slots} />
      </div>
    );
  }
}
