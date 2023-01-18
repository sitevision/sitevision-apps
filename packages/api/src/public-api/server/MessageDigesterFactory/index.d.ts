import type MessageDigester from "../../types/senselogic/sitevision/api/security/MessageDigester";

/**
 * Factory that provides message digester instances that can perform
 * hash computation using a specific algorithm.
 *
 * <p>
 *    Message digests are secure one-way hash functions that take arbitrary-sized
 *    data and output a fixed-length hash value. This factory provides instances
 *    that supports common message digest algorithms, such as MD5 and SHA-256.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getMessageDigesterFactory()}. See {@link senselogic.sitevision.api.Utils}
 *    for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 5.0.1
 */
export interface MessageDigesterFactory {
  /**
   * Gets an instanceof a message digester that performs hash computation using the MD5 algorithm.
   * @return a MD5 message digester
   */
  getMD5(): MessageDigester;

  /**
   * Gets an instanceof a message digester that performs hash computation using the SHA-1 algorithm.
   * @return a SHA-1 message digester
   */
  getSHA1(): MessageDigester;

  /**
   * Gets an instanceof a message digester that performs hash computation using the SHA-256 algorithm.
   * @return a SHA-256 message digester
   */
  getSHA256(): MessageDigester;

  /**
   * Gets an instanceof a message digester that performs hash computation using the SHA-512 algorithm.
   * @return a SHA-512 message digester
   */
  getSHA512(): MessageDigester;
}

declare namespace MessageDigesterFactory {}

declare var messageDigesterFactory: MessageDigesterFactory;

export = messageDigesterFactory;
