export function Debounce(timeout: number) {
  let timeoutRef;

  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args) {
      clearTimeout(timeoutRef);

      timeoutRef = setTimeout(() => {
        original.apply(this, args);
      }, timeout);
    };

    return descriptor;
  };
}
