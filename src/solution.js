export function runCode() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 3000);
  });
}
