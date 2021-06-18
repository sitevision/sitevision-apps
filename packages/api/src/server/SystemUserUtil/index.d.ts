import Node from '../../builtins/Node';

export function isAnonymous(): boolean;
export function isAnonymous(aUserNode: Node): boolean;
export function isExtractor(): boolean;
export function isExtractor(aUserNode: Node): boolean;
export function isIndexer(): boolean;
export function isIndexer(aUserNode: Node): boolean;
export function isSystem(): boolean;
export function isSystem(aUserNode: Node): boolean;
export function isValidator(): boolean;
export function isValidator(aUserNode: Node): boolean;

declare namespace systemUserUtil {
  export { isAnonymous, isExtractor, isIndexer, isSystem, isValidator };
}

export default systemUserUtil;
