/**
 * Specifies a <i>rounding behavior</i> for numerical operations
 *  capable of discarding precision. Each rounding mode indicates how
 *  the least significant returned digit of a rounded result is to be
 *  calculated.  If fewer digits are returned than the digits needed to
 *  represent the exact numerical result, the discarded digits will be
 *  referred to as the <i>discarded fraction</i> regardless the digits'
 *  contribution to the value of the number.  In other words,
 *  considered as a numerical value, the discarded fraction could have
 *  an absolute value greater than one.
 *
 *  <p>Each rounding mode description includes a table listing how
 *  different two-digit decimal values would round to a one digit
 *  decimal value under the rounding mode in question.  The result
 *  column in the tables could be gotten by creating a
 *  {@code BigDecimal} number with the specified value, forming a
 *  {@link MathContext} object with the proper settings
 *  ({@code precision} set to {@code 1}, and the
 *  {@code roundingMode} set to the rounding mode in question), and
 *  calling {@link BigDecimal#round round} on this number with the
 *  proper {@code MathContext}.  A summary table showing the results
 *  of these rounding operations for all rounding modes appears below.
 *
 * <table border>
 *  <caption><b>Summary of Rounding Operations Under Different Rounding Modes</b></caption>
 *  <tr><th></th><th colspan=8>Result of rounding input to one digit with the given
 *                            rounding mode</th>
 *  <tr valign=top>
 *  <th>Input Number</th>         <th>{@code UP}</th>
 *                                            <th>{@code DOWN}</th>
 *                                                         <th>{@code CEILING}</th>
 *                                                                        <th>{@code FLOOR}</th>
 *                                                                                     <th>{@code HALF_UP}</th>
 *                                                                                                    <th>{@code HALF_DOWN}</th>
 *                                                                                                                     <th>{@code HALF_EVEN}</th>
 *                                                                                                                                      <th>{@code UNNECESSARY}</th>
 *
 *  <tr align=right><td>5.5</td>  <td>6</td>  <td>5</td>    <td>6</td>    <td>5</td>  <td>6</td>      <td>5</td>       <td>6</td>       <td>throw {@code ArithmeticException}</td>
 *  <tr align=right><td>2.5</td>  <td>3</td>  <td>2</td>    <td>3</td>    <td>2</td>  <td>3</td>      <td>2</td>       <td>2</td>       <td>throw {@code ArithmeticException}</td>
 *  <tr align=right><td>1.6</td>  <td>2</td>  <td>1</td>    <td>2</td>    <td>1</td>  <td>2</td>      <td>2</td>       <td>2</td>       <td>throw {@code ArithmeticException}</td>
 *  <tr align=right><td>1.1</td>  <td>2</td>  <td>1</td>    <td>2</td>    <td>1</td>  <td>1</td>      <td>1</td>       <td>1</td>       <td>throw {@code ArithmeticException}</td>
 *  <tr align=right><td>1.0</td>  <td>1</td>  <td>1</td>    <td>1</td>    <td>1</td>  <td>1</td>      <td>1</td>       <td>1</td>       <td>1</td>
 *  <tr align=right><td>-1.0</td> <td>-1</td> <td>-1</td>   <td>-1</td>   <td>-1</td> <td>-1</td>     <td>-1</td>      <td>-1</td>      <td>-1</td>
 *  <tr align=right><td>-1.1</td> <td>-2</td> <td>-1</td>   <td>-1</td>   <td>-2</td> <td>-1</td>     <td>-1</td>      <td>-1</td>      <td>throw {@code ArithmeticException}</td>
 *  <tr align=right><td>-1.6</td> <td>-2</td> <td>-1</td>   <td>-1</td>   <td>-2</td> <td>-2</td>     <td>-2</td>      <td>-2</td>      <td>throw {@code ArithmeticException}</td>
 *  <tr align=right><td>-2.5</td> <td>-3</td> <td>-2</td>   <td>-2</td>   <td>-3</td> <td>-3</td>     <td>-2</td>      <td>-2</td>      <td>throw {@code ArithmeticException}</td>
 *  <tr align=right><td>-5.5</td> <td>-6</td> <td>-5</td>   <td>-5</td>   <td>-6</td> <td>-6</td>     <td>-5</td>      <td>-6</td>      <td>throw {@code ArithmeticException}</td>
 * </table>
 *
 *
 *  <p>This {@code enum} is intended to replace the integer-based
 *  enumeration of rounding mode constants in {@link BigDecimal}
 *  ({@link BigDecimal#ROUND_UP}, {@link BigDecimal#ROUND_DOWN},
 *  etc. ).
 * @see BigDecimal
 * @see MathContext
 * @author Josh Bloch
 * @author Mike Cowlishaw
 * @author Joseph D. Darcy
 * @since 1.5
 */
export type RoundingMode = {
  UP: "UP";
  DOWN: "DOWN";
  CEILING: "CEILING";
  FLOOR: "FLOOR";
  HALF_UP: "HALF_UP";
  HALF_DOWN: "HALF_DOWN";
  HALF_EVEN: "HALF_EVEN";
  UNNECESSARY: "UNNECESSARY";
};
