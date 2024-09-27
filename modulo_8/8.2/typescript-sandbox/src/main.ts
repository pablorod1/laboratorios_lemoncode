import "./style.css";

import { Pacientes, pacientes } from "./model";

// Apartado 1 a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

// Apartado 1 b) Queremos extraer la lista de pacientes asignados a Pediatría y
// que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
  return pacientesPediatria.filter((paciente) => paciente.edad < 10);
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

/* Apartado 2 
Queremos activar el protocolo de urgencia si cualquiera de los pacientes tiene
un ritmo cardíaco superior a 100 pulsaciones por minuto
y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como:
*/

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  pacientes.find(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  )
    ? (activarProctolo = true)
    : (activarProctolo = false);

  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

/* Apartado 3  El pediatra no puede atender hoy a los pacientes,
queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
*/

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra")
      paciente.especialidad = "Medico de familia";
  });
  return pacientes;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

/* Apartado 4  Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados),
comprobar si en la lista hay algún paciente asignado a pediatría
*/

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
  return pacientesPediatria.length > 0 ? true : false;
};

console.log(hayPacientesDePediatria(pacientes));

/* Apartado 5 Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia,
y lo que están asignados a Pediatría y a cardiología 
*/
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let numPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  pacientes.map((paciente) => {
    paciente.especialidad === "Pediatra"
      ? numPacientes.pediatria++
      : paciente.especialidad === "Medico de familia"
      ? numPacientes.medicoDeFamilia++
      : numPacientes.cardiologia++;
  });
  return numPacientes;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
