import { ChangeEvent } from "react";
import { FaUser, FaUserPlus, FaUserShield } from "react-icons/fa6";

export interface Hijo {
    nombres: string;
    apellidos:string;
    edad: string;
    actividad: string;
    numeroContacto: string;
    factorDiferencial:string;
    subfactorDifrencial:string;
    causaMuerte:string
}

export interface familiaOrigen {
    tipo:string
    nombres: string;
    apellidos:string;
    ocupacion: string;
    numeroContacto: string;
    factorDiferencial:string;
    subfactorDifrencial:string;
    causaMuerte:string
}

export interface PersonasAcargo {
    nombres: string;
    apellidos:string;
    edad: string;
    parentesco: string;
    residencia: string;
    factorDiferencial:string;
    subfactorDifrencial:string;
}

export const opcionesVia = [
    { value: "CL", label: "Calle" },
    { value: "CR", label: "Carrera" },
    { value: "AU", label: "Autopista" },
    { value: "AV", label: "Avenida" },
    { value: "AC", label: "Avenida calle" },
    { value: "AK", label: "Avenida carrera" },
    { value: "BL", label: "Bulevar" },
    { value: "CT", label: "Carretera" },
    { value: "CQ", label: "Circular" },
    { value: "CV", label: "Circunvalar" },
    { value: "CC", label: "Cuentas corridas" },
    { value: "DG", label: "Diagonal" },
    { value: "PJ", label: "Pasaje" },
    { value: "PS", label: "Paseo" },
    { value: "PT", label: "Peatonal" },
    { value: "TV", label: "Transversal" },
    { value: "TC", label: "Troncal" },
    { value: "VT", label: "Variante" },
    { value: "VI", label: "Vía" }
];

export const estadoCivil = [
    { value: "Soltero/a", label: "Soltero/a" },
    { value: "Casado/a", label: "Casado/a" },
    { value: "Unión libre o unión marital de hecho", label: "Unión libre o unión marital de hecho" },
    { value: "Separado/a", label: "Separado/a" },
    { value: "Divorciado/a", label: "Divorciado/a" },
    { value: "Viudo/a", label: "Viudo/a" },
];

export const escolaridad = [
    { value: "Básica primaria", label: "Básica primaria" },
    { value: "Básica Secundaria", label: "Básica Secundaria" },
    { value: "Educación Media", label: "Educación Media" },
    { value: "Técnica Profesional", label: "Técnica Profesional" },
    { value: "Tecnológica", label: "Tecnológica" },
    { value: "Universitaria", label: "Universitaria" },
    { value: "Especialización", label: "Especialización" },
    { value: "Maestría", label: "Maestría" },
    { value: "Doctorado", label: "Doctorado" },
];

export interface ComponenteConyugalProps {
    formData: {
        nombreConyuge: string,
        apellidoConyuge: string,
        tipoIdConyuge: string,
        noIdConyuge: string,
        telConyuge: string,
        departamentoConyuge: string,
        municipioConyuge: string,
        ubicacionConyuge: string,
        ocupacionConyuge: string,
        empresaConyuge: string,
        causaMuerteConyuge: string,
        ruralConyugalFields: any,
        urbanaConyugalFields: any,
        factorDiferencialConyuge: string,
        subfactorDiferencialConyuge: string,
    };
    handleChange: (e: ChangeEvent<any>) => void;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
}


export const camposForm = {
    departamento: "",
    ciudad: "",
    ubicacion: "",
    fechaHora: "",
    ruralFields: {},
    urbanaFields: {},
    fechaNacimiento: "",
    edad: "",
    nacionalidadColombiana:true,
    paisNacimiento: "",
    ciudadNacimiento:'',
    departamentoNacimiento: "",
    municipio: "",
    estadoCivil: "",
    nivelAcademico: "",
    tipoSangre: "",
    rh: "",
    nombreConyuge:"",
    apellidoConyuge:"",
    tipoIdConyuge:"",
    noIdConyuge:"",
    telConyuge:"",
    celConyuge:"",
    departamentoConyuge:"",
    municipioConyuge:"",
    ubicacionConyuge:"",
    ruralConyugalFields: {},
    urbanaConyugalFields: {},
    ocupacionConyuge:"",
    empresaConyuge:"",
    factorDiferencialConyuge:'',
    subfactorDiferencialConyuge:'',
    causaMuerteConyuge:"",
    hijos: [] as Hijo[],
    familiares: [] as familiaOrigen[],
    observaciones: "",
    personasCargo: [] as PersonasAcargo[],
    relacionFamiliar:'',
    departamentoLaboral:"",
    municipioLaboral:"",
    ubicacionLaboral:"",
    ruralLaboralFields: {},
    urbanaLaboralFields: {},
    profesion:"",
    oficio:"",
    telefonoLaboral:"",
    observacionesLaborales:""
}

export const factorDiferencialOptions = [
    { label: "Enfoque de Genero", subFactors: ["Violencia sexual", "Participación de mujeres en liderazgo", "Mujer Gestante", "Madres cabeza de hogar", "Madre Lactante", "Madre con hijos menores/discapacidad a cargo"] },
    { label: "Enfoque Etario", subFactors: ["Niños, niñas y adolescentes", "Jóvenes afectados por el conflicto", "Adultos mayores", "Persona de la Tercera Edad con discapacidad"] },
    { label: "Etnia", subFactors: ["Comunidades indígena", "Protección de líderes y lideresas étnicas", "Afrocolombianos, raizales, palenqueros, Rrom"] },
    { label: "Orientacion Sexual e Identidad de Genero", subFactors: ["Comunidades LGBTIQ+"] },
    { label: "Condicion de Discapacidad", subFactors: ["Accesibilidad física y comunicativa", "Rehabilitación integral"] },
    { label: "Origen Rural", subFactors: ["Restitución de tierras", "Fortalecimiento del tejido social", "Desarrollo rural Sostenible", "Hombre con hijos menores/discapacidad a cargo"] }
];

export const steps = [
    { label: "Información general", icon: <FaUser /> },
    { label: "Información familiar", icon: <FaUserPlus /> },
    { label: "Actividad laboral y/o poblacional", icon: <FaUserShield /> },
    { label: "Datos de notificación", icon: <FaUserShield /> },
    { label: "Grupo poblacional", icon: <FaUserShield /> },
    { label: "Desplazamientos", icon: <FaUserShield /> },
    { label: "Medidas", icon: <FaUserShield /> },
    { label: "Relato de hechos", icon: <FaUserShield /> },
    { label: "Anexos", icon: <FaUserShield /> },
];