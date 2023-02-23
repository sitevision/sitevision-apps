import type { Key } from "../Key";

/**
 * <p>A public key. This interface contains no methods or constants.
 *  It merely serves to group (and provide type safety for) all public key
 *  interfaces.
 *
 *  Note: The specialized public key interfaces extend this interface.
 *  See, for example, the DSAPublicKey interface in
 *  {@code java.security.interfaces}.
 * @see Key
 * @see PrivateKey
 * @see Certificate
 * @see Signature#initVerify
 * @see java.security.interfaces.DSAPublicKey
 * @see java.security.interfaces.RSAPublicKey
 */
export type PublicKey = Key & {
  /**
 * The class fingerprint that is set to indicate serialization
 *  compatibility with a previous version of the class.
  
    */
  serialVersionUID: number;
};
