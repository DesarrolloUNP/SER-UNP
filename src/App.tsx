import './App.css';
import { VentanaLienzo } from 'eco-unp/ui';
import { Route, Routes } from 'react-router-dom';
import { OrdenesTrabajo } from './pages/ordenesTrabajo'
import { Entrevista } from './pages/entrevista';
import { Entorno } from './pages/entorno';
import { Terceros } from './pages/terceros';
import { Escoltas } from './pages/escoltas';
import { Documental } from './pages/documental';
import { Informe } from './pages/informe';

function App() {
  return (
    <VentanaLienzo>
      <Routes>
        <Route path="/" element={<OrdenesTrabajo />} />
        <Route path="/entrevista" element={<Entrevista />} />
        <Route path="/entornos" element={<Entorno />} />
        <Route path="/terceros" element={<Terceros />} />
        <Route path="/escoltas" element={<Escoltas />} />
        <Route path="/documental" element={<Documental />} />
        <Route path="/informe" element={<Informe />} />
      </Routes>
    </VentanaLienzo>
  );
}

export default App;