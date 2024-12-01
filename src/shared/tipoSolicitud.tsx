import React, { useState } from 'react';
import { FaExclamationTriangle, FaBalanceScale, FaSync, FaUserShield } from 'react-icons/fa';

interface IconTooltipProps {
    solicitud: number;
}

export const TipoSolicitud: React.FC<IconTooltipProps> = ({ solicitud }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    let tooltipText = '';
    let color = '';
    let Icon = null;

    switch (solicitud) {
        case 1:
            tooltipText = "Emergencia";
            color = "#FF0000";
            Icon = FaExclamationTriangle;
            break;
        case 2:
            tooltipText = "Jurídico";
            color = "#FFA500";
            Icon = FaBalanceScale;
            break;
        case 3:
            tooltipText = "Reasignación";
            color = "#FFFF00";
            Icon = FaSync;
            break;
        case 4:
            tooltipText = "Caso por Nombrar";
            color = "#0000FF";
            Icon = FaUserShield;
            break;
        default:
            return null;
    }

    const handleMouseEnter = () => setShowTooltip(true);
    const handleMouseLeave = () => setShowTooltip(false);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5em",
                    color,
                }}
            >
                <Icon />
            </div>
            {showTooltip && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%", 
                        left: "110%", 
                        transform: "translateY(-50%)", 
                        backgroundColor: "#333",
                        color: "#fff",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "0.9em",
                        whiteSpace: "nowrap",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)", 
                        opacity: showTooltip ? 1 : 0, 
                        visibility: showTooltip ? "visible" : "hidden", 
                        zIndex: 1000, 
                        transition: "opacity 0.3s ease, visibility 0.3s ease",
                    }}
                >
                    {tooltipText}
                </div>
            )}
        </div>
    );
};
