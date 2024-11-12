import { Encabezado } from 'eco-unp/ui'
import { FormularioEntrevista } from '../components/forms/entrevista/formularioEntrevista'

export const Entrevista: React.FC = ({ }) => {
    return (
        <div className='main_container'>
            <div className='my-3 container'>
                <div className='justify-content-center row'>
                    <div className='col-xl-9 col-lg-11'>
                        <Encabezado dependencia={'Subdirección de Evaluación de Riesgo'}></Encabezado>
                        <FormularioEntrevista></FormularioEntrevista>
                    </div>
                </div>
            </div>
        </div>
    )
}