const pacientesBackend = import.meta.env.VITE_API_PACIENTES;

// =============================
// OBTENER TODOS
// =============================
export const obtenerPacientes = async () => {
  try {
    const respuesta = await fetch(pacientesBackend);

    if (!respuesta.ok) {
      throw new Error("Error al obtener pacientes");
    }

    const data = await respuesta.json();
    return data;

  } catch (error) {
    console.error("Error en obtenerPacientes:", error);
    return [];
  }
};

// =============================
// CREAR
// =============================
export const crearPaciente = async (paciente) => {
  try {
    const respuesta = await fetch(pacientesBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paciente),
    });

    if (!respuesta.ok) {
      throw new Error("Error al crear paciente");
    }

    const data = await respuesta.json();
    return data;

  } catch (error) {
    console.error("Error en crearPaciente:", error);
    return null;
  }
};

// =============================
// EDITAR
// =============================
export const editarPaciente = async (paciente) => {
  try {
    const respuesta = await fetch(
      `${pacientesBackend}/${paciente._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paciente),
      }
    );

    if (!respuesta.ok) {
      throw new Error("Error al editar paciente");
    }

    const data = await respuesta.json();
    return data;

  } catch (error) {
    console.error("Error en editarPaciente:", error);
    return null;
  }
};

// =============================
// BORRAR
// =============================
export const borrarPaciente = async (id) => {
  try {
    const respuesta = await fetch(`${pacientesBackend}/${id}`, {
      method: "DELETE",
    });

    if (!respuesta.ok) {
      throw new Error("Error al borrar paciente");
    }

    return true;

  } catch (error) {
    console.error("Error en borrarPaciente:", error);
    return false;
  }
};