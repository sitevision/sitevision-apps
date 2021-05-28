import Binary from '../../builtins/Binary';
import Calendar from '../../builtins/Calendar';
import Node from '../../builtins/Node';

interface PropertyUtil {
  getBinary(aNode: Node, aPropertyName: string): Binary;
  getBinary(aNode: Node, aPropertyName: string, aDefaultValue: Binary): Binary;

  getBoolean(aNode: Node, aPropertyName: string): boolean;
  getBoolean(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: boolean
  ): boolean;

  getCalendar(aNode: Node, aPropertyName: string): Calendar;
  getCalendar(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: Calendar
  ): Calendar;

  getDouble(aNode: Node, aPropertyName: string): number;
  getDouble(aNode: Node, aPropertyName: string, aDefaultValue: number): number;

  getEnabledNode(
    aNode: Node,
    aEnablingPropertyName: string,
    aNodePropertyName: string
  ): Node;
  getEnabledNode(
    aNode: Node,
    aEnablingPropertyName: string,
    aNodePropertyName: string,
    aDefaultValue: Node
  ): Node;

  getEnabledString(
    aNode: Node,
    aEnablingPropertyName: string,
    aStringPropertyName: string
  ): Node;
  getEnabledString(
    aNode: Node,
    aEnablingPropertyName: string,
    aStringPropertyName: string,
    aDefaultValue: Node
  ): Node;

  getEnabledStringEscaped(
    aNode: Node,
    aEnablingPropertyName: string,
    aStringPropertyName: string
  ): Node;
  getEnabledStringEscaped(
    aNode: Node,
    aEnablingPropertyName: string,
    aStringPropertyName: string,
    aDefaultValue: Node
  ): Node;

  getInt(aNode: Node, aPropertyName: string): number;
  getInt(aNode: Node, aPropertyName: string, aDefaultValue: number): number;

  getNestedBinary(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): Binary;
  getNestedBinary(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: Binary
  ): Binary;

  getNestedBoolean(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): boolean;
  getNestedBoolean(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: boolean
  ): boolean;

  getNestedCalendar(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): Calendar;
  getNestedCalendar(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: Calendar
  ): Calendar;

  getNestedDouble(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): number;
  getNestedDouble(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: number
  ): number;

  getNestedInt(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): number;
  getNestedInt(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: number
  ): number;

  getNestedNode(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): Node;
  getNestedNode(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: Node
  ): Node;

  getNestedString(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): string;
  getNestedString(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: string
  ): string;

  getNestedStringEscaped(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): string;
  getNestedStringEscaped(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: string
  ): string;

  getNestedStrings(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): List<string>;
  getNestedStrings(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: List<string>
  ): List<string>;

  getNestedStringsEscaped(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): List<string>;
  getNestedStringsEscaped(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: List<string>
  ): List<string>;

  getNode(aNode: Node, aPropertyName: string): Node;
  getNode(aNode: Node, aPropertyName: string, aDefaultValue: Node): Node;

  getString(aNode: Node, aPropertyName: string): string;
  getString(aNode: Node, aPropertyName: string, aDefaultValue: string): string;

  getStringEscaped(aNode: Node, aPropertyName: string): string;
  getStringEscaped(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: string
  ): string;

  getStrings(aNode: Node, aPropertyName: string): List<string>;
  getStrings(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: string
  ): List<string>;

  getStringsEscaped(aNode: Node, aPropertyName: string): List<string>;
  getStringsEscaped(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: string
  ): List<string>;
}

export default PropertyUtil;
