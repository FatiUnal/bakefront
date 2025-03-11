import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Anasayfa from "./pages/anasayfa/Anasayfa.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FooterTop from "./components/FooterTop/FooterTop.jsx";
import Projeler from "./pages/projeler/Projeler.jsx";
import ProjeDetay from "./pages/projeDetaySayfası/ProjeDetay.jsx";
import Iletisim from "./pages/iletisim/Iletisim.jsx";
import Hakkimizda from "./pages/Hakkımizda/Hakkimizda.jsx";
import AdminDashboard from "./pages/adminPanel/AdminDashboard.jsx";
import AdminProjeEkle from "./pages/adminPanel/AdminProjeEkle.jsx";
import AdminProjeler from "./pages/adminPanel/AdminProjeler.jsx";
import AdminProjeDuzenle from "./pages/adminPanel/AdminProjeDuzenle.jsx";
import AdminLogin from "./pages/adminPanel/AdminLogin.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./context/ProtectedRoute.jsx";
import Unauthorized from "./pages/yetkisizGiris/Unauthorized.jsx";
import ScrollToTop from "./components/scrollTop/ScrollToTop.jsx";

function App() {
  return (
    <AuthProvider>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/projeler" element={<Projeler />} />
        <Route path="/projeler/:id" element={<ProjeDetay />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="ekle" element={<AdminProjeEkle />} />
          <Route path="projeler" element={<AdminProjeler />} />
          <Route path="projeler/:id" element={<AdminProjeDuzenle />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
      <FooterTop />
      <Footer />
    </AuthProvider>
  );
}

export default App;
