import type { String } from "../../lang/String";

import type { Serializable } from "../../io/Serializable";

/**
 * The Key interface is the top-level interface for all keys. It
 *  defines the functionality shared by all key objects. All keys
 *  have three characteristics:
 *
 *  <UL>
 *
 *  <LI>An Algorithm
 *
 *  <P>This is the key algorithm for that key. The key algorithm is usually
 *  an encryption or asymmetric operation algorithm (such as DSA or
 *  RSA), which will work with those algorithms and with related
 *  algorithms (such as MD5 with RSA, SHA-1 with RSA, Raw DSA, etc.)
 *  The name of the algorithm of a key is obtained using the
 *  {@link #getAlgorithm() getAlgorithm} method.
 *
 *  <LI>An Encoded Form
 *
 *  <P>This is an external encoded form for the key used when a standard
 *  representation of the key is needed outside the Java Virtual Machine,
 *  as when transmitting the key to some other party. The key
 *  is encoded according to a standard format (such as
 *  X.509 {@code SubjectPublicKeyInfo} or PKCS#8), and
 *  is returned using the {@link #getEncoded() getEncoded} method.
 *  Note: The syntax of the ASN.1 type {@code SubjectPublicKeyInfo}
 *  is defined as follows:
 *
 *  <pre>
 *  SubjectPublicKeyInfo ::= SEQUENCE {
 *    algorithm AlgorithmIdentifier,
 *    subjectPublicKey BIT STRING }
 *
 *  AlgorithmIdentifier ::= SEQUENCE {
 *    algorithm OBJECT IDENTIFIER,
 *    parameters ANY DEFINED BY algorithm OPTIONAL }
 *  </pre>
 *
 *  For more information, see
 *  <a href="http://tools.ietf.org/html/rfc5280">RFC 5280:
 *  Internet X.509 Public Key Infrastructure Certificate and CRL Profile</a>.
 *
 *  <LI>A Format
 *
 *  <P>This is the name of the format of the encoded key. It is returned
 *  by the {@link #getFormat() getFormat} method.
 *
 *  </UL>
 *
 *  Keys are generally obtained through key generators, certificates,
 *  or various Identity classes used to manage keys.
 *  Keys may also be obtained from key specifications (transparent
 *  representations of the underlying key material) through the use of a key
 *  factory (see {@link KeyFactory}).
 *
 *  <p> A Key should use KeyRep as its serialized representation.
 *  Note that a serialized Key may contain sensitive information
 *  which should not be exposed in untrusted environments.  See the
 *  <a href="../../../platform/serialization/spec/security.html">
 *  Security Appendix</a>
 *  of the Serialization Specification for more information.
 * @see PublicKey
 * @see PrivateKey
 * @see KeyPair
 * @see KeyPairGenerator
 * @see KeyFactory
 * @see KeyRep
 * @see java.security.spec.KeySpec
 * @see Identity
 * @see Signer
 * @author Benjamin Renaud
 */
export type Key = Serializable & {
  /**
   * Returns the standard algorithm name for this key. For
   *  example, "DSA" would indicate that this key is a DSA key.
   *  See Appendix A in the <a href=
   *  "../../../technotes/guides/security/crypto/CryptoSpec.html#AppA">
   *  Java Cryptography Architecture API Specification &amp; Reference </a>
   *  for information about standard algorithm names.
   * @return the name of the algorithm associated with this key.
   */
  getAlgorithm(): string;

  /**
   * Returns the name of the primary encoding format of this key,
   *  or null if this key does not support encoding.
   *  The primary encoding format is
   *  named in terms of the appropriate ASN.1 data format, if an
   *  ASN.1 specification for this key exists.
   *  For example, the name of the ASN.1 data format for public
   *  keys is <I>SubjectPublicKeyInfo</I>, as
   *  defined by the X.509 standard; in this case, the returned format is
   *  {@code "X.509"}. Similarly,
   *  the name of the ASN.1 data format for private keys is
   *  <I>PrivateKeyInfo</I>,
   *  as defined by the PKCS #8 standard; in this case, the returned format is
   *  {@code "PKCS#8"}.
   * @return the primary encoding format of the key.
   */
  getFormat(): string;

  /**
   * Returns the key in its primary encoding format, or null
   *  if this key does not support encoding.
   * @return the encoded key, or null if the key does not support&#xA; encoding.
   */
  getEncoded(): unknown;

  /**
 * The class fingerprint that is set to indicate
 *  serialization compatibility with a previous
 *  version of the class.
  
    */
  serialVersionUID: number;
};
