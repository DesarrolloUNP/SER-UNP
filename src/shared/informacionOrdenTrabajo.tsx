import React from "react";
import { Table, Card, CardHeader, CardBody } from "react-bootstrap";
import { SubtituloForm } from "eco-unp/ui";
import { FaUserCircle } from "react-icons/fa";

interface Fecha {
  dia: string;
  mes: string;
  año: string;
}

interface DatosOrdenTrabajo {
  ordenTrabajoNo: string;
  fechaSolicitudUNP: Fecha;
  fechaReciboER: Fecha;
  fechaExpedicion: Fecha;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  sexo: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
}

interface InformacionOrdenTrabajoProps {
  datos: DatosOrdenTrabajo;
  titulo: String;
}

const InformacionOrdenTrabajo: React.FC<InformacionOrdenTrabajoProps> = ({  datos,  titulo}) => {
  return (
    <Card className="border-0 shadow">
      <CardHeader className="text-center bg-unp text-light py-3">
        <span className="formMainTitle"> {titulo} </span>
      </CardHeader>
      <CardBody>
        <div>
          <SubtituloForm
            subtitulo={`Orden de trabajo No. ${datos.ordenTrabajoNo}`}
            icon={FaUserCircle}
          />
          <div className="infoMainContainer">
            <Table responsive className="mb-4">
              <tbody>
                <tr>
                  <th className="text-start">Nombre del Evaluado</th>
                  <td className="text-start">{`${datos.primerNombre} ${datos.segundoNombre} ${datos.primerApellido} ${datos.segundoApellido}`}</td>
                </tr>
                <tr>
                  <th className="text-start">Identificación</th>
                  <td className="text-start">{`${datos.tipoIdentificacion} - ${datos.numeroIdentificacion}`}</td>
                </tr>
                <tr>
                  <th className="text-start">Sexo</th>
                  <td className="text-start">{datos.sexo}</td>
                </tr>
              </tbody>
            </Table>
            <Table responsive className="mb-4">
              <tbody>
                <tr>
                  <th className="text-start">Fecha Solicitud UNP</th>
                  <td className="text-start">{`${datos.fechaSolicitudUNP.dia}/${datos.fechaSolicitudUNP.mes}/${datos.fechaSolicitudUNP.año}`}</td>
                </tr>
                <tr>
                  <th className="text-start">Fecha Recibo Subdirección ER</th>
                  <td className="text-start">{`${datos.fechaReciboER.dia}/${datos.fechaReciboER.mes}/${datos.fechaReciboER.año}`}</td>
                </tr>
                <tr>
                  <th className="text-start">Fecha Expedición Orden</th>
                  <td className="text-start">{`${datos.fechaExpedicion.dia}/${datos.fechaExpedicion.mes}/${datos.fechaExpedicion.año}`}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default InformacionOrdenTrabajo;
