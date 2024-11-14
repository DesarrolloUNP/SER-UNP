import { Encabezado } from 'eco-unp/ui'
import { FormularioEntorno } from '../components/forms/entorno/formularioEntorno'

export const Entorno: React.FC = ({ }) => {
    return (
        <div className='main_container'>
            <div className='my-3 container'>
                <div className='justify-content-center row'>
                    <div className='col-xl-9 col-lg-11'>
                        <Encabezado dependencia={'Subdirección de Evaluación de Riesgo'}></Encabezado>
                        <FormularioEntorno></FormularioEntorno>
                    </div>
                </div>
            </div>
        </div>
    )
}