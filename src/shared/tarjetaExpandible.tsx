import React from 'react';
import { Card, CardHeader, CardBody } from 'react-bootstrap';

const ExpandableCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    return (
        <Card className="border-0 shadow mt-4">
            <CardHeader className="d-flex justify-content-between align-items-center bg-unp text-light py-3">
                {title}
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
};

export default ExpandableCard;




