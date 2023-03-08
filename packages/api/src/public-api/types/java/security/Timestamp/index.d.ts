import type { Date } from "../../util/Date";
import type { CertPath } from "../cert/CertPath";

import type { Object } from "../../lang/Object";

import type { String } from "../../lang/String";
import type { Serializable } from "../../io/Serializable";

/**
 * This class encapsulates information about a signed timestamp.
 *  It is immutable.
 *  It includes the timestamp's date and time as well as information about the
 *  Timestamping Authority (TSA) which generated and signed the timestamp.
 * @since 1.5
 * @author Vincent Ryan
 */
export type Timestamp = Object &
  Serializable & {
    /**
     * Returns the date and time when the timestamp was generated.
     * @return The timestamp's date and time.
     */
    getTimestamp(): Date;

    /**
     * Returns the certificate path for the Timestamping Authority.
     * @return The TSA's certificate path.
     */
    getSignerCertPath(): CertPath;

    /**
     * Returns the hash code value for this timestamp.
     *  The hash code is generated using the date and time of the timestamp
     *  and the TSA's certificate path.
     * @return a hash code value for this timestamp.
     */
    hashCode(): number;

    /**
     * Tests for equality between the specified object and this
     *  timestamp. Two timestamps are considered equal if the date and time of
     *  their timestamp's and their signer's certificate paths are equal.
     * @param obj the object to test for equality with this timestamp.
     * @return true if the timestamp are considered equal, false otherwise.
     */
    equals(obj: unknown): boolean;

    /**
     * Returns a string describing this timestamp.
     * @return A string comprising the date and time of the timestamp and&#xA; its signer's certificate.
     */
    toString(): string;
  };
