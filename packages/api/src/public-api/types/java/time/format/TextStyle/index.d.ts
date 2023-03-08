/**
 * Enumeration of the style of text formatting and parsing.
 *  <p>
 *  Text styles define three sizes for the formatted text - 'full', 'short' and 'narrow'.
 *  Each of these three sizes is available in both 'standard' and 'stand-alone' variations.
 *  <p>
 *  The difference between the three sizes is obvious in most languages.
 *  For example, in English the 'full' month is 'January', the 'short' month is 'Jan'
 *  and the 'narrow' month is 'J'. Note that the narrow size is often not unique.
 *  For example, 'January', 'June' and 'July' all have the 'narrow' text 'J'.
 *  <p>
 *  The difference between the 'standard' and 'stand-alone' forms is trickier to describe
 *  as there is no difference in English. However, in other languages there is a difference
 *  in the word used when the text is used alone, as opposed to in a complete date.
 *  For example, the word used for a month when used alone in a date picker is different
 *  to the word used for month in association with a day and year in a date.
 * @implSpec This is immutable and thread-safe enum.
 */
export type TextStyle = {
  FULL: "FULL";
  FULL_STANDALONE: "FULL_STANDALONE";
  SHORT: "SHORT";
  SHORT_STANDALONE: "SHORT_STANDALONE";
  NARROW: "NARROW";
  NARROW_STANDALONE: "NARROW_STANDALONE";
};
