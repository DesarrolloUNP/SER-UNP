import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardBody, Button } from 'react-bootstrap';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const ExpandableCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState<string>('0px');
    const bodyRef = useRef<HTMLDivElement>(null);

    const toggleCard = () => {
        if (bodyRef.current) {
            // Si está abierto, inicia contracción ajustando maxHeight
            if (isOpen) {
                setMaxHeight(`${bodyRef.current.scrollHeight}px`);
                requestAnimationFrame(() => setMaxHeight('0px')); // Cambia a '0px' para iniciar la contracción
            } else {
                // Si está cerrado, ajusta maxHeight al contenido dinámico
                setMaxHeight(`${bodyRef.current.scrollHeight}px`);
            }
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        // Cuando se abre completamente, ajusta maxHeight a 'none' para permitir contenido dinámico
        if (isOpen && maxHeight !== 'none') {
            const timeout = setTimeout(() => {
                setMaxHeight('none');
            }, 400); // Tiempo igual al de la transición
            return () => clearTimeout(timeout);
        }
    }, [isOpen, maxHeight]);

    return (
        <Card className="border-0 shadow mt-4">
            <CardHeader className="d-flex justify-content-between align-items-center bg-unp text-light py-3">
                {title}
                <Button
                    onClick={toggleCard}
                    className="buttonToggleCardButtom"
                >
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </Button>
            </CardHeader>
            <div
                className="card-body-container"
                style={{
                    maxHeight: maxHeight,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease-in',
                }}
            >
                <CardBody ref={bodyRef}>{children}</CardBody>
            </div>
        </Card>
    );
};

export default ExpandableCard;




