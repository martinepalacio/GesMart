import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login.jsx'
import Main from './components/main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
