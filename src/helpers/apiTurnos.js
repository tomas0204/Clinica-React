const turnosBackend = import.meta.env.VITE_API_TURNOS;

export const crearTurno = async (turno) => {
  try {
    const respuesta = await fetch(turnosBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(turno),
    });

    if (!respuesta.ok) {
      throw new Error("Error al crear turno");
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

export const editarTurno = async (turno) => {
  try {
    const respuesta = await fetch(`${turnosBackend}/${turno.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(turno),
    });

    if (!respuesta.ok) {
      throw new Error("Error al editar turno");
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

export const borrarTurno = async (turno) => {
  try {
    const respuesta = await fetch(`${turnosBackend}/${turno.id}`, {
      method: "DELETE",
    });

    if (!respuesta.ok) {
      throw new Error("Error al editar turno");
    }

    return true;    
  } catch (error) {
    return false;
  }
};