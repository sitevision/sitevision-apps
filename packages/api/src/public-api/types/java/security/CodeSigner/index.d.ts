import type { CertPath } from "../cert/CertPath";
import type { Timestamp } from "../Timestamp";

import type { Object } from "../../lang/Object";

import type { String } from "../../lang/String";
import type { Serializable } from "../../io/Serializable";

/**
 * This class encapsulates information about a code signer.
 *  It is immutable.
 * @since 1.5
 * @author Vincent Ryan
 */
export type CodeSigner = Object &
  Serializable & {
    /**
     * Returns the signer's certificate path.
     * @return A certificate path.
     */
    getSignerCertPath(): CertPath;

    /**
     * Returns the signature timestamp.
     * @return The timestamp or {@code null} if none is present.
     */
    getTimestamp(): Timestamp;

    /**
     * Returns the hash code value for this code signer.
     *  The hash code is generated using the signer's certificate path and the
     *  timestamp, if present.
     * @return a hash code value for this code signer.
     */
    hashCode(): number;

    /**
     * Tests for equality between the specified object and this
     *  code signer. Two code signers are considered equal if their
     *  signer certificate paths are equal and if their timestamps are equal,
     *  if present in both.
     * @param obj the object to test for equality with this object.
     * @return true if the objects are considered equal, false otherwise.
     */
    equals(obj: unknown): boolean;

    /**
     * Returns a string describing this code signer.
     * @return A string comprising the signer's certificate and a timestamp,&#xA; if present.
     */
    toString(): string;
  };
