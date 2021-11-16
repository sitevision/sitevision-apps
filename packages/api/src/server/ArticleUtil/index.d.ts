/** Name of the property specifying the creator of an article. */
export const PROPERTY_CREATED_BY: string;
/** Name of the property specifying the creation date of an article. */
export const PROPERTY_CREATION_DATE: string;
/** Name of the property specifying the last modifier of an article. */
export const PROPERTY_LAST_MODIFIED_BY: string;
/** Name of the property specifying the last modified date of an article. */
export const PROPERTY_LAST_MODIFIED_DATE: string;
/** Name of the property specifying the last published date of an article. */
export const PROPERTY_LAST_PUBLISH_DATE: string;
/** Name of the property specifying the last publisher of an article. */
export const PROPERTY_LAST_PUBLISHED_BY: string;
/** Name of the property specifying the locale used by an article. */
export const PROPERTY_LOCALE: string;
/** Name of the property specifying the published date of an article. */
export const PROPERTY_PUBLISH_DATE: string;
/** Name of the property specifying the publisher of an article. */
export const PROPERTY_PUBLISHED_BY: string;
/** Name of the property specifying if an article is indexable. */
export const PROPERTY_ROBOTS_INDEX: string;
/** Name of the property specifying the short id of an article. */
export const PROPERTY_SHORTID: string;
/** Name of the property specifying if an article is visible in menus. */
export const PROPERTY_VISIBLE_IN_MENUS: string;

/**
 * Creates an article as sub node to a specified parent.
 * @returns {Node} a sv:article node corresponding to the newly created article. Will never return null
 * @param {Node} aParent - the parent node of the article. May not be null
 * @param {Node} aTemplate - the template used for the article. May not be null
 * @param {string} aName - the name of the sv:article. May not be null
 */
export function createArticle(
  aParent: Node,
  aTemplate: Node,
  aName: string
): Node;

/**
 * Creates an article with properties and web content.
 * @returns {Node} a sv:article node corresponding to the newly created article. Will never return null
 * @param {Node} aParent - the parent node of the article. May not be null
 * @param {Node} aTemplate - the sv:template node to be used for the article. May not be null
 * @param {string} aName - the name of the sv:article. May not be null
 * @param {Map<string, any>} properties - the article properties. May be null
 * @param {Map<string, string>} content - a map containing the HTML content. The keys must correspond to layout names on the node. May be null
 */
export function createArticle(
  aParent: Node,
  aTemplate: Node,
  aName: string,
  properties: Map<string, any>,
  content: Map<string, string>
): Node;

/**
 * Alters the name of an article.
 * @param {Node} anArticle - the article that should be renamed. May not be null
 * @param {string} aName - the new name of the article. May not be null
 */
export function renameArticle(anArticle: Node, aName: string): void;

/**
 * Updates the properties of an article.
 * @param {Node} anArticle - the sv:article that will be altered. May not be null
 * @param {Map<string, any>} properties - the article properties. May not be null
 */
export function updateArticle(
  anArticle: Node,
  properties: Map<string, any>
): void;

declare namespace articleUtil {
  export {
    PROPERTY_CREATED_BY,
    PROPERTY_CREATION_DATE,
    PROPERTY_LAST_MODIFIED_BY,
    PROPERTY_LAST_MODIFIED_DATE,
    PROPERTY_LAST_PUBLISH_DATE,
    PROPERTY_LAST_PUBLISHED_BY,
    PROPERTY_LOCALE,
    PROPERTY_PUBLISH_DATE,
    PROPERTY_PUBLISHED_BY,
    PROPERTY_ROBOTS_INDEX,
    PROPERTY_SHORTID,
    PROPERTY_VISIBLE_IN_MENUS,
    createArticle,
    createArticle,
    renameArticle,
    updateArticle,
  };
}

export default articleUtil;
