import { SubtituloForm } from "eco-unp/ui";
import React, { useEffect, useState } from "react";
import { Row, Col, Form, CardHeader } from "react-bootstrap";
import { RiUserLocationFill } from "react-icons/ri";
import CamposRurales from "../../../shared/camposRurales";
import CamposUrbanos from "../../../shared/camposUrbanos";
import { fetchDepartamentos, fetchMunicipios } from "../../../services/ubicacion";
import UbicacionFechaTerceros from "./componenteUbicacionTerceros";

// Define las interfaces
interface FormData {
  ubicacion: string;
  fechaHora: string;
  departamento: string;
  ciudad: string;
  ruralFields: {
    centroPoblado: string;
    corregimiento: string;
    indicaciones: string;
    vereda: string;
  };
  urbanaFields: {
    nombreBarrio: string;
    viaPrincipal: string;
    numeroViaPrincipal: string;
    letraPrincipal: string;
    esBis: boolean;
    cuadrantePrincipal: string;
    numeroViaSecundaria: string;
    letraSecundaria: string;
    cuadranteSecundario: string;
    numeroPlaca: string;
    complemento: string;
    indicaciones: string;
  };
}

interface Seccion {
  formData: FormData;
  entrevistaRealizada: string;
  tipoEntrevista: string;
  direccion?: string;
  telefonoOrigen?: string;
  telefonoDestino?: string;
  archivo?: File | null;
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
  const [departamentos, setDepartamentos] = useState<{ id: number; name: string }[]>([]);
  const [municipios, setMunicipios] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchDepartamentosData = async () => {
      try {
        const data = await fetchDepartamentos();
        setDepartamentos(data);
      } catch (error) {
        console.error("Error al obtener departamentos:", error);
      }
    };
    fetchDepartamentosData();
  }, []);

  const fetchMunicipiosData = async (departamentoId: string) => {
    try {
      const data = await fetchMunicipios(departamentoId);
      setMunicipios(data);
    } catch (error) {
      console.error("Error al obtener municipios:", error);
    }
  };

  const addSection = () => {
    setSecciones([
      ...secciones,
      {
        formData: {
          ubicacion: "",
          fechaHora: "",
          departamento: "",
          ciudad: "",
          ruralFields: {
            centroPoblado: "",
            corregimiento: "",
            vereda: "",
            indicaciones: "",
          },
          urbanaFields: {
            nombreBarrio: "",
            viaPrincipal: "",
            numeroViaPrincipal: "",
            letraPrincipal: "",
            esBis: false,
            cuadrantePrincipal: "",
            numeroViaSecundaria: "",
            letraSecundaria: "",
            cuadranteSecundario: "",
            numeroPlaca: "",
            complemento: "",
            indicaciones: "",
          },
        },
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

  const handleChangeUbicacion = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSecciones((prevSecciones) =>
      prevSecciones.map((seccion, i) =>
        i === index
          ? {
              ...seccion,
              formData: {
                ...seccion.formData,
                [name]: value,
              },
            }
          : seccion
      )
    );
  };

  const handleFieldChange = (
    index: number,
    e: React.ChangeEvent<any>,
    location: string
  ) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setSecciones((prevSecciones) =>
      prevSecciones.map((seccion, i) =>
        i === index
          ? {
              ...seccion,
              formData: {
                ...seccion.formData,
                [location + "Fields"]: {
                  ...(seccion.formData as any)[location + "Fields"],
                  [name]: fieldValue,
                },
              },
            }
          : seccion
      )
    );
  };

  const handleDelete = (index: number) => {
    setSecciones(secciones.filter((_, i) => i !== index));
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

          
          <UbicacionFechaTerceros
          formData={{
            ubicacionTercero: seccion.formData.ubicacion,
            fechaHoraTercero: seccion.formData.fechaHora,
            departamentoTercero: seccion.formData.departamento,
            ciudadTercero: seccion.formData.ciudad,
            ruralFieldsTercero: seccion.formData.ruralFields,
            urbanaFieldsTercero: seccion.formData.urbanaFields
          }}
            
            handleChange={(e) => handleChangeUbicacion(index, e)}
            handleFieldChange={(e, location) => handleFieldChange(index, e, location)}
          />

          <div className="mt-3 d-flex justify-content-end">
            <button className="btn btn-danger" onClick={() => handleDelete(index)}>
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
