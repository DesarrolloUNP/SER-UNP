import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SubtituloForm } from "eco-unp";
import { IconBaseProps } from "react-icons";
import { CardHeader } from "react-bootstrap";

interface Section {
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;
  interviewConducted: string;
  interviewType: string;
  department?: string;
  municipality?: string;
  address?: string;
  phoneOrigin?: string;
  phoneDestination?: string;
  intervieweeName: string;
  idType: string;
  idNumber: string;
  role: string;
  synopsis: string;
  intervieweeNameSignature: string;
  intervieweeIdSignature: string;
  analystNameSignature: string;
  analystIdSignature: string;
}

const Entrevistas: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);

  const addSection = () => {
    setSections([
      ...sections,
      {
        day: "",
        month: "",
        year: "",
        hour: "",
        minute: "",
        interviewConducted: "",
        interviewType: "",
        intervieweeName: "",
        idType: "",
        idNumber: "",
        role: "",
        synopsis: "",
        intervieweeNameSignature: "",
        intervieweeIdSignature: "",
        analystNameSignature: "",
        analystIdSignature: "",
      },
    ]);
  };

  const handleInputChange = (
    index: number,
    field: keyof Section,
    value: string
  ) => {
    const updatedSections = sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setSections(updatedSections);
  };

  const handleSave = (index: number) => {
    console.log("Saved section:", sections[index]);
    alert("Sección guardada: " + JSON.stringify(sections[index]));
  };

  const handleDelete = (index: number) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-dark" onClick={addSection}>
          Añadir Entrevista
        </button>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="card mb-3 p-3">
          <CardHeader className="text-center bg-unp text-light py-3">
            <span className="formMainTitle">
            INFORMACIÓN DE LA ENTREVISTA No. {index + 1}
            </span>
          </CardHeader>
          
          <div className="row mb-2">
            <div className="col">
              <label>Fecha de la Entrevista</label>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-1"
                  placeholder="Día"
                  value={section.day}
                  onChange={(e) =>
                    handleInputChange(index, "day", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="form-control me-1"
                  placeholder="Mes"
                  value={section.month}
                  onChange={(e) =>
                    handleInputChange(index, "month", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="form-control me-1"
                  placeholder="Año"
                  value={section.year}
                  onChange={(e) =>
                    handleInputChange(index, "year", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="form-control me-1"
                  placeholder="Hora"
                  value={section.hour}
                  onChange={(e) =>
                    handleInputChange(index, "hour", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Minuto"
                  value={section.minute}
                  onChange={(e) =>
                    handleInputChange(index, "minute", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          <div className="form-group mb-2">
            <label>Entrevista Realizada</label>
            <input
              type="text"
              className="form-control"
              value={section.interviewConducted}
              onChange={(e) =>
                handleInputChange(index, "interviewConducted", e.target.value)
              }
            />
          </div>

          <div className="form-group mb-2">
            <label>Tipo de Entrevista</label>
            <select
              className="form-control"
              value={section.interviewType}
              onChange={(e) =>
                handleInputChange(index, "interviewType", e.target.value)
              }
            >
              <option value="">Seleccione...</option>
              <option value="personal">
                Entrevista realizada personalmente
              </option>
              <option value="phone">
                Entrevista realizada telefónicamente
              </option>
            </select>
          </div>

          {section.interviewType === "personal" && (
            <>
              <h6 className="mt-3">
                Para las Entrevistas Realizadas Personalmente
              </h6>
              <div className="form-group mb-2">
                <label>Departamento</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    handleInputChange(index, "department", e.target.value)
                  }
                />
              </div>
              <div className="form-group mb-2">
                <label>Municipio</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    handleInputChange(index, "municipality", e.target.value)
                  }
                />
              </div>
              <div className="form-group mb-2">
                <label>Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    handleInputChange(index, "address", e.target.value)
                  }
                />
              </div>
            </>
          )}

          {section.interviewType === "phone" && (
            <>
              <h6 className="mt-3">
                Para las Entrevistas Realizadas Telefónicamente
              </h6>
              <div className="form-group mb-2">
                <label>Número Teléfono Origen</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    handleInputChange(index, "phoneOrigin", e.target.value)
                  }
                />
              </div>
              <div className="form-group mb-2">
                <label>Número Teléfono Destino</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    handleInputChange(index, "phoneDestination", e.target.value)
                  }
                />
              </div>
            </>
          )}

          <h6 className="mt-3">Persona Entrevistada</h6>
          <div className="form-group mb-2">
            <label>Nombre de la Persona Entrevistada</label>
            <input
              type="text"
              className="form-control"
              value={section.intervieweeName}
              onChange={(e) =>
                handleInputChange(index, "intervieweeName", e.target.value)
              }
            />
          </div>
          <div className="form-group mb-2">
            <label>Tipo de Identificación</label>
            <select
              className="form-control"
              value={section.idType}
              onChange={(e) =>
                handleInputChange(index, "idType", e.target.value)
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
          <div className="form-group mb-2">
            <label>Número de Identificación</label>
            <input
              type="text"
              className="form-control"
              value={section.idNumber}
              onChange={(e) =>
                handleInputChange(index, "idNumber", e.target.value)
              }
            />
          </div>
          <div className="form-group mb-2">
            <label>En su Calidad De</label>
            <input
              type="text"
              className="form-control"
              value={section.role}
              onChange={(e) => handleInputChange(index, "role", e.target.value)}
            />
          </div>

          <div className="form-group mb-2">
            <label>Sinopsis de la Información</label>
            <textarea
              className="form-control"
              maxLength={1500}
              value={section.synopsis}
              onChange={(e) =>
                handleInputChange(index, "synopsis", e.target.value)
              }
            />
          </div>

          <h6 className="mt-3">Firmas</h6>
          <div className="row">
            <div className="col">
              <label>Firma de la Persona Entrevistada</label>
              <input
                type="text"
                className="form-control"
                value={section.intervieweeNameSignature}
                onChange={(e) =>
                  handleInputChange(
                    index,
                    "intervieweeNameSignature",
                    e.target.value
                  )
                }
              />
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                value={section.intervieweeIdSignature}
                onChange={(e) =>
                  handleInputChange(
                    index,
                    "intervieweeIdSignature",
                    e.target.value
                  )
                }
              />
              <label>Documento de Identidad</label>
              <input
                type="text"
                className="form-control"
                value={section.analystIdSignature}
                onChange={(e) =>
                  handleInputChange(index, "analystIdSignature", e.target.value)
                }
              />
            </div>
            <div className="col">
              <label>Firma Analista Unidad Nacional de Protección</label>
              <input
                type="text"
                className="form-control"
                value={section.analystNameSignature}
                onChange={(e) =>
                  handleInputChange(
                    index,
                    "analystNameSignature",
                    e.target.value
                  )
                }
              />
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                value={section.analystIdSignature}
                onChange={(e) =>
                  handleInputChange(index, "analystIdSignature", e.target.value)
                }
              />
              <label>Documento de Identidad</label>
              <input
                type="text"
                className="form-control"
                value={section.analystIdSignature}
                onChange={(e) =>
                  handleInputChange(index, "analystIdSignature", e.target.value)
                }
              />
            </div>
          </div>

          <div className="mt-3">
            <button
              className="btn btn-success me-2"
              onClick={() => handleSave(index)}
            >
              Guardar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(index)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Entrevistas;
