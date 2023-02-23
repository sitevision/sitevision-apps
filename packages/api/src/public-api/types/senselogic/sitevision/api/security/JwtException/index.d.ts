import type { RuntimeException } from "../../../../../java/lang/RuntimeException";

/**
 * Runtime exception thrown when creating or validating JWT tokens fails.
 * @see JwtUtil
 * @author Anders Sjöstrand
 * @since Sitevision 5.1
 */
export type JwtException = RuntimeException & {};
