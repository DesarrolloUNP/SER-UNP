import { IoCall, IoDocuments } from "react-icons/io5";
import { FaClipboardUser, FaBuildingUser, FaCircleCheck, FaClock } from "react-icons/fa6";
import { FaUserShield, FaUsers, FaUser } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './../../styles/modals.css'

const sections = [
    { label: "Contactos", icon: IoCall, route: "/contactos", closed: true },
    { label: "Entrevista", icon: FaClipboardUser, route: "/entrevista", closed: false },
    { label: "Entornos", icon: FaBuildingUser, route: "/entornos", closed: true },
    { label: "Terceros", icon: FaUsers, route: "/terceros", closed: false },
    { label: "Escoltas", icon: FaUserShield, route: "/escoltas", closed: false },
    { label: "Documental", icon: IoDocuments, route: "/documental", closed: true },
    { label: "Estándar", icon: BsTable, route: "/estandar", closed: false },
    { label: "Informe de ejecución", icon: HiClipboardDocumentList, route: "/informe", closed: true },
];

export const Procesos: React.FC<any> = ({ row }) => {
    const navigate = useNavigate();
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <div className="modal_proccess_container">
            <div className='unp-row-subtitle'>
                <div className='modal_subtitle_container'>
                    <div className='red-section'>1</div>
                    <FaUser />
                    <span className='modal-subtitle'>{row.nombre_evaluado}</span>
                </div>
                <div>
                    <span className='modal-subtitle-two'>{row.no_orden}</span>
                </div>
            </div>
            <div className='menu'>
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className='item_container'
                        onClick={() => navigate(section.route)}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <div className='iconLabel_container'>
                            <section.icon className='iconProcess_menu' />
                            <span>{section.label}</span>
                        </div>
                        <div className="stateContainer">
                            {section.closed ? (
                                <FaCircleCheck style={{ color: '#3AB34A' }} />
                            ) : (
                                <FaClock style={{ color: '#E2E2E2' }} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
