export interface TableRow {
    item: any;
    descriptores: any;
    observaciones: any;
    escala100: number; // valor numérico de la escala 100%
    escala33: number; // calculado, inicializado en 0
    valorAbsoluto: number; // Solo puede ser entre 0 y 3
    valorRelativoPonderado: number; // calculado, inicializado en 0
    fuentesInformacion: any;
    subseccion: "EVALUACION DE LA AMENAZA" | "EVALUACION DEL RIESGO ESPECÍFICO" | "EVALUACION DE LA VULNERABILIDAD";
}

export const initialRows: TableRow[] = [
    {
        item: "1.1. Realidad de la amenaza, evidencias verificables",
        descriptores: `0. No se reporta la existencia de amenaza.\n1. No existen elementos de juicio que establezcan la existencia de la amenaza.\n2. Evidencias que podrían establecer la amenaza.\n3. Evidencias que establecen claramente la amenaza.`,
        observaciones: "Si no hay amenaza, se debe bloquear las siguientes preguntas para que no permita colocar valores diferentes a cero.",
        escala100: 20, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA AMENAZA"
    },
    {
        item: "1.2. Individualidad de la amenaza",
        descriptores: `0. No hay amenaza, por tanto no se puede individualizar\n1. Existiendo amenaza afecta una generalidad indeterminada de personas (no es posible individualizar).\n2. Existiendo amenaza hay posibilidad de que  la amenaza esté dirigida contra un individuo o grupo de individuos. \n3. Existiendo la amenaza hay certeza de que está dirigida a un  individuo o un grupo especifico.`,
        observaciones: "Si 1.1 se calificó como (0), este item también debe ser calificado como cero (0)",
        escala100: 10, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA AMENAZA"
    },
    {
        item: "1.3. Presunto actor generador de la amenaza",
        descriptores: `0. Si no hay amenaza, no hay actor generador de la misma\n1. Existiendo amenaza, el actor está sin identificar.\n2. Existiendo amenaza, el actor está identificado pero sin confirmar.\n3. Está claramente definido y confirmado el actor.`,
        observaciones: "Si 1.1 se calificó como (0), este item también debe ser calificado como cero (0)",
        escala100: 10, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA AMENAZA"
    },
    {
        item: "1.4. Capacidad del actor para materializar la amenaza",
        descriptores: `0. Si no hay amenaza, no se evalúa este item.\n1. Baja capacidad.\n2. Mediana capacidad.\n3. Alta capacidad.`,
        observaciones: "Si 1.1 se calificó como (0), este item también debe ser calificado como cero (0)",
        escala100: 20, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA AMENAZA"
    },
    {
        item: "1.5. Interés del generador de la amenaza en el evaluado",
        descriptores: `0. Si no hay amenaza no hay generador de la amenaza y por tanto ningún interés.\n1. Muy bajo interés.\n2. Mediano interés.\n3. Gran interés.`,
        observaciones: "Si 1.1 se calificó como (0), este item también debe ser calificado como cero (0)",
        escala100: 15, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA AMENAZA"
    },
    {
        item: "1.6. Inminencia de la materialización de la amenaza",
        descriptores: `0. No hay inminencia   de materialización de la amenaza, por cuanto no hay amenaza.\n1. Baja inminencia de materialización de la amenaza.\n2. Mediana inminencia  de materialización de la amenaza.\n3. Alta inminencia  de materialización de la amenaza.`,
        observaciones: "Si 1.1 se calificó como (0), este item también debe ser calificado como cero (0)",
        escala100: 25, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA AMENAZA"
    },
    {
        item: "2.1. Condición",
        descriptores: `1. persona del común\n2. se encuentra en una o dos condiciones\n3. tres o más condiciones.`,
        observaciones: "Este item se califica de 1 a 3. ",
        escala100: 15, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DEL RIESGO ESPECÍFICO"
    },
    {
        item: "2.2. Factor diferencial y de género",
        descriptores: `0. Sin carga adicional por factor diferencial.\n1. cumple uno de los factores que le generan carga adicional.\n2. cumple dos factores que le generan carga adicional.\n3. cumple de tres o más factores que le generan carga adicional.`,
        observaciones: "",
        escala100: 15, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DEL RIESGO ESPECÍFICO"
    },
    {
        item: "2.3. Perfil",
        descriptores: `0. Bajo.\n1. Medio Bajo.\n2. Medio Alto.\n3. Alto.`,
        observaciones: "",
        escala100: 15, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DEL RIESGO ESPECÍFICO"
    },
    {
        item: "2.4. Antecedentes personales de riesgo",
        descriptores: `0. No presenta antecedentes de situaciones de riesgo.\n1. El evaluado manifiesta tener antecedentes, que no son  verificables y que por tanto no se puede identificar si tienen o no relación con el riesgo actual.\n2. El evaluado manifiesta antecedentes que fueron parcialmente verificados y que tienen presunta relación con el riesgo actual.\n3. El contexto tiene condiciones hostiles para el evaluado.`,
        observaciones: "",
        escala100: 15, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DEL RIESGO ESPECÍFICO"
    },
    {
        item: "2.5. Análisis de contexto",
        descriptores: `0. El entorno no tiene ninguna repercusión en la situación de seguridad de la persona evaluada.\n1. El contexto no representa condiciones de riesgo para el evaluado.\n2. El contexto podría presentar condiciones de riesgo para el evaluado.\n3. El evaluado manifiesta antecedentes que fueron verificados y tienen relación con el riesgo actual.`,
        observaciones: "",
        escala100: 15, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DEL RIESGO ESPECÍFICO"
    },
    {
        item: "2.6. Riesgo de afectación de los derechos a la vida, integridad, libertad y seguridad personales",
        descriptores: `0. Nulo\n1. Bajo\n2. Medio\n3. Alto`,
        observaciones: "El análisis del riesgo de afectación de derechos se hará posteriormente al análisis de la amenaza.\nSi 1.1 quedó en cero (0) este item también debe quedar en cero (0)",
        escala100: 25, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DEL RIESGO ESPECÍFICO"
    },
    {
        item: "3.1 Conductas y comportamientos",
        descriptores: `1. Aplica siempre conductas y comportamientos  apropiados en autoseguridad.\n2. Aplica algunas veces conductas y comportamientos de auto seguridad.\n3. No aplica conductas y comportamientos de auto seguridad.`,
        observaciones: "En la entrevista se deben incluir preguntas directas y otras de contrastación.",
        escala100: 20, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA VULNERABILIDAD"
    },
    {
        item: "3.2. Permanencia en el sitio del riesgo",
        descriptores: `1. Baja. \n2. Media.\n3. Alta.`,
        observaciones: "En la entrevista se deben incluir preguntas directas y otras de contrastación.",
        escala100: 20, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA VULNERABILIDAD"
    },
    {
        item: "3.3. Vulnerabilidad asociada al entorno residencial",
        descriptores: `1. Baja. \n2. Media.\n3. Alta.`,
        observaciones: "Este punto se debe responder con los resultados del análisis del entorno residencial y la entrevista.",
        escala100: 10, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA VULNERABILIDAD"
    },
    {
        item: "3.4. Vulnerabilidad asociada al entorno en donde desarrolla actividades y/o trabajo",
        descriptores: `1. Baja. \n2. Media.\n3. Alta.`,
        observaciones: "Este punto se debe responder con los resultados del análisis del entorno de actividades de trabajo y la entrevista.",
        escala100: 10, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA VULNERABILIDAD"
    },
    {
        item: "3.5. Vulnerabilidad asociada al entorno social y comunitario",
        descriptores: `1. Baja. \n2. Media.\n3. Alta.`,
        observaciones: "Este punto se debe responder con los resultados del análisis del entorno social y comunitario y la entrevista.",
        escala100: 10, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA VULNERABILIDAD"
    },
    {
        item: "3.6. Vulnerabilidad en los desplazamientos (movilización del evaluado de un sitio a otro)",
        descriptores: `1. Baja. \n2. Media.\n3. Alta.`,
        observaciones: "Este punto se debe responder con los resultados del análisis de rutas de desplazamientosy la entrevista.",
        escala100: 15, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA VULNERABILIDAD"
    },
    {
        item: "3.7. Vulnerabilidades marginales del núcleo familiar (hogar)",
        descriptores: `1. Baja. \n2. Media.\n3. Alta.`,
        observaciones: "",
        escala100: 15, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0, fuentesInformacion: "", subseccion: "EVALUACION DE LA VULNERABILIDAD"
    },
];
