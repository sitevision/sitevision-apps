import Locale from '../../builtins/Locale';
import Node from '../../builtins/Node';

/**
 * Gets current decorated node (applicable during render of a sv:decorationTemplate).
 * @returns {Node} the decorated node or null if indeterminable (i.e. the caller is not a part of a decoration template that is being rendered right now) 
 */
export function getCurrentDecoratedNode(): Node;

/**
* Gets current Locale.
* @returns {Locale} current Locale, or default Locale if indeterminable 
*/
export function getCurrentLocale(): Locale;

/**
* Gets current module element (module element draft or module element).
* @returns {Node} current module element as Node, or null if indeterminable(i.e. this method is not called from within a module element) 
*/
export function getCurrentModuleElement(): Node;

/**
* Gets current page (i.e. the page node for the currently executing portlet).
* @returns {Node} current page Node, or null if indeterminable (i.e. this method is not called from within a portlet or current portlet is not bound to any page) 
*/
export function getCurrentPage(): Node;

/**
* Gets current portlet.
* @returns {Node} current portlet as Node, or null if indeterminable (i.e. this method is not called from within a portlet) 
*/
export function getCurrentPortlet(): Node;

/**
* Gets current user.
* @returns {Node} current user Node, or null if indeterminable 
*/
export function getCurrentUser(): Node;

/**
* Gets current user identity.
* @returns {Node} current user identity Node, or null if indeterminable 
*/
export function getCurrentUserIdentity(): Node;

/**
* Gets a unique namespace for the specific portlet that is rendering.
* @returns {string} a unique prefixed namespace for current portlet, or aPrefix if indeterminable 
* @param {string} aPrefix - the prefix for the namespace (ensure it only contains chars that are valid in an id value if you use it as such)
*/
export function getPortletNamespace(aPrefix: string): string;

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
