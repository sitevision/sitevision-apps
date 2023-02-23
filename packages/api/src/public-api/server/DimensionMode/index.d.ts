/**
 * Dimension rendering mode, determines rendering of the <code>width/max-width</code> and <code>height/max-height</code> css properties.
 *
 *  <p>
 *     The <code>max-width</code> and <code>max-height</code> css properties are used when rendering a responsive site.
 *     The <code>width</code> and <code>height</code> css properties are used when rendering a non-responsive site.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 5
 */
declare enum DimensionMode {
  AUTO,
  ON,
  OFF,
}

export default DimensionMode;
