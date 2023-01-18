import type SearchHit from "../SearchHit";

/**
 * <p>
 * This interface is deprecated and non-functional as of Sitevision 3.0. The Sitevision search engine has been replaced
 * (from Lucene to Solr) and highlighting of arbitrary fields in a search result via <code>SearchHighlighter</code> is no longer possible.
 * In Solr you should specify the field(-s) that should be highlighted when you execute the query.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 2.7_06
 * @deprecated This interface will do absolutely nothing as of Sitevision 3.0 (search engine has been replaced). Interface methods will not do anything (i.e. always return <code>null</code>) and this interface will be completely removed in future releases of Sitevision.
 */
type SearchHighlighter = {
  /**
   * Returns a highlighted fragment for the default highlighting field.
   * @param aHighlightPreElement the opening element to the left of a highlighted word(-s), e.g <code>"&lt;strong style=\"background-color:yellow\"&gt;"</code>
   * @param aHighlightPostElement the closing element to the right of a highlighted word(-s), e.g <code>"&lt;/strong&gt;"</code>
   * @param aSearchHit the search hit that should be highlighted
   * @return a highlighted text fragment with all matches surrounded with <code>aHighlightPreElement</code> and <code>aHighlightPostElement</code>, <code>null</code> if nothing could be highlighted
   * @deprecated As of Sitevision 3.0 this method will always return <code>null</code>. Do <strong>not</strong> use this interface at all, it will be completely removed in future releases of Sitevision.
   */
  getHighlightedFragment(
    aHighlightPreElement: string,
    aHighlightPostElement: string,
    aSearchHit: SearchHit
  ): string;

  /**
   * Returns a highlighted fragment for a specified field.
   * @param aHighlightPreElement the opening element to the left of a highlighted word(-s), e.g <code>"&lt;strong style=\"background-color:yellow\"&gt;"</code>
   * @param aHighlightPostElement the closing element to the right of a highlighted word(-s), e.g <code>"&lt;/strong&gt;"</code>
   * @param aSearchHit the search hit that should be highlighted
   * @param aHighlightingFieldName the field that should be highlighted. A default field will be used if <code>aHighlightingFieldName</code> is <code>null</code>. The field that with most characters will be used if multiple fields match. Binary fields are ignored.
   * @return a highlighted text fragment with all matches surrounded with <code>aHighlightPreElement</code> and <code>aHighlightPostElement</code>, <code>null</code> if nothing could be highlighted
   * @deprecated As of Sitevision 3.0 this method will always return <code>null</code>. Do <strong>not</strong> use this interface at all, it will be completely removed in future releases of Sitevision.
   */
  getHighlightedFragment(
    aHighlightPreElement: string,
    aHighlightPostElement: string,
    aSearchHit: SearchHit,
    aHighlightingFieldName: string
  ): string;
};

export = SearchHighlighter;
