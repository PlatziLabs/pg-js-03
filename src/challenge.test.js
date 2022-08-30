import { runCode } from './solution';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

it("should return 'Hello world!' before 3s", async() => {
  const rta = await runCode();
  expect(rta).toBe("Hello Word!");
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});
