import type { String } from "../../../../../java/lang/String";

/**
 * Message digester that performs hash computation using a specific algorithm.
 *
 *  <p>
 *     Message digests are secure one-way hash functions that take arbitrary-sized
 *     data and output a fixed-length hash value.
 *
 *     Implementations of this interface is typically backed by a <code>java.security.MessageDigest</code>
 *     instance for given algorithm.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface for a specific algorithm can be obtained
 *     via {@link senselogic.sitevision.api.security.MessageDigesterFactory}.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 5.0.1
 * @see MessageDigesterFactory
 */
export type MessageDigester = {
  /**
   * Updates the digest with a byte.
   * @param aByte the byte.
   */
  updateByte(aByte: unknown): void;

  /**
   * Updates the digest with an array of bytes.
   * @param aBytes the array of bytes.
   */
  updateBytes(aBytes: unknown[]): void;

  /**
   * Executes the hash computation.
   *
   *  The digest is reset after this call is made.
   * @return the array of bytes for the resulting hash value.
   */
  digest(): unknown;

  /**
   * Returns a string that identifies the algorithm.
   * @return the hash algorithm
   */
  getAlgorithm(): string;
};
