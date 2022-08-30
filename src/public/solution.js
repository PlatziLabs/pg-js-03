import { doTask1, doTask2, doTask3 } from './tasks';

export async function runCode() {
  const rta = [];
  rta.push(await doTask1());
  rta.push(await doTask2());
  rta.push(await doTask3());
  return rta;
}
