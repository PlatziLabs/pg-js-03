import { runCode } from './public/challenge';

(async () => {
  const rta = await runCode();
  document.getElementById("app").innerHTML = `<p>Rta: ${rta}</p>`;
})();
