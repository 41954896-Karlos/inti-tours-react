export class ContactoService {
  static async registrarConsulta(datosFormulario) {
    const { nombre, email, telefono, tour, mensaje } = datosFormulario;

    if (!nombre.trim() || !email.trim() || !telefono.trim() || !tour || !mensaje.trim()) {
      throw new Error("Todos los campos son obligatorios.");
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      throw new Error("Ingrese un correo electrónico válido.");
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        const historial = JSON.parse(localStorage.getItem("inti_consultas") || "[]");
        const nuevaConsulta = {
          id: Date.now(),
          ...datosFormulario,
          fecha: new Date().toLocaleString("es-PE")
        };
        historial.push(nuevaConsulta);
        localStorage.setItem("inti_consultas", JSON.stringify(historial));

        const codigo = `INTI-${nuevaConsulta.id.toString().slice(-4)}`;
        resolve({
          exito: true,
          mensaje: `¡Consulta enviada con éxito a Inti Tours! Código de atención: ${codigo}`
        });
      }, 400);
    });
  }
}