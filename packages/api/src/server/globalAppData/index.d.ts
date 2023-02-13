import type { Node } from '../../types/javax/jcr/Node';

export interface GlobalAppData {
  get(key: string): unknown;
  getNode(key: string): Node;
  getArray(key: string): Node[];
}

declare namespace GlobalAppData {}

declare var globalAppData: GlobalAppData;

export default globalAppData;
