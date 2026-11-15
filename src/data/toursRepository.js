const TOURS_DB = [
  {
    id: 1,
    nombre: "Choquequirao Trek 5D/4N",
    categoria: "aventura",
    precio: 1200,
    imagen: "img/choquequirao.jpg",
    descripcion: 'Caminata exigente hacia la "Cuna de Oro" en Vilcabamba.'
  },
  {
    id: 2,
    nombre: "Machu Picchu Full Day",
    categoria: "cultural",
    precio: 800,
    imagen: "img/machupicchu.jpg",
    descripcion: "Excursión guiada en tren panorámico a la Maravilla del Mundo."
  },
  {
    id: 3,
    nombre: "Salkantay Trek 5D/4N",
    categoria: "aventura",
    precio: 1500,
    imagen: "img/salkantay.jpg",
    descripcion: "Trekking que conecta el nevado Salkantay con Machu Picchu."
  },
  {
    id: 4,
    nombre: "City Tour Cusco",
    categoria: "cultural",
    precio: 250,
    imagen: "img/montanas.jpg",
    descripcion: "Recorrido arqueológico por Sacsayhuamán, Qenqo y Qorikancha."
  }
];

export const TourRepository = {
  async getAllTours() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...TOURS_DB]);
      }, 300);
    });
  }
};