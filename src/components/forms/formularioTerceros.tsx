import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import {
  FaFileAlt,
  FaCalendarAlt,
  FaIdCard,
  FaGenderless,
  FaUser,
} from "react-icons/fa";
import "../../styles/formularioEntorno.css";
import { SubtituloForm } from "eco-unp/ui";
import { FormularioEntrevistaTerceros } from "./formularioEntrevistaTerceros";

export const FormularioTerceros: React.FC = () => {
  const datos = {
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
  return (
    <div>
      <Card className="border-0 rounded-3 shadow mt-4">
        <CardHeader className="text-center bg-unp text-light rounded-3 py-3">
          <h5>INFORMACIÓN DE LA ORDEN DE TRABAJO</h5>
        </CardHeader>
        <CardBody>
          <Form>
            <SubtituloForm subtitulo="Orden de trabajo" icon={FaFileAlt} />
            <Row>
              <Col md={12} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Orden de trabajo No.</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.ordenTrabajoNo}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
            </Row>

            <SubtituloForm
              subtitulo="Fecha de Solicitud en la UNP"
              icon={FaCalendarAlt}
            />
            <Row>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Día</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.fechaSolicitudUNP.dia}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Mes</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.fechaSolicitudUNP.mes}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Año</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.fechaSolicitudUNP.año}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
            </Row>

            <SubtituloForm
              subtitulo="Fecha Recibo Subdirección ER"
              icon={FaCalendarAlt}
            />
            <Row>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Día</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.fechaReciboER.dia}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Mes</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.fechaReciboER.mes}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Año</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.fechaReciboER.año}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
            </Row>

            <SubtituloForm
              subtitulo="Fecha Expedición de la Orden"
              icon={FaCalendarAlt}
            />
            <Row>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Día</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.fechaExpedicion.dia}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Mes</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.fechaExpedicion.mes}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Año</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.fechaExpedicion.año}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
            </Row>

            <SubtituloForm subtitulo="Identificación" icon={FaIdCard} />
            <Row>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Tipo de Identificación</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.tipoIdentificacion}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Número de Identificación</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.numeroIdentificacion}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
            </Row>

            <SubtituloForm subtitulo="Sexo" icon={FaGenderless} />
            <Row>
              <Col md={12} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Sexo</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.sexo}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
            </Row>

            <SubtituloForm subtitulo="Nombre del Evaluado" icon={FaUser} />
            <Row>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Primer Nombre de la persona a evaluar</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.primerNombre}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Segundo Nombre</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.segundoNombre}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Primer Apellido de la persona a evaluar</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.primerApellido}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Segundo Apellido</FormLabel>
                  <FormControl
                    type="text"
                    readOnly
                    value={datos.segundoApellido}
                    className="readonly-field"
                  />
                </FormGroup>
              </Col>
            </Row>
            
          </Form>
        </CardBody>
      </Card>
      <Card>
        <FormularioEntrevistaTerceros/>    
      </Card>
    </div>
  );
};
