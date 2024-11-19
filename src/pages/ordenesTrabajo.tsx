import data from './../services/data.json'
import { Procesos } from '../components/modals/procesos'
import { Anexos } from '../components/modals/anexos'
import { BootstrapTable } from 'eco-unp/ui'
import { TipoSolicitud } from '../shared/tipoSolicitud'

export const OrdenesTrabajo: React.FC = () => {

    const dataTable: any[] = data

    const columns: any[] = [
        {
            key: 'solicitud',
            label: 'Solicitud',
            renderComponent:(rowData: any) => <TipoSolicitud solicitud={rowData.solicitud} />,
        },
        { key: "no_orden", label: "Orden de trabajo", hasModal: true },
        { key: "nombre_evaluado", label: "Nombre del Evaluado" },
        { key: "id_evaluado", label: "Identificación" },
        { key: "fecha_asignacion", label: "Fecha de asignación" },
        { key: "diasHabiles", label: "Días hábiles" },
        { key: "poblacion", label: "Población" },
        { key: "tipo_estudio", label: "Tipo de estudio" },
        { key: "anexos", label: "Anexos", hasModal: true },
    ]

    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "no_orden":
                return (<Procesos row={row}></Procesos>);
            case "anexos":
                return (<Anexos row={row}></Anexos>);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    return (
        <div className='main_container'>
            <BootstrapTable
                columns={columns}
                data={dataTable}
                renderModalContent={renderModalContent}
                totalDias={30} 
                subtitle={'Subdirección de Evaluación de Riesgo'} 
                items={'Órdenes de trabajo'} />
        </div>
    )
}