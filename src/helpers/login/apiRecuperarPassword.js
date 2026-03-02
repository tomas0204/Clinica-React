const forgotPassword = import.meta.env.VITE_API_RECUPERAR_PASSWORD;
const resetPasswordEndpoint = import.meta.env.VITE_API_RESET_PASSWORD;

export const recuperarPassword = async (email) => {
    try {
        const response = await fetch(forgotPassword, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return { error: error.message };
    }
}

export const resetPassword = async (token, contraseña) => {
    try {
        const response = await fetch(`${resetPasswordEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, contraseña })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return { error: error.message };
    }
}