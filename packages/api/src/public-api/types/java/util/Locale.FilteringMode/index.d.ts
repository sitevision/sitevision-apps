/**
 * This enum provides constants to select a filtering mode for locale
 *  matching. Refer to <a href="http://tools.ietf.org/html/rfc4647">RFC 4647
 *  Matching of Language Tags</a> for details.
 *
 *  <p>As an example, think of two Language Priority Lists each of which
 *  includes only one language range and a set of following language tags:
 *
 *  <pre>
 *     de (German)
 *     de-DE (German, Germany)
 *     de-Deva (German, in Devanagari script)
 *     de-Deva-DE (German, in Devanagari script, Germany)
 *     de-DE-1996 (German, Germany, orthography of 1996)
 *     de-Latn-DE (German, in Latin script, Germany)
 *     de-Latn-DE-1996 (German, in Latin script, Germany, orthography of 1996)
 *  </pre>
 *
 *  The filtering method will behave as follows:
 *
 *  <table cellpadding=2 summary="Filtering method behavior">
 *  <tr>
 *  <th>Filtering Mode</th>
 *  <th>Language Priority List: {@code "de-DE"}</th>
 *  <th>Language Priority List: {@code "de-*-DE"}</th>
 *  </tr>
 *  <tr>
 *  <td valign=top>
 *  {@link FilteringMode#AUTOSELECT_FILTERING AUTOSELECT_FILTERING}
 *  </td>
 *  <td valign=top>
 *  Performs <em>basic</em> filtering and returns {@code "de-DE"} and
 *  {@code "de-DE-1996"}.
 *  </td>
 *  <td valign=top>
 *  Performs <em>extended</em> filtering and returns {@code "de-DE"},
 *  {@code "de-Deva-DE"}, {@code "de-DE-1996"}, {@code "de-Latn-DE"}, and
 *  {@code "de-Latn-DE-1996"}.
 *  </td>
 *  </tr>
 *  <tr>
 *  <td valign=top>
 *  {@link FilteringMode#EXTENDED_FILTERING EXTENDED_FILTERING}
 *  </td>
 *  <td valign=top>
 *  Performs <em>extended</em> filtering and returns {@code "de-DE"},
 *  {@code "de-Deva-DE"}, {@code "de-DE-1996"}, {@code "de-Latn-DE"}, and
 *  {@code "de-Latn-DE-1996"}.
 *  </td>
 *  <td valign=top>Same as above.</td>
 *  </tr>
 *  <tr>
 *  <td valign=top>
 *  {@link FilteringMode#IGNORE_EXTENDED_RANGES IGNORE_EXTENDED_RANGES}
 *  </td>
 *  <td valign=top>
 *  Performs <em>basic</em> filtering and returns {@code "de-DE"} and
 *  {@code "de-DE-1996"}.
 *  </td>
 *  <td valign=top>
 *  Performs <em>basic</em> filtering and returns {@code null} because
 *  nothing matches.
 *  </td>
 *  </tr>
 *  <tr>
 *  <td valign=top>
 *  {@link FilteringMode#MAP_EXTENDED_RANGES MAP_EXTENDED_RANGES}
 *  </td>
 *  <td valign=top>Same as above.</td>
 *  <td valign=top>
 *  Performs <em>basic</em> filtering and returns {@code "de-DE"} and
 *  {@code "de-DE-1996"} because {@code "de-*-DE"} is mapped to
 *  {@code "de-DE"}.
 *  </td>
 *  </tr>
 *  <tr>
 *  <td valign=top>
 *  {@link FilteringMode#REJECT_EXTENDED_RANGES REJECT_EXTENDED_RANGES}
 *  </td>
 *  <td valign=top>Same as above.</td>
 *  <td valign=top>
 *  Throws {@link IllegalArgumentException} because {@code "de-*-DE"} is
 *  not a valid basic language range.
 *  </td>
 *  </tr>
 *  </table>
 * @see #filter(List, Collection, FilteringMode)
 * @see #filterTags(List, Collection, FilteringMode)
 * @since 1.8
 */
export type FilteringMode = {
  AUTOSELECT_FILTERING: "AUTOSELECT_FILTERING";
  EXTENDED_FILTERING: "EXTENDED_FILTERING";
  IGNORE_EXTENDED_RANGES: "IGNORE_EXTENDED_RANGES";
  MAP_EXTENDED_RANGES: "MAP_EXTENDED_RANGES";
  REJECT_EXTENDED_RANGES: "REJECT_EXTENDED_RANGES";
};
