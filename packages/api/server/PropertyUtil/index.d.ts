import Binary from '../../builtins/Binary';
import Calendar from '../../builtins/Calendar';
import List from '../../builtins/List';
import Node from '../../builtins/Node';

declare namespace propertyUtil {
  function getBinary(aNode: Node, aPropertyName: string): Binary;
  function getBinary(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: Binary
  ): Binary;

  function getBoolean(aNode: Node, aPropertyName: string): boolean;
  function getBoolean(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: boolean
  ): boolean;

  function getCalendar(aNode: Node, aPropertyName: string): Calendar;
  function getCalendar(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: Calendar
  ): Calendar;

  function getDouble(aNode: Node, aPropertyName: string): number;
  function getDouble(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: number
  ): number;

  function getEnabledNode(
    aNode: Node,
    aEnablingPropertyName: string,
    aNodePropertyName: string
  ): Node;
  function getEnabledNode(
    aNode: Node,
    aEnablingPropertyName: string,
    aNodePropertyName: string,
    aDefaultValue: Node
  ): Node;

  function getEnabledString(
    aNode: Node,
    aEnablingPropertyName: string,
    aStringPropertyName: string
  ): Node;
  function getEnabledString(
    aNode: Node,
    aEnablingPropertyName: string,
    aStringPropertyName: string,
    aDefaultValue: Node
  ): Node;

  function getEnabledStringEscaped(
    aNode: Node,
    aEnablingPropertyName: string,
    aStringPropertyName: string
  ): Node;
  function getEnabledStringEscaped(
    aNode: Node,
    aEnablingPropertyName: string,
    aStringPropertyName: string,
    aDefaultValue: Node
  ): Node;

  function getInt(aNode: Node, aPropertyName: string): number;
  function getInt(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: number
  ): number;

  function getNestedBinary(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): Binary;
  function getNestedBinary(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: Binary
  ): Binary;

  function getNestedBoolean(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): boolean;
  function getNestedBoolean(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: boolean
  ): boolean;

  function getNestedCalendar(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): Calendar;
  function getNestedCalendar(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: Calendar
  ): Calendar;

  function getNestedDouble(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): number;
  function getNestedDouble(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: number
  ): number;

  function getNestedInt(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): number;
  function getNestedInt(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: number
  ): number;

  function getNestedNode(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): Node;
  function getNestedNode(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: Node
  ): Node;

  function getNestedString(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): string;
  function getNestedString(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: string
  ): string;

  function getNestedStringEscaped(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): string;
  function getNestedStringEscaped(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: string
  ): string;

  function getNestedStrings(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): List<string>;
  function getNestedStrings(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: List<string>
  ): List<string>;

  function getNestedStringsEscaped(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string
  ): List<string>;
  function getNestedStringsEscaped(
    aNode: Node,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: List<string>
  ): List<string>;

  function getNode(aNode: Node, aPropertyName: string): Node;
  function getNode(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: Node
  ): Node;

  function getString(aNode: Node, aPropertyName: string): string;
  function getString(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: string
  ): string;

  function getStringEscaped(aNode: Node, aPropertyName: string): string;
  function getStringEscaped(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: string
  ): string;

  function getStrings(aNode: Node, aPropertyName: string): List<string>;
  function getStrings(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: string
  ): List<string>;

  function getStringsEscaped(aNode: Node, aPropertyName: string): List<string>;
  function getStringsEscaped(
    aNode: Node,
    aPropertyName: string,
    aDefaultValue: string
  ): List<string>;
}

export default propertyUtil;
