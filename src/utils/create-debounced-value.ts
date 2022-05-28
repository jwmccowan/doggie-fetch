import { createSignal, Signal } from "solid-js";
import { SignalOptions } from "solid-js/types/reactive/signal";
import createDebounce from "./create-debounce";

export function createDebouncedValue<T>(
  initialValue: T,
  debounceTime = 1000,
  options?: SignalOptions<T>
): [() => T, (value: T) => void] {
  const [value, setValue] = createSignal<T>(initialValue, options);
  const [setDebouncedValue] = createDebounce((newValue: T) => {
    setValue(() => newValue);
  }, debounceTime);
  return [value, setDebouncedValue];
}
