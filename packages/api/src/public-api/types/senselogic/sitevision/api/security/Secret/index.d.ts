import type { String } from "../../../../../java/lang/String";

import type { Object } from "../../../../../java/lang/Object";
import type { Serializable } from "../../../../../java/io/Serializable";

/**
 * Secret for SecretStore that contains the user and its associated password.
 *  This is used for SSO'ing to other applications
 * @author Rickard Öberg
 * @see SecretStore
 */
export type Secret = Object &
  Serializable & {
    /**
     * Gets the principal of this secret.
     * @return the principal
     */
    getPrincipal(): string;

    /**
     * Sets the principal of this secret.
     * @param aPrincipal a principal
     */
    setPrincipal(aPrincipal: String | string): void;

    /**
     * Gets the credentials of this secret.
     * @return the credentials
     */
    getCredentials(): string;

    /**
     * Sets the credentials of this secret.
     * @param aCredentials the credentials
     */
    setCredentials(aCredentials: string[]): void;
  };
