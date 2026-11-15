import { useState } from "react";
import HeaderNav from "./components/HeaderNav";
import InicioView from "./components/InicioView";
import ToursView from "./components/ToursView";
import ContactoView from "./components/ContactoView";

export default function App() {
  const [vistaActual, setVistaActual] = useState("inicio");
  const [tourSeleccionado, setTourSeleccionado] = useState("");

  const handleReservarDesdeCatalogo = (nombreTour) => {
    setTourSeleccionado(nombreTour);
    setVistaActual("contacto");
  };

  return (
    <>
      <HeaderNav vistaActual={vistaActual} setVistaActual={setVistaActual} />

      {vistaActual === "inicio" && (
        <InicioView irATours={() => setVistaActual("tours")} />
      )}

      {vistaActual === "tours" && (
        <ToursView onReservarTour={handleReservarDesdeCatalogo} />
      )}

      {vistaActual === "contacto" && (
        <ContactoView tourPreseleccionado={tourSeleccionado} />
      )}

      <footer className="bg-dark text-white py-3 text-center mt-5">
        <div className="contenedor-fijo">
          <p className="mb-1 small">© 2026 Inti Tours - Cusco, Perú. Todos los derechos reservados.</p>
          <p className="mb-0 small text-light">Desarrollado por: Carlos Quispe Pareja</p>
        </div>
      </footer>
    </>
  );
}