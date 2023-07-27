
//funcion de Bienvenida
function Saludos() {
    alert("Bienvenido a juego de guerra de tres en raya");
    alert("Para poder ingresar deberas registrarte para una mejor expericencia");
    alert("disfruta del clasico tres en raya compitiendo con jugadores de todo el mundo online");
}
Saludos();
// funcion de registro
const usuarios = [];

const mostrarAlerta = (mensaje) => {
  alert(mensaje);
};

const obtenerEntradaUsuario = (mensaje) => {
  return prompt(mensaje);
};

const signup = () => {
  let username = obtenerEntradaUsuario("Ingrese un nombre de usuario:");
  username = username.trim();
  if (!username) {
    mostrarAlerta("Nombre de usuario no válido. Intente nuevamente.");
    return;
  }

  if (usuarios.find(user => user.username === username)) {
    mostrarAlerta("El usuario ya existe. Por favor, inicia sesión.");
    return; 
  } else {
    const password = obtenerEntradaUsuario("Ingrese una contraseña:");
    if (!password) {
      mostrarAlerta("Contraseña no válida. Intente nuevamente.");
      return;
    }

    usuarios.push({ username, password });
    mostrarAlerta("Registro exitoso.");
  }
};

const start = () => {
  const action = obtenerEntradaUsuario("Ingrese 'signup' para registrarse:");
  if (action === "signup") {
    signup();
  } else {
    mostrarAlerta("Acción inválida. Por favor, ingrese 'signup' para registrarse.");
    start();
  }
};

start();
// fin de registo de cuenta

// declaraciones del tablero 
let turno = 0;
const tablero = [];
let jugadores = [
  { nombre: 'Jugador Rojo', victorias: 0 },
  { nombre: 'Jugador Azul', victorias: 0 }
];
//funcion arrow
const bPulsado = (e, pos) => {
  turno++;
  const b = e.target;
  const color = turno % 2 ? 'red' : 'blue';
  b.style.backgroundColor = color;
  tablero[pos] = color;
  if (haGanado()) {
    const jugadorGanador = color === 'red' ? jugadores[0] : jugadores[1];
    alert('Felicidades Ganaste ' + color);
    jugadorGanador.victorias++;
    mostrarHistorial();
    reiniciar();
  } else if (turno === 9) {
    alert('¡Empate!');
    reiniciar();
  }
};

const haGanado = () => {
  // Comprobación de líneas horizontales
  for (let i = 0; i <= 6; i += 3) {
    if (tablero[i] && tablero[i] === tablero[i + 1] && tablero[i] === tablero[i + 2]) {
      return true;
    }
  }

  // Comprobación de líneas verticales
  for (let i = 0; i <= 2; i++) {
    if (tablero[i] && tablero[i] === tablero[i + 3] && tablero[i] === tablero[i + 6]) {
      return true;
    }
  }

  // Comprobación de diagonales
  if ((tablero[0] && tablero[0] === tablero[4] && tablero[0] === tablero[8]) ||
      (tablero[2] && tablero[2] === tablero[4] && tablero[2] === tablero[6])) {
    return true;
  }

  return false;
};
//bucle
const mostrarHistorial = () => {
  const historialContainer = document.getElementById('historial-container');
  historialContainer.innerHTML = '';
  jugadores.forEach(jugador => {
    const div = document.createElement('div');
    div.textContent = `${jugador.nombre}: ${jugador.victorias} victorias`;
    historialContainer.appendChild(div);
  });
};

const reiniciar = () => {
  turno = 0;
  tablero.length = 0;
  document.querySelectorAll('button').forEach(b => b.style.backgroundColor = '');
};

document.querySelectorAll('button').forEach((obj, i) => obj.addEventListener('click', (e) => bPulsado(e, i)));

mostrarHistorial();
//fin de momento


