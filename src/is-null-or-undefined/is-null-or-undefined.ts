export function isNullOrUndefined(x: any): x is (undefined | null) {
  if (x === undefined) return true;

  if (x === null) return true;

  return false;
}
