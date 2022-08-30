import { runCode } from "./solution";

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe('tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 'Hello, World!' before 3s", async () => {
    const promise = runCode();

    jest.runAllTimers();
    const rta = await promise;
    expect(rta).toBe("Hello, World!");
  });

  it("should return call setTimeout with 3s", async () => {
    const promise = runCode();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);

    jest.runAllTimers();
    const rta = await promise;
    expect(rta).toBe("Hello, World!");
  });
});
