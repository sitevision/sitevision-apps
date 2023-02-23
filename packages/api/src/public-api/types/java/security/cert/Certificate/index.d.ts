import type { String } from "../../../lang/String";
import type { Object } from "../../../lang/Object";

import type { PublicKey } from "../../PublicKey";

import type { Provider } from "../../Provider";
import type { Serializable } from "../../../io/Serializable";

/**
 * <p>Abstract class for managing a variety of identity certificates.
 *  An identity certificate is a binding of a principal to a public key which
 *  is vouched for by another principal.  (A principal represents
 *  an entity such as an individual user, a group, or a corporation.)
 * <p>
 *  This class is an abstraction for certificates that have different
 *  formats but important common uses.  For example, different types of
 *  certificates, such as X.509 and PGP, share general certificate
 *  functionality (like encoding and verifying) and
 *  some types of information (like a public key).
 *  <p>
 *  X.509, PGP, and SDSI certificates can all be implemented by
 *  subclassing the Certificate class, even though they contain different
 *  sets of information, and they store and retrieve the information in
 *  different ways.
 * @see X509Certificate
 * @see CertificateFactory
 * @author Hemma Prafullchandra
 */
export type Certificate = Object &
  Serializable & {
    /**
     * Returns the type of this certificate.
     * @return the type of this certificate.
     */
    getType(): string;

    /**
     * Compares this certificate for equality with the specified
     *  object. If the {@code other} object is an
     *  {@code instanceof} {@code Certificate}, then
     *  its encoded form is retrieved and compared with the
     *  encoded form of this certificate.
     * @param other the object to test for equality with this certificate.
     * @return true iff the encoded forms of the two certificates&#xA; match, false otherwise.
     */
    equals(other: unknown): boolean;

    /**
     * Returns a hashcode value for this certificate from its
     *  encoded form.
     * @return the hashcode value.
     */
    hashCode(): number;

    /**
     * Returns the encoded form of this certificate. It is
     *  assumed that each certificate type would have only a single
     *  form of encoding; for example, X.509 certificates would
     *  be encoded as ASN.1 DER.
     * @return the encoded form of this certificate
     * @throws CertificateEncodingException if an encoding error occurs.
     */
    getEncoded(): unknown;

    /**
     * Verifies that this certificate was signed using the
     *  private key that corresponds to the specified public key.
     * @param key the PublicKey used to carry out the verification.
     * @throws NoSuchAlgorithmException on unsupported signature&#xA; algorithms.
     * @throws InvalidKeyException on incorrect key.
     * @throws NoSuchProviderException if there's no default provider.
     * @throws SignatureException on signature errors.
     * @throws CertificateException on encoding errors.
     */
    verify(key: PublicKey): void;

    /**
     * Verifies that this certificate was signed using the
     *  private key that corresponds to the specified public key.
     *  This method uses the signature verification engine
     *  supplied by the specified provider.
     * @param key the PublicKey used to carry out the verification.
     * @param sigProvider the name of the signature provider.
     * @throws NoSuchAlgorithmException on unsupported signature&#xA; algorithms.
     * @throws InvalidKeyException on incorrect key.
     * @throws NoSuchProviderException on incorrect provider.
     * @throws SignatureException on signature errors.
     * @throws CertificateException on encoding errors.
     */
    verify(key: PublicKey, sigProvider: String | string): void;

    /**
     * Verifies that this certificate was signed using the
     *  private key that corresponds to the specified public key.
     *  This method uses the signature verification engine
     *  supplied by the specified provider. Note that the specified
     *  Provider object does not have to be registered in the provider list.
     *
     *  <p> This method was added to version 1.8 of the Java Platform
     *  Standard Edition. In order to maintain backwards compatibility with
     *  existing service providers, this method cannot be {@code abstract}
     *  and by default throws an {@code UnsupportedOperationException}.
     * @param key the PublicKey used to carry out the verification.
     * @param sigProvider the signature provider.
     * @throws NoSuchAlgorithmException on unsupported signature&#xA; algorithms.
     * @throws InvalidKeyException on incorrect key.
     * @throws SignatureException on signature errors.
     * @throws CertificateException on encoding errors.
     * @throws UnsupportedOperationException if the method is not supported
     * @since 1.8
     */
    verify(key: PublicKey, sigProvider: Provider): void;

    /**
     * Returns a string representation of this certificate.
     * @return a string representation of this certificate.
     */
    toString(): string;

    /**
     * Gets the public key from this certificate.
     * @return the public key.
     */
    getPublicKey(): PublicKey;

    /**
     * Replace the Certificate to be serialized.
     * @return the alternate Certificate object to be serialized
     * @throws java.io.ObjectStreamException if a new object representing&#xA; this Certificate could not be created
     * @since 1.3
     */
    writeReplace(): unknown;
  };
