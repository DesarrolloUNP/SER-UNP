import React from "react";
import '../styles/paginador.css';

interface Step {
    label: string;
    icon: React.ReactNode;
}

interface PaginadorProps {
    currentStep: number;
    totalSteps: number;
    onStepClick: (step: number) => void;
    steps: Step[];
}

export const Paginador: React.FC<PaginadorProps> = ({ currentStep, totalSteps, onStepClick, steps }) => {

    const displayedSteps = steps.slice(0, totalSteps);

    return (
        <ul id="progressbar">
            {displayedSteps.map((step, index) => (
                <li
                    key={index}
                    className={index + 1 <= currentStep ? "active" : ""}
                    onClick={() => onStepClick(index + 1)}
                >
                    <div className={`step ${index + 1 <= currentStep ? "active" : ""}`}>
                        {step.icon}
                    </div>
                    <strong>{step.label}</strong>
                </li>
            ))}
        </ul>
    );
};


