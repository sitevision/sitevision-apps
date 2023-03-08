import type { RuntimeException } from "../../../../../../java/lang/RuntimeException";

/**
 * A runtime exception that can occur when rendering a Velocity template.
 * @author Magnus Lövgren
 * @see VelocityRenderer#render(VelocityContext, String)
 * @since Sitevision 3.0
 */
export type VelocityException = RuntimeException & {};
