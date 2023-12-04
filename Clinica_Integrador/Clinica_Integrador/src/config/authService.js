// authService.js

export const fakeAuthService = {
    login: async (email, password) => {
      // Simulación de la lógica de autenticación
      return new Promise((resolve, reject) => {
        // Simulación de un tiempo de espera de 1 segundo
        setTimeout(() => {
          // Verifica las credenciales (en un sistema real, esto se haría en el servidor)
          if (email === "usuario@example.com" && password === "contrasena") {
            resolve({ success: true });
          } else {
            reject(new Error("Credenciales incorrectas"));
          }
        }, 1000);
      });
    },
  };
  