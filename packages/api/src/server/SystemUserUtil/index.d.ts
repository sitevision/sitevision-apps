import Node from '../../builtins/Node';

declare namespace systemUserUtil {
  function isAnonymous(): boolean;
  function isAnonymous(aUserNode: Node): boolean;

  function isExtractor(): boolean;
  function isExtractor(aUserNode: Node): boolean;

  function isIndexer(): boolean;
  function isIndexer(aUserNode: Node): boolean;

  function isSystem(): boolean;
  function isSystem(aUserNode: Node): boolean;

  function isValidator(): boolean;
  function isValidator(aUserNode: Node): boolean;
}

export default systemUserUtil;
