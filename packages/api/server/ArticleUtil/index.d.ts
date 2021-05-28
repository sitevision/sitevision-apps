interface ArticleUtil {
  PROPERTY_CREATED_BY: string;
  PROPERTY_CREATION_DATE: string;
  PROPERTY_LAST_MODIFIED_BY: string;
  PROPERTY_LAST_MODIFIED_DATE: string;
  PROPERTY_LAST_PUBLISH_DATE: string;
  PROPERTY_LAST_PUBLISHED_BY: string;
  PROPERTY_LOCALE: string;
  PROPERTY_PUBLISH_DATE: string;
  PROPERTY_PUBLISHED_BY: string;
  PROPERTY_ROBOTS_INDEX: string;
  PROPERTY_SHORTID: string;
  PROPERTY_VISIBLE_IN_MENUS: string;

  createArticle(aParent: Node, aTemplate: Node, aName: string): Node;

  createArticle(
    aParent: Node,
    aTemplate: Node,
    aName: string,
    properties: Map<String, any>,
    content: Map<String, String>
  ): Node;

  renameArticle(anArticle: Node, aName: string): void;
  updateArticle(anArticle: Node, aProperties: Map<String, any>): void;
}

export default ArticleUtil;
