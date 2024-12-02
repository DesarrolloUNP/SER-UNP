import React, { useState } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "react-bootstrap";
import { FaUsers } from "react-icons/fa";
import { SubtituloForm } from "eco-unp/ui";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";
import DetalleInformacionDocumental from "./componenteDocumental";

export const FormularioDocumental: React.FC = () => {
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
    <div>
      <InformacionOrdenTrabajo
        datos={datosOrden}
        titulo="Documental Y/O Actividades"
      />
      <Card className="border-0 shadow mt-4 mt-4">
        <CardHeader className="text-center bg-unp text-light py-3">
          <span className="formMainTitle">
            Detalle de la Información Documental y Otras Actividades Desarrolladas
          </span>
        </CardHeader>
        <CardBody>
          <DetalleInformacionDocumental />
        </CardBody>
      </Card>
    </div>
  );
};
