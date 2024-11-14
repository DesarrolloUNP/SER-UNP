import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "react-bootstrap";
import { FaUsers } from "react-icons/fa";
import "../../styles/formularioEntorno.css";
import { SubtituloForm } from "eco-unp/ui";
import InformacionOrdenTrabajo from "../../shared/informacionOrdenTrabajo";
import { ModalRegistroAnalista } from "./Terceros/ModalEntrevistaTercero";
import "../../styles/panel.css"; // Asegúrate de tener este archivo CSS

export const FormularioTerceros: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const datosOrden = {
    ordenTrabajoNo: "12345",
    fechaSolicitudUNP: { dia: "01", mes: "01", año: "2023" },
    fechaReciboER: { dia: "02", mes: "01", año: "2023" },
    fechaExpedicion: { dia: "03", mes: "01", año: "2023" },
    tipoIdentificacion: "Cédula",
    numeroIdentificacion: "987654321",
    sexo: "Masculino",
    primerNombre: "Juan",
    segundoNombre: "Carlos",
    primerApellido: "Pérez",
    segundoApellido: "González",
  };

  // Función para manejar el clic en el botón y alternar el panel
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <Card className="border-0 shadow mt-4 mt-4">
      <CardHeader className="text-center bg-unp text-light py-3">
        <span className="formMainTitle">ENTREVISTA TERCEROS</span>
      </CardHeader>
      <InformacionOrdenTrabajo datos={datosOrden} />
      <CardHeader className="text-center bg-unp text-light py-3">
        <span className="formMainTitle">INFORMACIÓN DE LAS ENTREVISTAS</span>
      </CardHeader>
      <CardBody>
        <div className="d-flex justify-content-between align-items-center">
          <SubtituloForm subtitulo="Terceros" icon={FaUsers} />
          <Button
            variant="primary"
            onClick={togglePanel}
            className="ml-auto"
            style={{
              backgroundColor: "#303D50",
              borderColor: "#303D50",
            }}
          >
            Agregar Entrevista
          </Button>
        </div>
      </CardBody>

      {/* Panel lateral */}
      <div className={`side-panel ${isPanelOpen ? "open" : ""}`}>
        
        <ModalRegistroAnalista /> {/* Tu componente de modal */}
        <Button variant="secondary" onClick={togglePanel}>
          Cerrar
        </Button>
      </div>
    </Card>
  );
};
