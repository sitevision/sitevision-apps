interface Properties {
  get(aJcrNodeResolvable: any, ...aPropertyNames: string[]): object;

  getEscaped(aJcrNodeResolvable: any, ...aPropertyNames: string[]): object;

  getArray(
    aJcrNodeResolvable: any[],
    ...aPropertyNames: string[]
  ): List<object>;

  getArrayEscaped(
    aJcrNodeResolvable: any[],
    ...aPropertyNames: string[]
  ): List<object>;
}

export default Properties;
