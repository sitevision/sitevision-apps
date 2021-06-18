import Binary from '../../builtins/Binary';
import Calendar from '../../builtins/Calendar';
import List from '../../builtins/List';
import Node from '../../builtins/Node';

export function getBinary(aNode: Node, aPropertyName: string): Binary;
export function getBinary(
  aNode: Node,
  aPropertyName: string,
  aDefaultValue: Binary
): Binary;
export function getBoolean(aNode: Node, aPropertyName: string): boolean;
export function getBoolean(
  aNode: Node,
  aPropertyName: string,
  aDefaultValue: boolean
): boolean;
export function getCalendar(aNode: Node, aPropertyName: string): Calendar;
export function getCalendar(
  aNode: Node,
  aPropertyName: string,
  aDefaultValue: Calendar
): Calendar;
export function getDouble(aNode: Node, aPropertyName: string): number;
export function getDouble(
  aNode: Node,
  aPropertyName: string,
  aDefaultValue: number
): number;
export function getEnabledNode(
  aNode: Node,
  aEnablingPropertyName: string,
  aNodePropertyName: string
): Node;
export function getEnabledNode(
  aNode: Node,
  aEnablingPropertyName: string,
  aNodePropertyName: string,
  aDefaultValue: Node
): Node;
export function getEnabledString(
  aNode: Node,
  aEnablingPropertyName: string,
  aStringPropertyName: string
): Node;
export function getEnabledString(
  aNode: Node,
  aEnablingPropertyName: string,
  aStringPropertyName: string,
  aDefaultValue: Node
): Node;
export function getEnabledStringEscaped(
  aNode: Node,
  aEnablingPropertyName: string,
  aStringPropertyName: string
): Node;
export function getEnabledStringEscaped(
  aNode: Node,
  aEnablingPropertyName: string,
  aStringPropertyName: string,
  aDefaultValue: Node
): Node;
export function getInt(aNode: Node, aPropertyName: string): number;
export function getInt(
  aNode: Node,
  aPropertyName: string,
  aDefaultValue: number
): number;
export function getNestedBinary(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string
): Binary;
export function getNestedBinary(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string,
  aDefaultValue: Binary
): Binary;
export function getNestedBoolean(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string
): boolean;
export function getNestedBoolean(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string,
  aDefaultValue: boolean
): boolean;
export function getNestedCalendar(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string
): Calendar;
export function getNestedCalendar(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string,
  aDefaultValue: Calendar
): Calendar;
export function getNestedDouble(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string
): number;
export function getNestedDouble(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string,
  aDefaultValue: number
): number;
export function getNestedInt(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string
): number;
export function getNestedInt(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string,
  aDefaultValue: number
): number;
export function getNestedNode(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string
): Node;
export function getNestedNode(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string,
  aDefaultValue: Node
): Node;
export function getNestedString(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string
): string;
export function getNestedString(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string,
  aDefaultValue: string
): string;
export function getNestedStringEscaped(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string
): string;
export function getNestedStringEscaped(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string,
  aDefaultValue: string
): string;
export function getNestedStrings(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string
): List<string>;
export function getNestedStrings(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string,
  aDefaultValue: List<string>
): List<string>;
export function getNestedStringsEscaped(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string
): List<string>;
export function getNestedStringsEscaped(
  aNode: Node,
  aNodePropertyName: string,
  aPropertyName: string,
  aDefaultValue: List<string>
): List<string>;
export function getNode(aNode: Node, aPropertyName: string): Node;
export function getNode(
  aNode: Node,
  aPropertyName: string,
  aDefaultValue: Node
): Node;
export function getString(aNode: Node, aPropertyName: string): string;
export function getString(
  aNode: Node,
  aPropertyName: string,
  aDefaultValue: string
): string;
export function getStringEscaped(aNode: Node, aPropertyName: string): string;
export function getStringEscaped(
  aNode: Node,
  aPropertyName: string,
  aDefaultValue: string
): string;
export function getStrings(aNode: Node, aPropertyName: string): List<string>;
export function getStrings(
  aNode: Node,
  aPropertyName: string,
  aDefaultValue: string
): List<string>;
export function getStringsEscaped(
  aNode: Node,
  aPropertyName: string
): List<string>;
export function getStringsEscaped(
  aNode: Node,
  aPropertyName: string,
  aDefaultValue: string
): List<string>;

declare namespace propertyUtil {
  export {
    getBinary,
    getBoolean,
    getCalendar,
    getDouble,
    getEnabledNode,
    getEnabledString,
    getEnabledStringEscaped,
    getInt,
    getNestedBinary,
    getNestedBoolean,
    getNestedCalendar,
    getNestedDouble,
    getNestedInt,
    getNestedNode,
    getNestedString,
    getNestedStringEscaped,
    getNestedStrings,
    getNestedStringsEscaped,
    getNode,
    getString,
    getStringEscaped,
    getStrings,
    getStringsEscaped,
  };
}

export default propertyUtil;
