import { SubtituloForm } from "eco-unp/ui";
import { ChangeEvent } from "react";
import { FaUsers } from "react-icons/fa";

interface ComponentePadresProps {
    formData: {
        nombrePadre: string,
        apellidoPadre: string,
        ocupacionPadre: string,
        empresaPadre: string,
        causaMuertePadre: string,
        nombreMadre: string,
        apellidoMadre: string,
        ocupacionMadre: string,
        empresaMadre: string,
        causaMuerteMadre: string,
    };
    handleChange: (e: ChangeEvent<any>) => void;
}
export const ComponentePadres: React.FC<ComponentePadresProps> = ({ formData, handleChange }) => (
    <>
    <SubtituloForm subtitulo="Padres" icon={FaUsers} />
    </>
)