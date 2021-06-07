import List from '../../builtins/List';

declare namespace properties {
  function get(aJcrNodeResolvable: any, ...aPropertyNames: string[]): object;

  function getEscaped(
    aJcrNodeResolvable: any,
    ...aPropertyNames: string[]
  ): object;

  function getArray(
    aJcrNodeResolvable: any[],
    ...aPropertyNames: string[]
  ): List<object>;

  function getArrayEscaped(
    aJcrNodeResolvable: any[],
    ...aPropertyNames: string[]
  ): List<object>;
}

export default properties;
