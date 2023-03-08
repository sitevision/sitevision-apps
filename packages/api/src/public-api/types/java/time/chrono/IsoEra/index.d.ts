/**
 * An era in the ISO calendar system.
 *  <p>
 *  The ISO-8601 standard does not define eras.
 *  A definition has therefore been created with two eras - 'Current era' (CE) for
 *  years on or after 0001-01-01 (ISO), and 'Before current era' (BCE) for years before that.
 *
 *  <table summary="ISO years and eras" cellpadding="2" cellspacing="3" border="0" >
 *  <thead>
 *  <tr class="tableSubHeadingColor">
 *  <th class="colFirst" align="left">year-of-era</th>
 *  <th class="colFirst" align="left">era</th>
 *  <th class="colLast" align="left">proleptic-year</th>
 *  </tr>
 *  </thead>
 *  <tbody>
 *  <tr class="rowColor">
 *  <td>2</td><td>CE</td><td>2</td>
 *  </tr>
 *  <tr class="altColor">
 *  <td>1</td><td>CE</td><td>1</td>
 *  </tr>
 *  <tr class="rowColor">
 *  <td>1</td><td>BCE</td><td>0</td>
 *  </tr>
 *  <tr class="altColor">
 *  <td>2</td><td>BCE</td><td>-1</td>
 *  </tr>
 *  </tbody>
 *  </table>
 *  <p>
 *  <b>Do not use {@code ordinal()} to obtain the numeric representation of {@code IsoEra}.
 *  Use {@code getValue()} instead.</b>
 * @implSpec This is an immutable and thread-safe enum.
 * @since 1.8
 */
export type IsoEra = {
  BCE: "BCE";
  CE: "CE";
};
