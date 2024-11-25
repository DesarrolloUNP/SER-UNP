export const fetchDepartamentos = async () => {
    try {
        const response = await fetch("https://api-colombia.com/api/v1/Department");
        if (!response.ok) {
            throw new Error("Error al obtener departamentos");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener departamentos:", error);
        throw error;
    }
};

export const fetchMunicipios = async (departamentoId: string) => {
    try {
        const response = await fetch(`https://api-colombia.com/api/v1/Department/${departamentoId}/cities`);
        if (!response.ok) {
            throw new Error("Error al obtener municipios");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener municipios:", error);
        throw error;
    }
};
