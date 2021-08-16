import Node from '../../builtins/Node';

export interface SystemUserUtil {
  /**
   * Checks if current user is anonymous (not authenticated).
   * @returns {boolean} true if current user is Anonymous (i.e. not authenticated), false otherwise 
   */
  isAnonymous(): boolean;

  /**
   * Checks if a user node is anonymous (not authenticated).
   * @returns {boolean} true if aUserNode is anonymous (i.e. not authenticated), false otherwise (i.e. no match or aUserNode is null) 
   * @param {Node} aUserNode - a user node
   */
  isAnonymous(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision Extractor.
   * @returns {boolean} true if current user is the Sitevision Extractor, false otherwise 
   */
  isExtractor(): boolean;

  /**
   * Checks if a user node is the Sitevision Extractor.
   * @returns {boolean} true if aUserNode is the Sitevision Extractor, false otherwise (i.e. no match or aUserNode is null) 
   * @param {Node} aUserNode - a user node
   */
  isExtractor(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision Indexer.
   * @returns {boolean} true if current user is the Sitevision Indexer, false otherwise 
   */
  isIndexer(): boolean;

  /**
   * Checks if a user node is the Sitevision Indexer.
   * @returns {boolean} true if aUserNode is the Sitevision Indexer, false otherwise (i.e. no match or aUserNode is null) 
   * @param {Node} aUserNode - a user node
   */
  isIndexer(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision System user.
   * @returns {boolean} true if current user is the Sitevision System user, false otherwise 
   */
  isSystem(): boolean;

  /**
   * Checks if a user node is the Sitevision System user.
   * @returns {boolean} true if aUserNode is the Sitevision System user, false otherwise (i.e. no match or aUserNode is null) 
   * @param {Node} aUserNode - a user node
   */
  isSystem(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision Validator.
   * @returns {boolean} true if current user is the Sitevision Validator, false otherwise 
   */
  isValidator(): boolean;

  /**
   * Checks if a user node is the Sitevision Validator.
   * @returns {boolean} true if aUserNode is the Sitevision Validator, false otherwise (i.e. no match or aUserNode is null) 
   * @param {Node} aUserNode - a user node
   */
  isValidator(aUserNode: Node): boolean;
}

/**
 * Checks if current user is anonymous (not authenticated).
 * @returns {boolean} true if current user is Anonymous (i.e. not authenticated), false otherwise 
 */
export function isAnonymous(): boolean;

/**
 * Checks if a user node is anonymous (not authenticated).
 * @returns {boolean} true if aUserNode is anonymous (i.e. not authenticated), false otherwise (i.e. no match or aUserNode is null) 
 * @param {Node} aUserNode - a user node
 */
export function isAnonymous(aUserNode: Node): boolean;

/**
 * Checks if current user is the Sitevision Extractor.
 * @returns {boolean} true if current user is the Sitevision Extractor, false otherwise 
 */
export function isExtractor(): boolean;

/**
 * Checks if a user node is the Sitevision Extractor.
 * @returns {boolean} true if aUserNode is the Sitevision Extractor, false otherwise (i.e. no match or aUserNode is null) 
 * @param {Node} aUserNode - a user node
 */
export function isExtractor(aUserNode: Node): boolean;

/**
 * Checks if current user is the Sitevision Indexer.
 * @returns {boolean} true if current user is the Sitevision Indexer, false otherwise 
 */
export function isIndexer(): boolean;

/**
 * Checks if a user node is the Sitevision Indexer.
 * @returns {boolean} true if aUserNode is the Sitevision Indexer, false otherwise (i.e. no match or aUserNode is null) 
 * @param {Node} aUserNode - a user node
 */
export function isIndexer(aUserNode: Node): boolean;

/**
 * Checks if current user is the Sitevision System user.
 * @returns {boolean} true if current user is the Sitevision System user, false otherwise 
 */
export function isSystem(): boolean;

/**
 * Checks if a user node is the Sitevision System user.
 * @returns {boolean} true if aUserNode is the Sitevision System user, false otherwise (i.e. no match or aUserNode is null) 
 * @param {Node} aUserNode - a user node
 */
export function isSystem(aUserNode: Node): boolean;

/**
 * Checks if current user is the Sitevision Validator.
 * @returns {boolean} true if current user is the Sitevision Validator, false otherwise 
 */
export function isValidator(): boolean;

/**
 * Checks if a user node is the Sitevision Validator.
 * @returns {boolean} true if aUserNode is the Sitevision Validator, false otherwise (i.e. no match or aUserNode is null) 
 * @param {Node} aUserNode - a user node
 */
export function isValidator(aUserNode: Node): boolean;

declare namespace systemUserUtil {
  export { isAnonymous, isExtractor, isIndexer, isSystem, isValidator };
}

export default systemUserUtil;
