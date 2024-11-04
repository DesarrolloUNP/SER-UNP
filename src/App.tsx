import './App.css';
import { VentanaLienzo } from 'eco-unp/ui';
import { Route, Routes } from 'react-router-dom';
import { OrdenesTrabajo } from './pages/ordenesTrabajo'
import { Entrevista } from './pages/entrevista';
import { Entorno } from './pages/entorno';
import { Terceros } from './pages/terceros';

function App() {
  return (
    <VentanaLienzo>
      <Routes>
        <Route path="/" element={<OrdenesTrabajo />} />
        <Route path="/entrevista" element={<Entrevista />} />
        <Route path="/entorno" element={<Entorno />} />
        <Route path="/terceros" element={<Terceros />} />
      </Routes>
    </VentanaLienzo>
  );
}

export default App;
