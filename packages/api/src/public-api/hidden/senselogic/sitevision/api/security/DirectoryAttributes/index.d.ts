/**
 * <p>
 *    Interface exposing directory attributes of an internal directory object. The attribute name is the LDAP / Directory attribute
 *    name which is not the same thing as the internal field name represented by Field.Id. The mapping between
 *    field name and attribute name is defined in the attribute mapping in LdapSchema.
 * </p>
 *
 * <p>
 *    This API can also be used to get / set attributes "outside" of the schema.
 *    Set methods operates directly to the LDAP source!
 *    The methods will never throw exceptions. Any problem will be written to the server log.
 * </p>
 *
 * <p>
 *    <em>Note!</em> an initial lookup in the UserObjectProperties will be made to see if the attribute is available.
 *    If a lookup to a Directory/LDAP source is required, the resulting value will be stored in the UserObjectProperties
 *    to avoid further calls.
 * </p>
 *
 * <p>
 *    <strong>Deprecation note!</strong> This is a deprecated legacy interface for operating on "internal" Sitevision objects.
 *    Use {@link senselogic.sitevision.api.security.DirectoryUtil} to get LDAP values for a directory object <code>Node</code>.
 * </p>
 * @author Karl Eklöf
 */
interface DirectoryAttributes {
  /**
   * Returns the directory attribute values for the given attribute name.
   * @param anAttributeName The attribute name for which to get the attribute value for.
   * @return The attribute value which maps to the given attribute name or <code>null</code> if no value maps to the given name.
   */
  getAttributeValues(anAttributeName: string): unknown;

  /**
   * Sets directory attributes on a directory object. <br>
   * This method silently discards any exception that might occur.
   * @param anAttributeName The directory attribute to set.
   * @param aValues The directory values to be set.
   */
  setAttributeValues(anAttributeName: string, aValues: unknown): void;

  /**
   * Returns the directory attribute value for the given attribute name.
   * @param anAttributeName The attribute name for which to get the attribute value for.
   * @return The attribute value which maps to the given attribute name or <code>null</code> if no value maps to the given name.
   */
  getAttributeValue(anAttributeName: string): unknown;

  /**
   * Sets directory attributes on a directory object. <br>
   * This method silently discards any exception that might occur.
   * @param anAttributeName The directory attribute to set.
   * @param aValue The directory value to be set.
   */
  setAttributeValue(anAttributeName: string, aValue: string): void;

  /**
   * Returns the directory attribute value as a <code>String</code> if <code>returnAsString</code>
   * equals <code>true</code>.
   * @param anAttributeName The attribute name for which to get the attribute value for.
   * @param returnAsString If <code>true</code> the value is returned as a <code>String</code>.
   * @return The attribute value as a <code>String</code> if <code>returnAsString</code> equals <code>true</code> or <code>null</code> if no value maps to the given name.
   */
  getAttributeValue(anAttributeName: string, returnAsString: boolean): unknown;
}

export default DirectoryAttributes;
