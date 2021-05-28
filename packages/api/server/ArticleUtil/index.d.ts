declare namespace articleUtil {
  const PROPERTY_CREATED_BY: string;
  const PROPERTY_CREATION_DATE: string;
  const PROPERTY_LAST_MODIFIED_BY: string;
  const PROPERTY_LAST_MODIFIED_DATE: string;
  const PROPERTY_LAST_PUBLISH_DATE: string;
  const PROPERTY_LAST_PUBLISHED_BY: string;
  const PROPERTY_LOCALE: string;
  const PROPERTY_PUBLISH_DATE: string;
  const PROPERTY_PUBLISHED_BY: string;
  const PROPERTY_ROBOTS_INDEX: string;
  const PROPERTY_SHORTID: string;
  const PROPERTY_VISIBLE_IN_MENUS: string;

  function createArticle(aParent: Node, aTemplate: Node, aName: string): Node;

  function createArticle(
    aParent: Node,
    aTemplate: Node,
    aName: string,
    properties: Map<String, any>,
    content: Map<String, String>
  ): Node;

  function renameArticle(anArticle: Node, aName: string): void;
  function updateArticle(anArticle: Node, aProperties: Map<String, any>): void;
}

export default articleUtil;
