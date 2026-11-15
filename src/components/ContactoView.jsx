import { useState, useEffect } from "react";
import { ContactoService } from "../services/contactoService";

export default function ContactoView({ tourPreseleccionado }) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tour: tourPreseleccionado || "",
    mensaje: ""
  });
  const [alerta, setAlerta] = useState(null);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    if (tourPreseleccionado) {
      setForm((prev) => ({ ...prev, tour: tourPreseleccionado }));
    }
  }, [tourPreseleccionado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    try {
      const respuesta = await ContactoService.registrarConsulta(form);
      setAlerta({ tipo: "success", texto: respuesta.mensaje });
      setForm({ nombre: "", email: "", telefono: "", tour: "", mensaje: "" });
    } catch (error) {
      setAlerta({ tipo: "danger", texto: error.message });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="contenedor-fijo my-4">
      <div className="row g-4">
        <div className="col-12 col-lg-7">
          <div className="card shadow-sm border-0 p-3 p-md-4 bg-white">
            <h3 className="text-azul fw-bold mb-3"><i className="fas fa-paper-plane me-2"></i>Contáctanos</h3>
            {alerta && (
              <div className={`alert alert-${alerta.tipo} alert-dismissible fade show`}>
                {alerta.texto}
                <button type="button" className="btn-close" onClick={() => setAlerta(null)}></button>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre Completo:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej: Carlos Quispe"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                />
              </div>
              <div className="row g-2 mb-3">
                <div className="col-12 col-sm-6">
                  <label className="form-label fw-semibold">Correo Electrónico:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="correo@ejemplo.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label fw-semibold">Teléfono:</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+51 987 654 321"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Tour de Interés:</label>
                <select
                  className="form-select"
                  value={form.tour}
                  onChange={(e) => setForm({ ...form, tour: e.target.value })}
                >
                  <option value="">-- Seleccione un Tour --</option>
                  <option value="Choquequirao Trek 5D/4N">Choquequirao Trek 5D/4N</option>
                  <option value="Machu Picchu Full Day">Machu Picchu Full Day</option>
                  <option value="Salkantay Trek 5D/4N">Salkantay Trek 5D/4N</option>
                  <option value="City Tour Cusco">City Tour Cusco</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Mensaje:</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Escribe tu consulta..."
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-azul btn-lg w-100 fw-bold" disabled={enviando}>
                {enviando ? "Procesando en Servicio..." : "Enviar Consulta"}
              </button>
            </form>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="bg-white p-4 rounded shadow-sm border h-100">
            <h4 className="text-azul fw-bold mb-4">Información de Inti Tours</h4>
            <ul className="list-unstyled">
              <li className="mb-3"><i className="fas fa-map-marker-alt text-primary me-2"></i> <strong>Dirección:</strong><br /><span className="text-muted ms-4">Av. El Sol 123, Cusco - Perú</span></li>
              <li className="mb-3"><i className="fas fa-phone text-primary me-2"></i> <strong>Teléfono:</strong><br /><span className="text-muted ms-4">+51 (084) 123 456</span></li>
              <li className="mb-3"><i className="fas fa-envelope text-primary me-2"></i> <strong>Correo:</strong><br /><span className="text-muted ms-4">informes@intitours.com</span></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}