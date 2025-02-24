import { renderHook, act } from "@testing-library/react";
import useLocalStorage from "../hooks/useLocalStorage";

test("useLocalStorage stores and retrieves value", () => {
  const { result } = renderHook(() => useLocalStorage("testKey", "initialValue"));

  expect(result.current[0]).toBe("initialValue");

  act(() => {
    result.current[1]("newValue");
  });

  expect(result.current[0]).toBe("newValue");
});