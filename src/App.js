import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clientes from "./pages/clientes.jsx";
import Saldos from "./pages/saldos.jsx";
import Login from './pages/login.jsx'
import Main from './pages/main'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/clientes" element={<Clientes/>} />
        <Route path="/saldos" element={<Saldos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
