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
  Table,
  FormSelect,
} from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import "../../styles/formularioEntorno.css";
import { SubtituloForm } from "eco-unp/ui";

export const FormularioEntrevistaTerceros: React.FC = () => {
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
          <h5>INFORMACIÓN DE LA ENTREVISTA No. 1</h5>
        </CardHeader>
        <CardBody>
          <Form>
            <SubtituloForm
              subtitulo="Fecha de la Entrevista"
              icon={FaCalendarAlt}
            />
            <Table striped bordered responsive className="mb-4">
              <tbody>
                <tr>
                  <th className="text-start">Fecha de la Entrevista</th>
                  <td>
                    <FormControl type="date" value={""}></FormControl>
                  </td>
                </tr>
                <tr>
                  <th className="text-start">Entrevista Realizada</th>
                  <td>
                    <FormControl type="text" value={""}></FormControl>
                  </td>
                </tr>
                <tr>
                <th className="text-start">Tipo de Entrevista</th>
                  <FormSelect className="text-start">
                    <option value="">Seleccione...</option>
                    <option>Entrevista Realizada Personalmente</option>
                    <option>Entrevista Realizada Telefónicamente</option>
                    
                  </FormSelect>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Día</FormLabel>
                  <FormControl type="text" value={""} />
                </FormGroup>
              </Col>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Mes</FormLabel>
                  <FormControl type="text" value={""} />
                </FormGroup>
              </Col>
              <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Año</FormLabel>
                  <FormControl type="text" value={""} />
                </FormGroup>
              </Col>
            </Row>

            {/* Información Personal */}
            <FormGroup className="mb-3">
              <FormLabel>Departamento *</FormLabel>
              <FormControl type="text" />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Municipio *</FormLabel>
              <FormControl type="text" />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Dirección</FormLabel>
              <FormControl type="text" />
            </FormGroup>

            {/* Teléfono */}
            <FormGroup className="mb-3">
              <FormLabel>Número Teléfono Origen</FormLabel>
              <FormControl type="text" />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Número Teléfono Destino</FormLabel>
              <FormControl type="text" />
            </FormGroup>

            {/* Persona Entrevistada */}
            <FormGroup className="mb-3">
              <FormLabel>Nombre de la Persona Entrevistada</FormLabel>
              <FormControl type="text" />
            </FormGroup>
            <Row>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Tipo de Identificación *</FormLabel>
                  <FormControl type="text" />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <FormLabel>Número de Identificación</FormLabel>
                  <FormControl type="text" />
                </FormGroup>
              </Col>
            </Row>

            {/* Sinopsis de la Información */}
            <FormGroup className="mb-3">
              <FormLabel>En su calidad de</FormLabel>
              <FormControl type="text" />
            </FormGroup>

            {/* Firma */}
            <Row className="mt-4">
              <Col md={6} sm={12}>
                <FormGroup>
                  <FormLabel>Firma de la persona entrevistada</FormLabel>
                  <FormControl type="text" />
                </FormGroup>
              </Col>
              <Col md={6} sm={12}>
                <FormGroup>
                  <FormLabel>
                    Firma analista Unidad Nacional de Protección
                  </FormLabel>
                  <FormControl type="text" />
                </FormGroup>
              </Col>
            </Row>

            {/* Documento de Identidad */}
            <Row className="mt-4">
              <Col md={6} sm={12}>
                <FormGroup>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl type="text" />
                </FormGroup>
              </Col>
              <Col md={6} sm={12}>
                <FormGroup>
                  <FormLabel>Documento de Identidad</FormLabel>
                  <FormControl type="text" />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
