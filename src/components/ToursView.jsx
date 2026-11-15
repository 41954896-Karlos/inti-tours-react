import { useState, useEffect } from "react";
import { TourService } from "../services/tourService";

export default function ToursView({ onReservarTour }) {
  const [tours, setTours] = useState([]);
  const [categoria, setCategoria] = useState("todos");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    TourService.listarToursPorCategoria(categoria)
      .then((datos) => setTours(datos))
      .finally(() => setCargando(false));
  }, [categoria]);

  return (
    <main className="contenedor-fijo my-4">
      <h2 className="text-center text-azul fw-bold mb-4">Catálogo de Tours</h2>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {["todos", "aventura", "cultural"].map((cat) => (
          <button
            key={cat}
            className={`btn btn-outline-primary text-capitalize ${categoria === cat ? "active" : ""}`}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {cargando ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2 text-azul fw-bold">Consultando capa de servicio...</p>
        </div>
      ) : (
        <div className="row g-4">
          {tours.map((tour) => (
            <div className="col-12 col-md-6 col-lg-4" key={tour.id}>
              <div className="card h-100 shadow-sm border-0">
                <img src={tour.imagen} className="card-img-top height-200" alt={tour.nombre} />
                <div className="card-body d-flex flex-column">
                  <span className={`badge ${tour.categoria === "aventura" ? "bg-secondary" : "bg-primary"} mb-2 align-self-start text-capitalize`}>
                    {tour.categoria}
                  </span>
                  <h5 className="card-title text-azul fw-bold">{tour.nombre}</h5>
                  <p className="card-text text-muted small">{tour.descripcion}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center pt-2 border-top">
                    <span className="fw-bold text-primary fs-5">S/ {tour.precio.toLocaleString("es-PE")}</span>
                    <button onClick={() => onReservarTour(tour.nombre)} className="btn btn-sm btn-azul">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}