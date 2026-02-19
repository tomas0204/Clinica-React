const doctoresBackend = import.meta.env.VITE_API_DOCTORES;

// 🔹 Crear doctor
export const crearDoctor = async (doctor) => {
  try {
    const respuesta = await fetch(doctoresBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctor),
    });

    if (!respuesta.ok) {
      throw new Error("Error al crear doctor");
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

// 🔹 Listar doctores
export const listarDoctores = async () => {
  try {
    const respuesta = await fetch(doctoresBackend);

    if (!respuesta.ok) {
      throw new Error("Error al listar doctores");
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

// 🔹 Obtener doctor por ID
export const obtenerDoctor = async (id) => {
  try {
    const respuesta = await fetch(`${doctoresBackend}/${id}`);

    if (!respuesta.ok) {
      throw new Error("Error al obtener doctor");
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

// 🔹 Editar doctor
export const editarDoctor = async (doctor) => {
  try {
    const respuesta = await fetch(`${doctoresBackend}/${doctor._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctor),
    });

    if (!respuesta.ok) {
      throw new Error("Error al editar doctor");
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

// 🔹 Borrar doctor
export const borrarDoctor = async (doctor) => {
  try {
    const respuesta = await fetch(`${doctoresBackend}/${doctor._id}`, {
      method: "DELETE",
    });

    if (!respuesta.ok) {
      throw new Error("Error al eliminar doctor");
    }

    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};