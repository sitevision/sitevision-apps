import type { Node } from '../../types/javax/jcr/Node';

export interface AppData {
  get(...key: string[]): unknown;
  getNode(key: string): Node;
  getArray(key: string): Node[];
  getNumber(key: string): number;
}

declare namespace AppData {}

declare var appData: AppData;

export default appData;
