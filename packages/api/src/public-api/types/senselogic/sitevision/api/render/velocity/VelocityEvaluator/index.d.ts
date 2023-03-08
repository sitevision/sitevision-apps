import type { String } from "../../../../../../java/lang/String";

/**
 * Utility class for parsing of Velocity Code.
 *
 *  <p>
 *     An instance of this interface can never be directly created and all instances are heavily bound to the Velocity
 *     context they were created for.
 *  </p>
 * @author Magnus Lövgren
 * @see VelocityRenderer
 * @since Sitevision 2.7_06
 * @since Sitevision 3.0
 */
export type VelocityEvaluator = {
  /**
   * Renders a template that is parsed/evaluated by Velocity.
   *
   *  <p>
   *     <strong>Note!</strong> This method is intended for usage from within Velocity only
   *     (e.g. <code>$aVelocityEvaluatorInstance.evaluate($aTemplateString)</code>),
   *     see {@link VelocityRenderer} for an example.
   *  </p>
   *
   *  <p>
   *     <em>
   *        <strong>Tip when evaluating velocity files in a custom portlet!</strong>
   *        The path to your portlet's velocity file(-s) are class loader dependant and therefore likely to have
   *        it's root from the "classes" folder of your war. An example, your portlet war looks like this:
   *     </em>
   *  </p>
   *  <pre><em>
   *     [META-INF]
   *       |- context.xml
   *     [WEB-INF]
   *       |- portlet.xml
   *       |- web.xml
   *       |- [classes]
   *       |      |- [com]
   *       |           |- [mycompany]
   *       |                  |- [myportlet]
   *       |                        |- MyPortlet.class
   *       |- [resources]
   *              |- myvelocityfile.vm
   *  </em></pre>
   *  <p>
   *     <em>
   *        If you want to use a VelocityEvaluator to evaluate the <code>myvelocityfile.vm</code> in the <code>MyPortlet.class</code>,
   *        your velocity file path would likely be <code>"../resources/myvelocityfile.vm"</code>.
   *     </em>
   *  </p>
   * @param aTemplate a String containing the Velocity code to be parsed or a path to a velocity template file&#xA; (suffix must be ".vm" and path must not contain any space character)
   */
  evaluate(aTemplate: String | string): void;
};
