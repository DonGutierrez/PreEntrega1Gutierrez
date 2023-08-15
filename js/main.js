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

    jugadorGanador.victorias++;
    mostrarHistorial();
    reiniciar();
  } else if (turno === 9) {
   
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
