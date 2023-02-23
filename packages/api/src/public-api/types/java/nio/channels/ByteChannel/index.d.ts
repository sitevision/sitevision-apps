import type { ReadableByteChannel } from "../ReadableByteChannel";
import type { WritableByteChannel } from "../WritableByteChannel";

/**
 * A channel that can read and write bytes.  This interface simply unifies
 *  {@link ReadableByteChannel} and {@link WritableByteChannel}; it does not
 *  specify any new operations.
 * @author Mark Reinhold
 * @author JSR-51 Expert Group
 * @since 1.4
 */
export type ByteChannel = ReadableByteChannel & WritableByteChannel & {};
