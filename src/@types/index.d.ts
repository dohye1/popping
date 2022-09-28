export {};

declare global {
  type CallbackFn<T> = T extends (...args: infer A) => infer R
    ? (...args: A) => R
    : R;

  type Position = {
    x: number;
    y: number;
  };
}
