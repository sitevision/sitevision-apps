import Locale from '../../builtins/Locale';
import Node from '../../builtins/Node';

export function getCurrentDecoratedNode(): Node;
export function getCurrentLocale(): Locale;
export function getCurrentModuleElement(): Node;
export function getCurrentPage(): Node;
export function getCurrentPortlet(): Node;
export function getCurrentUser(): Node;
export function getCurrentUserIdentity(): Node;
export function getPortletNamespace(): string;

declare namespace portletContextUtil {
  export {
    getCurrentDecoratedNode,
    getCurrentLocale,
    getCurrentModuleElement,
    getCurrentPage,
    getCurrentPortlet,
    getCurrentUser,
    getCurrentUserIdentity,
    getPortletNamespace,
  };
}

export default portletContextUtil;
