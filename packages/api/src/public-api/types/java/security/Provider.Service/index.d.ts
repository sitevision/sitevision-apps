import type { String } from "../../lang/String";
import type { Provider } from "../Provider";
import type { Object } from "../../lang/Object";

/**
 * The description of a security service. It encapsulates the properties
 *  of a service and contains a factory method to obtain new implementation
 *  instances of this service.
 *
 *  <p>Each service has a provider that offers the service, a type,
 *  an algorithm name, and the name of the class that implements the
 *  service. Optionally, it also includes a list of alternate algorithm
 *  names for this service (aliases) and attributes, which are a map of
 *  (name, value) String pairs.
 *
 *  <p>This class defines the methods {@link #supportsParameter
 *  supportsParameter()} and {@link #newInstance newInstance()}
 *  which are used by the Java security framework when it searches for
 *  suitable services and instantiates them. The valid arguments to those
 *  methods depend on the type of service. For the service types defined
 *  within Java SE, see the
 *  <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">
 *  Java Cryptography Architecture API Specification &amp; Reference </a>
 *  for the valid values.
 *  Note that components outside of Java SE can define additional types of
 *  services and their behavior.
 *
 *  <p>Instances of this class are immutable.
 * @since 1.5
 */
export type Service = Object & {
  /**
   * Get the type of this service. For example, {@code MessageDigest}.
   * @return the type of this service
   */
  getType(): string;

  /**
   * Return the name of the algorithm of this service. For example,
   *  {@code SHA-1}.
   * @return the algorithm of this service
   */
  getAlgorithm(): string;

  /**
   * Return the Provider of this service.
   * @return the Provider of this service
   */
  getProvider(): Provider;

  /**
   * Return the name of the class implementing this service.
   * @return the name of the class implementing this service
   */
  getClassName(): string;

  /**
   * Return the value of the specified attribute or null if this
   *  attribute is not set for this Service.
   * @param name the name of the requested attribute
   * @return the value of the specified attribute or null if the&#xA; attribute is not present
   * @throws NullPointerException if name is null
   */
  getAttribute(name: String | string): string;

  /**
   * Return a new instance of the implementation described by this
   *  service. The security provider framework uses this method to
   *  construct implementations. Applications will typically not need
   *  to call it.
   *
   *  <p>The default implementation uses reflection to invoke the
   *  standard constructor for this type of service.
   *  Security providers can override this method to implement
   *  instantiation in a different way.
   *  For details and the values of constructorParameter that are
   *  valid for the various types of services see the
   *  <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">
   *  Java Cryptography Architecture API Specification &amp;
   *  Reference</a>.
   * @param constructorParameter the value to pass to the constructor,&#xA; or null if this type of service does not use a constructorParameter.
   * @return a new implementation of this service
   * @throws InvalidParameterException if the value of&#xA; constructorParameter is invalid for this type of service.
   * @throws NoSuchAlgorithmException if instantiation failed for&#xA; any other reason.
   */
  newInstance(constructorParameter: unknown): unknown;

  /**
   * Test whether this Service can use the specified parameter.
   *  Returns false if this service cannot use the parameter. Returns
   *  true if this service can use the parameter, if a fast test is
   *  infeasible, or if the status is unknown.
   *
   *  <p>The security provider framework uses this method with
   *  some types of services to quickly exclude non-matching
   *  implementations for consideration.
   *  Applications will typically not need to call it.
   *
   *  <p>For details and the values of parameter that are valid for the
   *  various types of services see the top of this class and the
   *  <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">
   *  Java Cryptography Architecture API Specification &amp;
   *  Reference</a>.
   *  Security providers can override it to implement their own test.
   * @param parameter the parameter to test
   * @return false if this this service cannot use the specified&#xA; parameter; true if it can possibly use the parameter
   * @throws InvalidParameterException if the value of parameter is&#xA; invalid for this type of service or if this method cannot be&#xA; used with this type of service
   */
  supportsParameter(parameter: unknown): boolean;

  /**
   * Return a String representation of this service.
   * @return a String representation of this service.
   */
  toString(): string;
};
