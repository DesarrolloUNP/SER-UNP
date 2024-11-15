import { Encabezado } from 'eco-unp/ui'
import { FormularioEscoltas} from '../components/forms/escoltas/formularioEscoltas'

export const Escoltas: React.FC = ({ }) => {
    return (
        <div className='main_container'>
            <div className='my-3 container'>
                <div className='justify-content-center row'>
                    <div className='col-xl-9 col-lg-11'>
                        <Encabezado dependencia={'Subdirección de Evaluación de Riesgo'}></Encabezado>
                        <FormularioEscoltas></FormularioEscoltas>
                    </div>
                </div>
            </div>
        </div>
    )
}