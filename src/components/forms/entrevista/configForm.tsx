export interface Hijo {
    nombre: string;
    edad: string;
    actividad: string;
    residencia: string;
}

export const camposForm = {
    departamento: "",
    ciudad: "",
    direccion: "",
    fechaHora: "",
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    SegundoApellido: "",
    tipoId: "",
    noId: "",
    sexo: "",
    fechaNacimiento: "",
    edad: "",
    pais: "",
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
    direccionConyuge:"",
    ocupacionConyuge:"",
    empresaConyuge:"",
    causaMuerteConyuge:"",
    hijos: [] as Hijo[],
    nombrePadre:"",
    apellidoPadre:"",
    ocupacionPadre:"",
    empresaPadre:"",
    causaMuertePadre:"",
    nombreMadre:"",
    apellidoMadre:"",
    ocupacionMadre:"",
    empresaMadre:"",
    causaMuerteMadre:"",
    observaciones: ""
}