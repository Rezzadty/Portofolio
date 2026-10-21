import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useIntersectionObserver } from "./useIntersectionObserver";

const mockObserve = vi.fn();
const mockUnobserve = vi.fn();

let constructorArgs: IntersectionObserverInit | undefined;
let constructorCount = 0;

beforeEach(() => {
  constructorCount = 0;
  mockObserve.mockClear();
  mockUnobserve.mockClear();

  class MockIntersectionObserver {
    constructor(_cb: IntersectionObserverCallback, options?: IntersectionObserverInit) {
      constructorArgs = options;
      constructorCount++;
    }
    observe = mockObserve;
    unobserve = mockUnobserve;
    disconnect = vi.fn();
  }

  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

describe("useIntersectionObserver", () => {
  it("returns isVisible=false initially", () => {
    const { result } = renderHook(() => useIntersectionObserver());
    expect(result.current.isVisible).toBe(false);
  });

  it("creates observer with default threshold 0.1", () => {
    renderHook(() => useIntersectionObserver());
    expect(constructorArgs).toEqual({
      threshold: 0.1,
      root: null,
      rootMargin: "0px",
    });
  });

  it("does not recreate observer on rerender with same defaults", () => {
    const { rerender } = renderHook(() => useIntersectionObserver());
    rerender();
    rerender();
    expect(constructorCount).toBe(1);
  });
});
