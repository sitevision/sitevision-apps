import type { String } from "../../lang/String";

import type { InputStream } from "../../io/InputStream";
import type { Map } from "../../util/Map";
import type { Set } from "../../util/Set";
import type { Collection } from "../../util/Collection";
import type { Object } from "../../lang/Object";

import type { BiFunction } from "../../util/function/BiFunction";
import type { Function } from "../../util/function/Function";
import type { BiConsumer } from "../../util/function/BiConsumer";
import type { Enumeration } from "../../util/Enumeration";
import type { Service } from "../Provider.Service";
import type { Properties } from "../../util/Properties";

/**
 * This class represents a "provider" for the
 *  Java Security API, where a provider implements some or all parts of
 *  Java Security. Services that a provider may implement include:
 *
 *  <ul>
 *
 *  <li>Algorithms (such as DSA, RSA, MD5 or SHA-1).
 *
 *  <li>Key generation, conversion, and management facilities (such as for
 *  algorithm-specific keys).
 *
 * </ul>
 *
 *  <p>Each provider has a name and a version number, and is configured
 *  in each runtime it is installed in.
 *
 *  <p>See <a href =
 *  "../../../technotes/guides/security/crypto/CryptoSpec.html#Provider">The Provider Class</a>
 *  in the "Java Cryptography Architecture API Specification &amp; Reference"
 *  for information about how a particular type of provider, the
 *  cryptographic service provider, works and is installed. However,
 *  please note that a provider can be used to implement any security
 *  service in Java that uses a pluggable architecture with a choice
 *  of implementations that fit underneath.
 *
 *  <p>Some provider implementations may encounter unrecoverable internal
 *  errors during their operation, for example a failure to communicate with a
 *  security token. A {@link ProviderException} should be used to indicate
 *  such errors.
 *
 *  <p>The service type {@code Provider} is reserved for use by the
 *  security framework. Services of this type cannot be added, removed,
 *  or modified by applications.
 *  The following attributes are automatically placed in each Provider object:
 *  <table cellspacing=4>
 *  <caption><b>Attributes Automatically Placed in a Provider Object</b></caption>
 *  <tr><th>Name</th><th>Value</th>
 *  <tr><td>{@code Provider.id name}</td>
 *     <td>{@code String.valueOf(provider.getName())}</td>
 *  <tr><td>{@code Provider.id version}</td>
 *      <td>{@code String.valueOf(provider.getVersion())}</td>
 *  <tr><td>{@code Provider.id info}</td>
 *        <td>{@code String.valueOf(provider.getInfo())}</td>
 *  <tr><td>{@code Provider.id className}</td>
 *      <td>{@code provider.getClass().getName()}</td>
 *  </table>
 * @author Benjamin Renaud
 * @author Andreas Sterbenz
 */
