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
           
            </Form>
        </CardBody>
      </Card>
    </div>
  );
};
