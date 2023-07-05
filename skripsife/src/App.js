import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ScanBarcode from './pages/ScanAdmin';
import Qrbarcode from './pages/Barcode';
import Login from './pages/Login';
import LoginAdmin from './pages/LoginAdmin';
import HomeAdmin from './pages/HomeAdmin';
import Home from './pages/Home';
import Absensi from './pages/Absensi';
import RegistMahasiswa from './pages/RegistMahasiswa';
import Pendaftaran from './pages/Pendaftaran';
import Register from './pages/Register';
import TestBarcode from './pages/Tets';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homeAdmin" element={<HomeAdmin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/scan" element={<ScanBarcode />} />
          <Route path="/barcode" element={<Qrbarcode />} />
          <Route path="/test" element={<TestBarcode/>} />
          <Route path="barcode/:id" element={<Qrbarcode />} />
          <Route path="/absensi" element={<Absensi />} />
          <Route path="/registmahasiswa" element={<RegistMahasiswa />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
