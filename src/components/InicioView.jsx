import { useState, useEffect } from "react";
import { TourService } from "../services/tourService";

export default function InicioView({ irATours }) {
  const [precioBase, setPrecioBase] = useState(1200);
  const [pasajeros, setPasajeros] = useState(1);
  const [cotizacion, setCotizacion] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setError("");
      const resultado = TourService.calcularCotizacion(Number(precioBase), Number(pasajeros));
      setCotizacion(resultado);
    } catch (err) {
      setError(err.message);
    }
  }, [precioBase, pasajeros]);

  return (
    <>
      <section className="hero-carousel my-3">
        <div className="contenedor-fijo">
          <div id="intiCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <div className="carousel-inner rounded">
              <div className="carousel-item active hero-slide" style={{ backgroundImage: "linear-gradient(rgba(13,71,161,0.6), rgba(0,0,0,0.6)), url('img/machupicchu.jpg')" }}>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 px-3">
                  <h2 className="fs-2 fs-md-1 fw-bold text-white">Machu Picchu Místico</h2>
                  <p className="fs-6 fs-md-5 text-light">Vive la experiencia inolvidable de la Maravilla del Mundo.</p>
                  <button onClick={irATours} className="btn btn-outline-light">Ver Paquete</button>
                </div>
              </div>
              <div className="carousel-item hero-slide" style={{ backgroundImage: "linear-gradient(rgba(13,71,161,0.6), rgba(0,0,0,0.6)), url('img/choquequirao.jpg')" }}>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 px-3">
                  <h2 className="fs-2 fs-md-1 fw-bold text-white">Choquequirao Trek</h2>
                  <p className="fs-6 fs-md-5 text-light">Explora el último refugio inca en el cañón del Apurímac.</p>
                  <button onClick={irATours} className="btn btn-outline-light">Ver Expedición</button>
                </div>
              </div>
              <div className="carousel-item hero-slide" style={{ backgroundImage: "linear-gradient(rgba(13,71,161,0.6), rgba(0,0,0,0.6)), url('img/salkantay.jpg')" }}>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 px-3">
                  <h2 className="fs-2 fs-md-1 fw-bold text-white">Nevado Salkantay</h2>
                  <p className="fs-6 fs-md-5 text-light">Visita el imponente Apu Salkantay.</p>
                  <button onClick={irATours} className="btn btn-outline-light">Ver Expedición</button>
                </div>
              </div>
              <div className="carousel-item hero-slide" style={{ backgroundImage: "linear-gradient(rgba(13,71,161,0.6), rgba(0,0,0,0.6)), url('img/montanas.jpg')" }}>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 px-3">
                  <h2 className="fs-2 fs-md-1 fw-bold text-white">Paisajes de los Andes Peruanos</h2>
                  <p className="fs-6 fs-md-5 text-light">Vive una experiencia Mística</p>
                  <button onClick={irATours} className="btn btn-outline-light">Ver Expedición</button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#intiCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#intiCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      <main className="contenedor-fijo my-4">
        <section className="row g-4 mb-4">
          <div className="col-12 col-lg-7">
            <h2 className="text-azul fw-bold border-start border-4 border-primary ps-3 mb-3">¿Quiénes Somos en Inti Tours?</h2>
            <p className="lead text-secondary">Somos una agencia de viajes y turismo cusqueña dedicada a brindar excursiones culturales y de aventura de primer nivel.</p>
            <p>En Inti Tours nos enfocamos en la seguridad, puntualidad y excelencia para que disfrutes de Machu Picchu, Choquequirao y los Andes Peruanos con total tranquilidad.</p>
          </div>
          <div className="col-12 col-lg-5">
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <div className="card bg-azul-principal text-white p-3 text-center h-100 shadow-sm">
                  <i className="fas fa-compass fa-2x mb-2 text-light"></i>
                  <h5>Misión</h5>
                  <small>Ofrecer servicios turísticos confiables y memorables.</small>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="card bg-gris-claro text-dark p-3 text-center h-100 shadow-sm border">
                  <i className="fas fa-eye fa-2x mb-2 text-azul"></i>
                  <h5 className="fw-bold">Visión</h5>
                  <small>Ser la agencia líder en turismo seguro en la región Cusco.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="card shadow-sm p-3 p-md-4 border-0 mb-4 bg-white">
          <h3 className="text-azul fw-bold text-center mb-4"><i className="fas fa-calculator me-2"></i>Cotizador Rápido de Tours</h3>
          <div className="row g-3 align-items-end">
            <div className="col-12 col-md-5">
              <label className="form-label fw-bold">Selecciona un Tour:</label>
              <select className="form-select" value={precioBase} onChange={(e) => setPrecioBase(e.target.value)}>
                <option value={1200}>Choquequirao Trek 5D/4N (S/ 1,200)</option>
                <option value={800}>Machu Picchu Full Day (S/ 800)</option>
                <option value={1500}>Salkantay Trek 5D/4N (S/ 1,500)</option>
                <option value={250}>City Tour Cusco (S/ 250)</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <label className="form-label fw-bold">Número de Pasajeros:</label>
              <input type="number" className="form-control" value={pasajeros} min="1" max="20" onChange={(e) => setPasajeros(e.target.value)} />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="p-3 bg-azul-suave rounded border border-primary text-center">
                {error ? (
                  <span className="text-danger fw-bold small">{error}</span>
                ) : cotizacion && (
                  <>
                    <span className="fs-6 text-muted">Monto Total Estimado:</span>
                    <h4 className="text-azul fw-bold mb-0">
                      S/ {cotizacion.totalFinal.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </h4>
                    <small className={cotizacion.aplicaDescuento ? "text-success fw-bold" : "text-muted"}>
                      {cotizacion.mensajePromocion}
                    </small>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="row g-3 my-4">
          <div className="col-12 col-md-4">
            <div className="card shadow-sm p-3 text-center bg-white h-100 border-top border-4 border-primary">
              <i className="fas fa-shield-alt text-azul fa-2x mb-2"></i>
              <h5 className="text-azul fw-bold">Seguridad Garantizada</h5>
              <p className="small text-muted mb-0">Equipos certificados y guías bilingües de alta montaña.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card shadow-sm p-3 text-center bg-white h-100 border-top border-4 border-primary">
              <i className="fas fa-clock text-azul fa-2x mb-2"></i>
              <h5 className="text-azul fw-bold">Puntualidad</h5>
              <p className="small text-muted mb-0">Cumplimiento estricto de todos los itinerarios acordados.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card shadow-sm p-3 text-center bg-white h-100 border-top border-4 border-primary">
              <i className="fas fa-leaf text-azul fa-2x mb-2"></i>
              <h5 className="text-azul fw-bold">Turismo Sostenible</h5>
              <p className="small text-muted mb-0">Respeto por el medio ambiente y las comunidades locales.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}