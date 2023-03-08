import type { String } from "../../../java/lang/String";
import type { Object } from "../../../java/lang/Object";

import type { Credentials } from "../Credentials";

/**
 * <code>SimpleCredentials</code> implements the <code>Credentials</code>
 *  interface and represents simple user ID/password credentials.
  
    */
export type SimpleCredentials = Object &
  Credentials & {
    /**
     * Returns the user password.
     *  <p>
     *  Note that this method returns a reference to the password. It is the
     *  caller's responsibility to zero out the password information after it is
     *  no longer needed.
     * @return the password
     */
    getPassword(): string;

    /**
     * Returns the user ID.
     * @return the user ID.
     */
    getUserID(): string;

    /**
     * Stores an attribute in this credentials instance.
     * @param name a <code>String</code> specifying the name of the attribute
     * @param value the <code>Object</code> to be stored
     */
    setAttribute(name: String | string, value: unknown): void;

    /**
     * Returns the value of the named attribute as an <code>Object</code>, or
     *  <code>null</code> if no attribute of the given name exists.
     * @param name a <code>String</code> specifying the name of the attribute
     * @return an <code>Object</code> containing the value of the attribute, or&#xA; <code>null</code> if the attribute does not exist
     */
    getAttribute(name: String | string): unknown;

    /**
     * Removes an attribute from this credentials instance.
     * @param name a <code>String</code> specifying the name of the attribute to&#xA; remove
     */
    removeAttribute(name: String | string): void;

    /**
     * Returns the names of the attributes available to this credentials
     *  instance. This method returns an empty array if the credentials instance
     *  has no attributes available to it.
     * @return a string array containing the names of the stored attributes
     */
    getAttributeNames(): string;
  };
