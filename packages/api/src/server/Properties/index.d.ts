import List from '../../builtins/List';

export function get(
  aJcrNodeResolvable: any,
  ...aPropertyNames: string[]
): object;

export function getEscaped(
  aJcrNodeResolvable: any,
  ...aPropertyNames: string[]
): object;

export function getArray(
  aJcrNodeResolvable: any[],
  ...aPropertyNames: string[]
): List<object>;

export function getArrayEscaped(
  aJcrNodeResolvable: any[],
  ...aPropertyNames: string[]
): List<object>;

declare namespace properties {
  export { get, getEscaped, getArray, getArrayEscaped };
}

export default properties;
