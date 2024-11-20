import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardHeader } from "react-bootstrap";

// Define la interfaz Seccion con campos específicos
interface Seccion {
  fechaConsulta: string;
  fechaRespuesta: string;
  resultadosObtenidos: string;
}

const DetalleInformacionDocumental: React.FC = () => {
  const [secciones, setSecciones] = useState<Seccion[]>([]);

  const addSection = () => {
    setSecciones([
      ...secciones,
      {
        fechaConsulta: "",
        fechaRespuesta: "",
        resultadosObtenidos: "",
      },
    ]);
  };

  const handleChange = (index: number, campo: keyof Seccion, valor: string) => {
    const seccionesActualizadas = secciones.map((seccion, i) =>
      i === index ? { ...seccion, [campo]: valor } : seccion
    );
    setSecciones(seccionesActualizadas);
  };

  const handleSave = (index: number) => {
    console.log("Sección guardada:", secciones[index]);
    alert("Sección guardada: " + JSON.stringify(secciones[index]));
  };

  const handleDelete = (index: number) => {
    const seccionesActualizadas = secciones.filter((_, i) => i !== index);
    setSecciones(seccionesActualizadas);
  };

  const handleSubmit = () => {
    console.log("Datos enviados:", secciones);
    alert("Datos enviados: " + JSON.stringify(secciones));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-dark" onClick={addSection}>
          Añadir Detalle
        </button>
      </div>

      {secciones.map((seccion, index) => (
        <div key={index} className="card mb-3 p-3">
          <CardHeader className="text-center bg-unp text-light py-3">
            <span className="formMainTitle">
              DETALLE DE LA INFORMACIÓN DOCUMENTAL No. {index + 1}
            </span>
          </CardHeader>

          {/* Diseño en cuadrícula para el formulario */}
          <div className="row g-3">
            <div className="col-md-6">
              <label>Fecha de Consulta</label>
              <input
                type="datetime-local"
                className="form-control"
                value={seccion.fechaConsulta}
                onChange={(e) =>
                  handleChange(index, "fechaConsulta", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <label>Fecha de Respuesta a la Consulta</label>
              <input
                type="datetime-local"
                className="form-control"
                value={seccion.fechaRespuesta}
                onChange={(e) =>
                  handleChange(index, "fechaRespuesta", e.target.value)
                }
              />
            </div>
            <div className="col-12">
              <label>Resultados Obtenidos</label>
              <textarea
                className="form-control"
                maxLength={1500}
                value={seccion.resultadosObtenidos}
                onChange={(e) =>
                  handleChange(index, "resultadosObtenidos", e.target.value)
                }
              />
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end">
            <button
              className="btn btn-danger me-2"
              onClick={() => handleDelete(index)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Enviar Todo
        </button>
      </div>
    </div>
  );
};

export default DetalleInformacionDocumental;
