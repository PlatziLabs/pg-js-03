import { runCode } from "./public/solution";

describe('tests', () => {

  it("should return 3 elements", async () => {
    const rta = await runCode();
    expect(rta.length).toBe(3);
    expect(rta[0]).toBe('Task 1');
    expect(rta[1]).toBe('Task 2');
    expect(rta[2]).toBe('Task 3');
  });

  it("should return call setTimeout 3 times", async () => {
    const spy = jest.spyOn(global, "setTimeout");
    const rta = await runCode();
    expect(rta.length).toBe(3);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});
