import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SubtituloForm } from "eco-unp";
import { CardHeader } from "react-bootstrap";

// Define la interfaz Seccion con campos en español
interface Seccion {
  fechaHora: string;
  entrevistaRealizada: string;
  tipoEntrevista: string;
  departamento?: string;
  municipio?: string;
  direccion?: string;
  telefonoOrigen?: string;
  telefonoDestino?: string;
  nombreEntrevistado: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  rol: string;
  sinopsis: string;
  firmaNombreEntrevistado: string;
  firmaIdentificacionEntrevistado: string;
  firmaNombreAnalista: string;
  firmaIdentificacionAnalista: string;
}

const Entrevistas: React.FC = () => {
  const [secciones, setSecciones] = useState<Seccion[]>([]);

  const addSection = () => {
    setSecciones([
      ...secciones,
      {
        fechaHora: "",
        entrevistaRealizada: "",
        tipoEntrevista: "",
        nombreEntrevistado: "",
        tipoIdentificacion: "",
        numeroIdentificacion: "",
        rol: "",
        sinopsis: "",
        firmaNombreEntrevistado: "",
        firmaIdentificacionEntrevistado: "",
        firmaNombreAnalista: "",
        firmaIdentificacionAnalista: "",
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
          Añadir Entrevista
        </button>
      </div>

      {secciones.map((seccion, index) => (
        <div key={index} className="card mb-3 p-3">
          <CardHeader className="text-center bg-unp text-light py-3">
            <span className="formMainTitle">
              INFORMACIÓN DE LA ENTREVISTA No. {index + 1}
            </span>
          </CardHeader>

          {/* Diseño en cuadrícula para el formulario */}
          <div className="row g-3">
            <div className="col-md-6">
              <label>Fecha y Hora de la Entrevista</label>
              <input
                type="datetime-local"
                className="form-control"
                value={seccion.fechaHora}
                onChange={(e) => handleChange(index, "fechaHora", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label>Entrevista Realizada</label>
              <input
                type="text"
                className="form-control"
                value={seccion.entrevistaRealizada}
                onChange={(e) =>
                  handleChange(index, "entrevistaRealizada", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <label>Tipo de Entrevista</label>
              <select
                className="form-control"
                value={seccion.tipoEntrevista}
                onChange={(e) => handleChange(index, "tipoEntrevista", e.target.value)}
              >
                <option value="">Seleccione...</option>
                <option value="personal">
                  Entrevista realizada personalmente
                </option>
                <option value="telefono">
                  Entrevista realizada telefónicamente
                </option>
              </select>
            </div>

            {seccion.tipoEntrevista === "personal" && (
              <>
                <div className="col-md-6">
                  <label>Departamento</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      handleChange(index, "departamento", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label>Municipio</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      handleChange(index, "municipio", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label>Dirección</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      handleChange(index, "direccion", e.target.value)
                    }
                  />
                </div>
              </>
            )}

            {seccion.tipoEntrevista === "telefono" && (
              <>
                <div className="col-md-6">
                  <label>Número Teléfono Origen</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      handleChange(index, "telefonoOrigen", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label>Número Teléfono Destino</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      handleChange(index, "telefonoDestino", e.target.value)
                    }
                  />
                </div>
              </>
            )}

            <div className="col-md-6">
              <label>Nombre de la Persona Entrevistada</label>
              <input
                type="text"
                className="form-control"
                value={seccion.nombreEntrevistado}
                onChange={(e) =>
                  handleChange(index, "nombreEntrevistado", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <label>Tipo de Identificación</label>
              <select
                className="form-control"
                value={seccion.tipoIdentificacion}
                onChange={(e) =>
                  handleChange(index, "tipoIdentificacion", e.target.value)
                }
              >
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="TI">Tarjeta de Identidad</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="PAS">Pasaporte</option>
                <option value="NIT">NIT</option>
              </select>
            </div>
            <div className="col-md-6">
              <label>Número de Identificación</label>
              <input
                type="text"
                className="form-control"
                value={seccion.numeroIdentificacion}
                onChange={(e) =>
                  handleChange(index, "numeroIdentificacion", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <label>En su Calidad De</label>
              <input
                type="text"
                className="form-control"
                value={seccion.rol}
                onChange={(e) => handleChange(index, "rol", e.target.value)}
              />
            </div>
            <div className="col-12">
              <label>Sinopsis de la Información</label>
              <textarea
                className="form-control"
                maxLength={1500}
                value={seccion.sinopsis}
                onChange={(e) => handleChange(index, "sinopsis", e.target.value)}
              />
            </div>
            <h6 className="mt-3">Firmas</h6>
            <div className="col-md-6">
              <label>Firma de la Persona Entrevistada</label>
              <input
                type="text"
                className="form-control"
                value={seccion.firmaNombreEntrevistado}
                onChange={(e) =>
                  handleChange(index, "firmaNombreEntrevistado", e.target.value)
                }
              />
              <label>Documento de Identidad del Entrevistado</label>
              <input
                type="text"
                className="form-control"
                value={seccion.firmaIdentificacionEntrevistado}
                onChange={(e) =>
                  handleChange(
                    index,
                    "firmaIdentificacionEntrevistado",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="col-md-6">
              <label>Firma del Analista</label>
              <input
                type="text"
                className="form-control"
                value={seccion.firmaNombreAnalista}
                onChange={(e) =>
                  handleChange(index, "firmaNombreAnalista", e.target.value)
                }
              />
              <label>Documento de Identidad del Analista</label>
              <input
                type="text"
                className="form-control"
                value={seccion.firmaIdentificacionAnalista}
                onChange={(e) =>
                  handleChange(
                    index,
                    "firmaIdentificacionAnalista",
                    e.target.value
                  )
                }
              />
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end">

            <button className="btn btn-danger" onClick={() => handleDelete(index) }>
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

export default Entrevistas;
