export default function HeaderNav({ vistaActual, setVistaActual }) {
  const navegar = (vista) => {
    setVistaActual(vista);
    // Cierra el menú móvil automáticamente al elegir una opción
    const menuColapsable = document.getElementById("menuInti");
    if (menuColapsable && menuColapsable.classList.contains("show")) {
      menuColapsable.classList.remove("show");
    }
  };

  return (
    <div className="bloque-fijo-superior shadow-sm">
      <header className="header-inti">
        <div className="contenedor-fijo d-flex flex-column flex-md-row align-items-center justify-content-between gap-2 text-center text-md-start">
          <div className="d-flex align-items-center gap-3">
            <img src="img/logo.png" alt="Logo Inti Tours" className="logo-img" />
            <div>
              <h1 className="mb-0 text-white fw-bold">INTI TOURS</h1>
              <p className="mb-0 text-light fst-italic">Turismo de Calidad y Confianza en Cusco</p>
            </div>
          </div>
          <div className="contacto-rapido text-center text-md-end text-white d-none d-sm-block">
            <div><i className="fas fa-phone-alt me-1"></i> +51 (084) 123 456</div>
            <div><i className="fas fa-envelope me-1"></i> reservas@intitours.com</div>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-md navbar-dark bg-azul-principal nav-centrado">
        <div className="contenedor-fijo d-flex justify-content-between justify-content-md-center align-items-center">
          <span className="navbar-brand d-md-none fw-bold fs-6">Menú Principal</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuInti"
            aria-controls="menuInti"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="menuInti">
            <ul className="navbar-nav text-center py-2 py-md-0">
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link w-100 ${vistaActual === "inicio" ? "active" : ""}`}
                  onClick={() => navegar("inicio")}
                >
                  <i className="fas fa-home me-2"></i>Inicio
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link w-100 ${vistaActual === "tours" ? "active" : ""}`}
                  onClick={() => navegar("tours")}
                >
                  <i className="fas fa-map-marked-alt me-2"></i>Tours
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link w-100 ${vistaActual === "contacto" ? "active" : ""}`}
                  onClick={() => navegar("contacto")}
                >
                  <i className="fas fa-envelope me-2"></i>Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}