import "./style.css";

interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
  desayuno: boolean;
}

const reservas: Reserva[] = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
    desayuno: false,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
    desayuno: false,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
    desayuno: true,
  },
];

class TotalesReservas {
  reservas: Reserva[];
  preciosHabitaciones: { [key: string]: number };
  precioPersonaAdicional: number = 40;
  iva: number = 0.21;
  desayuno: number = 15;

  constructor(
    reservas: Reserva[],
    preciosHabitaciones: { [key: string]: number }
  ) {
    this.reservas = reservas;
    this.preciosHabitaciones = preciosHabitaciones;
  }

  calculaSubtotal(): number {
    let subtotal = 0;

    for (const reserva of this.reservas) {
      const precioBase = this.preciosHabitaciones[reserva.tipoHabitacion];
      let precioPorHabitacion = precioBase * reserva.noches;

      if (reserva.pax > 1) {
        precioPorHabitacion +=
          (reserva.pax - 1) * this.precioPersonaAdicional * reserva.noches;
      }

      subtotal += precioPorHabitacion;

      if (reserva.desayuno) {
        subtotal += reserva.pax * reserva.noches * this.desayuno;
      }
    }

    return subtotal;
  }

  calculaTotal(): number {
    const subtotal = this.calculaSubtotal();
    return subtotal * (1 + this.iva);
  }
}

class ClienteParticular extends TotalesReservas {
  constructor(reservas: Reserva[]) {
    const preciosHabitaciones = { standard: 100, suite: 150 };
    super(reservas, preciosHabitaciones);
  }
}

class TourOperador extends TotalesReservas {
  descuento: number = 0.15;

  constructor(reservas: Reserva[]) {
    const preciosHabitaciones = { standard: 100, suite: 100 };
    super(reservas, preciosHabitaciones);
  }

  calculaSubtotal(): number {
    const subtotalSinDescuento = super.calculaSubtotal();
    return subtotalSinDescuento * (1 - this.descuento);
  }
}

// Cliente particular
const clienteParticular = new ClienteParticular(reservas);
console.log(
  `Subtotal Cliente Particular: ${clienteParticular.calculaSubtotal()}€`
);
console.log(`Total Cliente Particular: ${clienteParticular.calculaTotal()}€`);

// Tour operador
const tourOperador = new TourOperador(reservas);
console.log(`Subtotal Tour Operador: ${tourOperador.calculaSubtotal()}€`);
console.log(`Total Tour Operador: ${tourOperador.calculaTotal()}€`);