export type Provider = Properties & {
  /**
   * Returns the name of this provider.
   * @return the name of this provider.
   */
  getName(): string;

  /**
   * Returns the version number for this provider.
   * @return the version number for this provider.
   */
  getVersion(): number;

  /**
   * Returns a human-readable description of the provider and its
   *  services.  This may return an HTML page, with relevant links.
   * @return a description of the provider and its services.
   */
  getInfo(): string;

  /**
   * Returns a string with the name and the version number
   *  of this provider.
   * @return the string with the name and the version number&#xA; for this provider.
   */
  toString(): string;

  /**
   * Clears this provider so that it no longer contains the properties
   *  used to look up facilities implemented by the provider.
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the string {@code "clearProviderProperties."+name}
   *  (where {@code name} is the provider name) to see if it's ok to clear
   *  this provider.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to clear this provider
   * @since 1.2
   */
  clear(): void;

  /**
   * Reads a property list (key and element pairs) from the input stream.
   * @param inStream the input stream.
   * @throws IOException if an error occurred when reading from the&#xA; input stream.
   * @see java.util.Properties#load
   */
  load(inStream: InputStream): void;

  /**
   * Copies all of the mappings from the specified Map to this provider.
   *  These mappings will replace any properties that this provider had
   *  for any of the keys currently in the specified Map.
   * @since 1.2
   */
  putAll(t: Map | {}): void;

  /**
   * Returns an unmodifiable Set view of the property entries contained
   *  in this Provider.
   * @see java.util.Map.Entry
   * @since 1.2
   */
  entrySet(): Set;

  /**
   * Returns an unmodifiable Set view of the property keys contained in
   *  this provider.
   * @since 1.2
   */
  keySet(): Set;

  /**
   * Returns an unmodifiable Collection view of the property values
   *  contained in this provider.
   * @since 1.2
   */
  values(): Collection;

  /**
   * Sets the {@code key} property to have the specified
   *  {@code value}.
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the string {@code "putProviderProperty."+name},
   *  where {@code name} is the provider name, to see if it's ok to set this
   *  provider's property values.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to set property values.
   * @since 1.2
   */
  put(key: unknown, value: unknown): unknown;

  /**
   * If the specified key is not already associated with a value (or is mapped
   *  to {@code null}) associates it with the given value and returns
   *  {@code null}, else returns the current value.
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the string {@code "putProviderProperty."+name},
   *  where {@code name} is the provider name, to see if it's ok to set this
   *  provider's property values.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to set property values.
   * @since 1.8
   */
  putIfAbsent(key: unknown, value: unknown): unknown;

  /**
   * Removes the {@code key} property (and its corresponding
   *  {@code value}).
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the string {@code "removeProviderProperty."+name},
   *  where {@code name} is the provider name, to see if it's ok to remove this
   *  provider's properties.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to remove this provider's properties.
   * @since 1.2
   */
  remove(key: unknown): unknown;

  /**
   * Removes the entry for the specified key only if it is currently
   *  mapped to the specified value.
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the string {@code "removeProviderProperty."+name},
   *  where {@code name} is the provider name, to see if it's ok to remove this
   *  provider's properties.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to remove this provider's properties.
   * @since 1.8
   */
  remove(key: unknown, value: unknown): boolean;

  /**
   * Replaces the entry for the specified key only if currently
   *  mapped to the specified value.
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the string {@code "putProviderProperty."+name},
   *  where {@code name} is the provider name, to see if it's ok to set this
   *  provider's property values.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to set property values.
   * @since 1.8
   */
  replace(key: unknown, oldValue: unknown, newValue: unknown): boolean;

  /**
   * Replaces the entry for the specified key only if it is
   *  currently mapped to some value.
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the string {@code "putProviderProperty."+name},
   *  where {@code name} is the provider name, to see if it's ok to set this
   *  provider's property values.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to set property values.
   * @since 1.8
   */
  replace(key: unknown, value: unknown): unknown;

  /**
   * Replaces each entry's value with the result of invoking the given
   *  function on that entry, in the order entries are returned by an entry
   *  set iterator, until all entries have been processed or the function
   *  throws an exception.
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the string {@code "putProviderProperty."+name},
   *  where {@code name} is the provider name, to see if it's ok to set this
   *  provider's property values.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to set property values.
   * @since 1.8
   */
  replaceAll(afunction: BiFunction): void;

  /**
   * Attempts to compute a mapping for the specified key and its
   *  current mapped value (or {@code null} if there is no current
   *  mapping).
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the strings {@code "putProviderProperty."+name}
   *  and {@code "removeProviderProperty."+name}, where {@code name} is the
   *  provider name, to see if it's ok to set this provider's property values
   *  and remove this provider's properties.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to set property values or remove properties.
   * @since 1.8
   */
  compute(key: unknown, remappingFunction: BiFunction): unknown;

  /**
   * If the specified key is not already associated with a value (or
   *  is mapped to {@code null}), attempts to compute its value using
   *  the given mapping function and enters it into this map unless
   *  {@code null}.
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the strings {@code "putProviderProperty."+name}
   *  and {@code "removeProviderProperty."+name}, where {@code name} is the
   *  provider name, to see if it's ok to set this provider's property values
   *  and remove this provider's properties.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to set property values and remove properties.
   * @since 1.8
   */
  computeIfAbsent(key: unknown, mappingFunction: Function): unknown;

  /**
   * If the value for the specified key is present and non-null, attempts to
   *  compute a new mapping given the key and its current mapped value.
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the strings {@code "putProviderProperty."+name}
   *  and {@code "removeProviderProperty."+name}, where {@code name} is the
   *  provider name, to see if it's ok to set this provider's property values
   *  and remove this provider's properties.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to set property values or remove properties.
   * @since 1.8
   */
  computeIfPresent(key: unknown, remappingFunction: BiFunction): unknown;

  /**
   * If the specified key is not already associated with a value or is
   *  associated with null, associates it with the given value. Otherwise,
   *  replaces the value with the results of the given remapping function,
   *  or removes if the result is null. This method may be of use when
   *  combining multiple mapped values for a key.
   *
   *  <p>If a security manager is enabled, its {@code checkSecurityAccess}
   *  method is called with the strings {@code "putProviderProperty."+name}
   *  and {@code "removeProviderProperty."+name}, where {@code name} is the
   *  provider name, to see if it's ok to set this provider's property values
   *  and remove this provider's properties.
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method&#xA; denies access to set property values or remove properties.
   * @since 1.8
   */
  merge(key: unknown, value: unknown, remappingFunction: BiFunction): unknown;

  get(key: unknown): unknown;

  getOrDefault(key: unknown, defaultValue: unknown): unknown;

  forEach(action: BiConsumer): void;

  keys(): Enumeration;

  elements(): Enumeration;

  getProperty(key: String | string): string;

  /**
   * Get the service describing this Provider's implementation of the
   *  specified type of this algorithm or alias. If no such
   *  implementation exists, this method returns null. If there are two
   *  matching services, one added to this provider using
   *  {@link #putService putService()} and one added via {@link #put put()},
   *  the service added via {@link #putService putService()} is returned.
   * @param type the type of {@link Service service} requested&#xA; (for example, {@code MessageDigest})
   * @param algorithm the case insensitive algorithm name (or alternate&#xA; alias) of the service requested (for example, {@code SHA-1})
   * @return the service describing this Provider's matching service&#xA; or null if no such service exists
   * @throws NullPointerException if type or algorithm is null
   * @since 1.5
   */
  getService(type: String | string, algorithm: String | string): Service;

  /**
   * Get an unmodifiable Set of all services supported by
   *  this Provider.
   * @return an unmodifiable Set of all services supported by&#xA; this Provider
   * @since 1.5
   */
  getServices(): Set;

  /**
   * Add a service. If a service of the same type with the same algorithm
   *  name exists and it was added using {@link #putService putService()},
   *  it is replaced by the new service.
   *  This method also places information about this service
   *  in the provider's Hashtable values in the format described in the
   *  <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">
   *  Java Cryptography Architecture API Specification &amp; Reference </a>.
   *
   *  <p>Also, if there is a security manager, its
   *  {@code checkSecurityAccess} method is called with the string
   *  {@code "putProviderProperty."+name}, where {@code name} is
   *  the provider name, to see if it's ok to set this provider's property
   *  values. If the default implementation of {@code checkSecurityAccess}
   *  is used (that is, that method is not overriden), then this results in
   *  a call to the security manager's {@code checkPermission} method with
   *  a {@code SecurityPermission("putProviderProperty."+name)}
   *  permission.
   * @param s the Service to add
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method denies&#xA; access to set property values.
   * @throws NullPointerException if s is null
   * @since 1.5
   */
  putService(s: Service): void;

  /**
   * Remove a service previously added using
   *  {@link #putService putService()}. The specified service is removed from
   *  this provider. It will no longer be returned by
   *  {@link #getService getService()} and its information will be removed
   *  from this provider's Hashtable.
   *
   *  <p>Also, if there is a security manager, its
   *  {@code checkSecurityAccess} method is called with the string
   *  {@code "removeProviderProperty."+name}, where {@code name} is
   *  the provider name, to see if it's ok to remove this provider's
   *  properties. If the default implementation of
   *  {@code checkSecurityAccess} is used (that is, that method is not
   *  overriden), then this results in a call to the security manager's
   *  {@code checkPermission} method with a
   *  {@code SecurityPermission("removeProviderProperty."+name)}
   *  permission.
   * @param s the Service to be removed
   * @throws SecurityException&#xA; if a security manager exists and its {@link&#xA; java.lang.SecurityManager#checkSecurityAccess} method denies&#xA; access to remove this provider's properties.
   * @throws NullPointerException if s is null
   * @since 1.5
   */
  removeService(s: Service): void;
};
