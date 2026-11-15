import { TourRepository } from "../data/toursRepository";

export class TourService {
  static async listarToursPorCategoria(categoria = "todos") {
    const tours = await TourRepository.getAllTours();
    if (categoria === "todos") {
      return tours;
    }
    return tours.filter((tour) => tour.categoria === categoria);
  }

  static calcularCotizacion(precioBase, cantidadPasajeros) {
    if (isNaN(cantidadPasajeros) || cantidadPasajeros < 1 || cantidadPasajeros > 20) {
      throw new Error("El número de pasajeros debe estar entre 1 y 20.");
    }

    const subtotal = precioBase * cantidadPasajeros;
    const aplicaDescuento = cantidadPasajeros >= 4;
    const descuento = aplicaDescuento ? subtotal * 0.10 : 0;
    const totalFinal = subtotal - descuento;

    return {
      subtotal,
      descuento,
      totalFinal,
      aplicaDescuento,
      mensajePromocion: aplicaDescuento
        ? "¡Descuento grupal del 10% aplicado!"
        : "Reserva 4+ pasajeros para obtener 10% de descuento."
    };
  }
}