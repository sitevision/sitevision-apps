export const PROPERTY_CREATED_BY: string;
export const PROPERTY_CREATION_DATE: string;
export const PROPERTY_LAST_MODIFIED_BY: string;
export const PROPERTY_LAST_MODIFIED_DATE: string;
export const PROPERTY_LAST_PUBLISH_DATE: string;
export const PROPERTY_LAST_PUBLISHED_BY: string;
export const PROPERTY_LOCALE: string;
export const PROPERTY_PUBLISH_DATE: string;
export const PROPERTY_PUBLISHED_BY: string;
export const PROPERTY_ROBOTS_INDEX: string;
export const PROPERTY_SHORTID: string;
export const PROPERTY_VISIBLE_IN_MENUS: string;

export function createArticle(
  aParent: Node,
  aTemplate: Node,
  aName: string
): Node;

export function createArticle(
  aParent: Node,
  aTemplate: Node,
  aName: string,
  properties: Map<String, any>,
  content: Map<String, String>
): Node;

export function renameArticle(anArticle: Node, aName: string): void;
export function updateArticle(
  anArticle: Node,
  aProperties: Map<String, any>
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
