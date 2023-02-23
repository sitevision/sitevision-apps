/**
 * Enumeration of different ways to resolve dates and times.
 *  <p>
 *  Parsing a text string occurs in two phases.
 *  Phase 1 is a basic text parse according to the fields added to the builder.
 *  Phase 2 resolves the parsed field-value pairs into date and/or time objects.
 *  This style is used to control how phase 2, resolving, happens.
 * @implSpec This is an immutable and thread-safe enum.
 * @since 1.8
 */
export type ResolverStyle = {
  STRICT: "STRICT";
  SMART: "SMART";
  LENIENT: "LENIENT";
};
