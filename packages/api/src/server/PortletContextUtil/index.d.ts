import Locale from '../../builtins/Locale';
import Node from '../../builtins/Node';

declare namespace portletContextUtil {
  function getCurrentDecoratedNode(): Node;
  function getCurrentLocale(): Locale;
  function getCurrentModuleElement(): Node;
  function getCurrentPage(): Node;
  function getCurrentPortlet(): Node;
  function getCurrentUser(): Node;
  function getCurrentUserIdentity(): Node;
  function getPortletNamespace(): string;
}

export default portletContextUtil;
