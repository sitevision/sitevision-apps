import Node from "../../../../../javax/jcr/Node";

/**
 * JSON Web Token (JWT) utilities.
 *
 * <p>
 *    Technical information about JWT:
 * </p>
 * <ul>
 *    <li><a href="https://jwt.io/introduction/">Introduction to JSON Web Tokens</a></li>
 *    <li><a href="https://tools.ietf.org/html/rfc7519" target="_blank">RFC 7519: The JSON Web Token specification</a></li>
 * </ul>
 * @param <O> script object
 * @since Sitevision 5.1
 * @author Anders Sjöstrand
 */

interface JwtUtil {
  /**
   * Create a JWT token with SHA hashing.
   *
   * <p>
   *    When creating a JWT token, Sitevision always adds an IAT (issued at) claim. The IAT date is set to the time of creation.
   *    Custom <em>claims</em> can be of the following types.
   * </p>
   * <ul>
   *    <li>String</li>
   *    <li>Boolean</li>
   *    <li>Integer</li>
   *    <li>Long</li>
   *    <li>Array of String</li>
   *    <li>Array of Long</li>
   * </ul>
   *
   * <p>
   *    JWT tokens signed using a pre-shared key can use an <em>algorithm</em> of the following types:
   * </p>
   * <ul>
   *    <li>HS256</li>
   *    <li>HS384</li>
   *    <li>HS512</li>
   * </ul>
   * @param aClaims The claims to send as payload. Claim values can be of types String, Boolean, Integer, Long and also arrays of Strings or Longs
   * @param aAlgorithm Hashing algorithm used, viable values are HS256, HS384 and HS512
   * @param aPreSharedKey Pre-shared key used for hashing.
   * @return A JWT token
   * @throws JwtException If an error occurs when creating the JWT token
   * @throws IllegalArgumentException If aPreSharedKey or aAlgorithm is blank.
   */
  createSHAToken(
    aClaims: O,
    aAlgorithm: java.lang.String,
    aPreSharedKey: java.lang.String
  ): string;

  /**
   * Create a JWT token signed with a RSA keypair.
   *
   * <p>
   *    When creating a JWT token, Sitevision always adds an IAT (issued at) claim. The IAT date is set to the time of creation.
   *    Custom <em>claims</em> can be of the following types.
   * </p>
   * <ul>
   *    <li>String</li>
   *    <li>Boolean</li>
   *    <li>Integer</li>
   *    <li>Long</li>
   *    <li>Array of String</li>
   *    <li>Array of Long</li>
   * </ul>
   *
   * <p>
   *    JWT tokens signed using a pre-shared key can use an <em>algorithm</em> of the following types:
   * </p>
   * <ul>
   *    <li>RS256</li>
   *    <li>RS384</li>
   *    <li>RS512</li>
   * </ul>
   *
   * <p>
   *     When signing or decoding JWT using RSA keypair, Sitevision only support keys coded in standard PEM text format.
   *     Private keys can use password, but if a key without password is used, an empty string as password must be supplied.
   * </p>
   * @param aClaims The claims to send as payload. Claim values can be of types String, Boolean, Integer, Long and also arrays of Strings or Longs
   * @param aAlgorithm Signing algorithm used, viable values are RS256, RS384 and RS512
   * @param aPrivateKey A sv:file or sv:temporaryFile with the PEM formatted RSA private key.
   * @param aPassword Password for the private key, use an empty string if the key is not password protected.
   * @return A JWT token
   * @throws ConstraintViolationException If the private key cannot be found or accessed
   * @throws JwtException If an error occurs when creating the JWT token
   * @throws IllegalArgumentException If aPassword is null, aAlgorithm is blank, aPrivateKey is null or if aPrivateKey is not a RSA private key.
   */
  createRSAToken(
    aClaims: O,
    aAlgorithm: java.lang.String,
    aPrivateKey: Node,
    aPassword: java.lang.String
  ): string;

  /**
   * Validate a JWT token created with SHA and a pre-shared key.
   *
   * <p>
   *    The algorithm to decode is automatically detected by Sitevision from the token but it must be one of the following types:
   * </p>
   * <ul>
   *    <li>HS256</li>
   *    <li>HS384</li>
   *    <li>HS512</li>
   * </ul>
   * @param aToken Token to validate
   * @param aPreSharedKey Pre-shared key that the hash was created with
   * @return A javascript object with the alg and payload if the token was correctly validated.
   * @throws JwtException If an error occurs the decoding the JWT token
   * @throws IllegalArgumentException If aToken or aPreSharedKey are blank.
   */
  decodeSHA(aToken: java.lang.String, aPreSharedKey: java.lang.String): unknown;

  /**
   * Validate a JWT token created using a RSA keypair.
   *
   * <p>
   *    The algorithm to decode is automatically detected by Sitevision from the token but it must be one of the following types:
   * </p>
   * <ul>
   *    <li>RS256</li>
   *    <li>RS384</li>
   *    <li>RS512</li>
   * </ul>
   *
   * <p>
   *     When signing or decoding JWT using RSA keypair, Sitevision only support keys coded in standard PEM text format.
   * </p>
   * @param aToken Token to validate.
   * @param aPublicKey A sv:file or sv:temporaryFile containing the PEM formatted RSA public key for decrypting the JWT token.
   * @return A javascript object with the alg and payload if the token was correctly validated.
   * @throws ConstraintViolationException If the public key cannot be found or accessed
   * @throws JwtException If an error occurs the decoding the JWT token
   * @throws IllegalArgumentException If aToken is blank, aPublicKey is null or aPublicKey is not a RSA public key
   */
  decodeRSA(aToken: java.lang.String, aPublicKey: Node): unknown;
}
