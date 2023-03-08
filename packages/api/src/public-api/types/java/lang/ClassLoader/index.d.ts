import type { String } from "../String";
import type { Class } from "../Class";

import type { Object } from "../Object";

import type { ProtectionDomain } from "../../security/ProtectionDomain";

import type { URL } from "../../net/URL";
import type { Enumeration } from "../../util/Enumeration";
import type { InputStream } from "../../io/InputStream";
import type { Package } from "../Package";

/**
 * A class loader is an object that is responsible for loading classes. The
 *  class <tt>ClassLoader</tt> is an abstract class.  Given the <a
 *  href="#name">binary name</a> of a class, a class loader should attempt to
 *  locate or generate data that constitutes a definition for the class.  A
 *  typical strategy is to transform the name into a file name and then read a
 *  "class file" of that name from a file system.
 *
 *  <p> Every {@link Class <tt>Class</tt>} object contains a {@link
 *  Class#getClassLoader() reference} to the <tt>ClassLoader</tt> that defined
 *  it.
 *
 *  <p> <tt>Class</tt> objects for array classes are not created by class
 *  loaders, but are created automatically as required by the Java runtime.
 *  The class loader for an array class, as returned by {@link
 *  Class#getClassLoader()} is the same as the class loader for its element
 *  type; if the element type is a primitive type, then the array class has no
 *  class loader.
 *
 *  <p> Applications implement subclasses of <tt>ClassLoader</tt> in order to
 *  extend the manner in which the Java virtual machine dynamically loads
 *  classes.
 *
 *  <p> Class loaders may typically be used by security managers to indicate
 *  security domains.
 *
 *  <p> The <tt>ClassLoader</tt> class uses a delegation model to search for
 *  classes and resources.  Each instance of <tt>ClassLoader</tt> has an
 *  associated parent class loader.  When requested to find a class or
 *  resource, a <tt>ClassLoader</tt> instance will delegate the search for the
 *  class or resource to its parent class loader before attempting to find the
 *  class or resource itself.  The virtual machine's built-in class loader,
 *  called the "bootstrap class loader", does not itself have a parent but may
 *  serve as the parent of a <tt>ClassLoader</tt> instance.
 *
 *  <p> Class loaders that support concurrent loading of classes are known as
 *  <em>parallel capable</em> class loaders and are required to register
 *  themselves at their class initialization time by invoking the
 *  {@link
 *  #registerAsParallelCapable <tt>ClassLoader.registerAsParallelCapable</tt>}
 *  method. Note that the <tt>ClassLoader</tt> class is registered as parallel
 *  capable by default. However, its subclasses still need to register themselves
 *  if they are parallel capable. <br>
 *  In environments in which the delegation model is not strictly
 *  hierarchical, class loaders need to be parallel capable, otherwise class
 *  loading can lead to deadlocks because the loader lock is held for the
 *  duration of the class loading process (see {@link #loadClass
 *  <tt>loadClass</tt>} methods).
 *
 *  <p> Normally, the Java virtual machine loads classes from the local file
 *  system in a platform-dependent manner.  For example, on UNIX systems, the
 *  virtual machine loads classes from the directory defined by the
 *  <tt>CLASSPATH</tt> environment variable.
 *
 *  <p> However, some classes may not originate from a file; they may originate
 *  from other sources, such as the network, or they could be constructed by an
 *  application.  The method {@link #defineClass(String, byte[], int, int)
 *  <tt>defineClass</tt>} converts an array of bytes into an instance of class
 *  <tt>Class</tt>. Instances of this newly defined class can be created using
 *  {@link Class#newInstance <tt>Class.newInstance</tt>}.
 *
 *  <p> The methods and constructors of objects created by a class loader may
 *  reference other classes.  To determine the class(es) referred to, the Java
 *  virtual machine invokes the {@link #loadClass <tt>loadClass</tt>} method of
 *  the class loader that originally created the class.
 *
 *  <p> For example, an application could create a network class loader to
 *  download class files from a server.  Sample code might look like:
 *
 *  <blockquote><pre>
 *    ClassLoader loader&nbsp;= new NetworkClassLoader(host,&nbsp;port);
 *    Object main&nbsp;= loader.loadClass("Main", true).newInstance();
 *        &nbsp;.&nbsp;.&nbsp;.
 *  </pre></blockquote>
 *
 *  <p> The network class loader subclass must define the methods {@link
 *  #findClass <tt>findClass</tt>} and <tt>loadClassData</tt> to load a class
 *  from the network.  Once it has downloaded the bytes that make up the class,
 *  it should use the method {@link #defineClass <tt>defineClass</tt>} to
 *  create a class instance.  A sample implementation is:
 *
 *  <blockquote><pre>
 *      class NetworkClassLoader extends ClassLoader {
 *          String host;
 *          int port;
 *
 *          public Class findClass(String name) {
 *              byte[] b = loadClassData(name);
 *              return defineClass(name, b, 0, b.length);
 *          }
 *
 *          private byte[] loadClassData(String name) {
 *              // load the class data from the connection
 *              &nbsp;.&nbsp;.&nbsp;.
 *          }
 *      }
 *  </pre></blockquote>
 *
 *  <h3> <a name="name">Binary names</a> </h3>
 *
 *  <p> Any class name provided as a {@link String} parameter to methods in
 *  <tt>ClassLoader</tt> must be a binary name as defined by
 *  <cite>The Java&trade; Language Specification</cite>.
 *
 *  <p> Examples of valid class names include:
 *  <blockquote><pre>
 *    "java.lang.String"
 *    "javax.swing.JSpinner$DefaultEditor"
 *    "java.security.KeyStore$Builder$FileBuilder$1"
 *    "java.net.URLClassLoader$3$1"
 *  </pre></blockquote>
 * @see #resolveClass(Class)
 * @since 1.0
 */
export type ClassLoader = Object & {
  /**
   * Loads the class with the specified <a href="#name">binary name</a>.
   *  This method searches for classes in the same manner as the {@link
   *  #loadClass(String, boolean)} method.  It is invoked by the Java virtual
   *  machine to resolve class references.  Invoking this method is equivalent
   *  to invoking {@link #loadClass(String, boolean) <tt>loadClass(name,
   *  false)</tt>}.
   * @param name&#xA; The <a href="#name">binary name</a> of the class
   * @return The resulting <tt>Class</tt> object
   * @throws ClassNotFoundException&#xA; If the class was not found
   */
  loadClass(name: String | string): Class;

  /**
   * Loads the class with the specified <a href="#name">binary name</a>.  The
   *  default implementation of this method searches for classes in the
   *  following order:
   *
   *  <ol>
   *
   *    <li><p> Invoke {@link #findLoadedClass(String)} to check if the class
   *    has already been loaded.  </p></li>
   *
   *    <li><p> Invoke the {@link #loadClass(String) <tt>loadClass</tt>} method
   *    on the parent class loader.  If the parent is <tt>null</tt> the class
   *    loader built-in to the virtual machine is used, instead.  </p></li>
   *
   *    <li><p> Invoke the {@link #findClass(String)} method to find the
   *    class.  </p></li>
   *
   *  </ol>
   *
   *  <p> If the class was found using the above steps, and the
   *  <tt>resolve</tt> flag is true, this method will then invoke the {@link
   *  #resolveClass(Class)} method on the resulting <tt>Class</tt> object.
   *
   *  <p> Subclasses of <tt>ClassLoader</tt> are encouraged to override {@link
   *  #findClass(String)}, rather than this method.  </p>
   *
   *  <p> Unless overridden, this method synchronizes on the result of
   *  {@link #getClassLoadingLock <tt>getClassLoadingLock</tt>} method
   *  during the entire class loading process.
   * @param name&#xA; The <a href="#name">binary name</a> of the class
   * @param resolve&#xA; If <tt>true</tt> then resolve the class
   * @return The resulting <tt>Class</tt> object
   * @throws ClassNotFoundException&#xA; If the class could not be found
   */
  loadClass(name: String | string, resolve: boolean): Class;

  /**
   * Returns the lock object for class loading operations.
   *  For backward compatibility, the default implementation of this method
   *  behaves as follows. If this ClassLoader object is registered as
   *  parallel capable, the method returns a dedicated object associated
   *  with the specified class name. Otherwise, the method returns this
   *  ClassLoader object.
   * @param className&#xA; The name of the to-be-loaded class
   * @return the lock for class loading operations
   * @throws NullPointerException&#xA; If registered as parallel capable and <tt>className</tt> is null
   * @see #loadClass(String, boolean)
   * @since 1.7
   */
  getClassLoadingLock(className: String | string): unknown;

  /**
   * Finds the class with the specified <a href="#name">binary name</a>.
   *  This method should be overridden by class loader implementations that
   *  follow the delegation model for loading classes, and will be invoked by
   *  the {@link #loadClass <tt>loadClass</tt>} method after checking the
   *  parent class loader for the requested class.  The default implementation
   *  throws a <tt>ClassNotFoundException</tt>.
   * @param name&#xA; The <a href="#name">binary name</a> of the class
   * @return The resulting <tt>Class</tt> object
   * @throws ClassNotFoundException&#xA; If the class could not be found
   * @since 1.2
   */
  findClass(name: String | string): Class;

  /**
   * Converts an array of bytes into an instance of class <tt>Class</tt>.
   *  Before the <tt>Class</tt> can be used it must be resolved.  This method
   *  is deprecated in favor of the version that takes a <a
   *  href="#name">binary name</a> as its first argument, and is more secure.
   * @param b&#xA; The bytes that make up the class data. The bytes in positions&#xA; <tt>off</tt> through <tt>off+len-1</tt> should have the format&#xA; of a valid class file as defined by&#xA; <cite>The Java&trade; Virtual Machine Specification</cite>.
   * @param off&#xA; The start offset in <tt>b</tt> of the class data
   * @param len&#xA; The length of the class data
   * @return The <tt>Class</tt> object that was created from the specified&#xA; class data
   * @throws ClassFormatError&#xA; If the data did not contain a valid class
   * @throws IndexOutOfBoundsException&#xA; If either <tt>off</tt> or <tt>len</tt> is negative, or if&#xA; <tt>off+len</tt> is greater than <tt>b.length</tt>.
   * @throws SecurityException&#xA; If an attempt is made to add this class to a package that&#xA; contains classes that were signed by a different set of&#xA; certificates than this class, or if an attempt is made&#xA; to define a class in a package with a fully-qualified name&#xA; that starts with "{@code java.}".
   * @see #loadClass(String, boolean)
   * @see #resolveClass(Class)
   * @deprecated Replaced by {@link #defineClass(String, byte[], int, int)&#xA; defineClass(String, byte[], int, int)}
   */
  defineClass(b: unknown[], off: number, len: number): Class;

  /**
   * Converts an array of bytes into an instance of class <tt>Class</tt>.
   *  Before the <tt>Class</tt> can be used it must be resolved.
   *
   *  <p> This method assigns a default {@link java.security.ProtectionDomain
   *  <tt>ProtectionDomain</tt>} to the newly defined class.  The
   *  <tt>ProtectionDomain</tt> is effectively granted the same set of
   *  permissions returned when {@link
   *  java.security.Policy#getPermissions(java.security.CodeSource)
   *  <tt>Policy.getPolicy().getPermissions(new CodeSource(null, null))</tt>}
   *  is invoked.  The default domain is created on the first invocation of
   *  {@link #defineClass(String, byte[], int, int) <tt>defineClass</tt>},
   *  and re-used on subsequent invocations.
   *
   *  <p> To assign a specific <tt>ProtectionDomain</tt> to the class, use
   *  the {@link #defineClass(String, byte[], int, int,
   *  java.security.ProtectionDomain) <tt>defineClass</tt>} method that takes a
   *  <tt>ProtectionDomain</tt> as one of its arguments.  </p>
   * @param name&#xA; The expected <a href="#name">binary name</a> of the class, or&#xA; <tt>null</tt> if not known
   * @param b&#xA; The bytes that make up the class data. The bytes in positions&#xA; <tt>off</tt> through <tt>off+len-1</tt> should have the format&#xA; of a valid class file as defined by&#xA; <cite>The Java&trade; Virtual Machine Specification</cite>.
   * @param off&#xA; The start offset in <tt>b</tt> of the class data
   * @param len&#xA; The length of the class data
   * @return The <tt>Class</tt> object that was created from the specified&#xA; class data.
   * @throws ClassFormatError&#xA; If the data did not contain a valid class
   * @throws IndexOutOfBoundsException&#xA; If either <tt>off</tt> or <tt>len</tt> is negative, or if&#xA; <tt>off+len</tt> is greater than <tt>b.length</tt>.
   * @throws SecurityException&#xA; If an attempt is made to add this class to a package that&#xA; contains classes that were signed by a different set of&#xA; certificates than this class (which is unsigned), or if&#xA; <tt>name</tt> begins with "<tt>java.</tt>".
   * @see #loadClass(String, boolean)
   * @see #resolveClass(Class)
   * @see java.security.CodeSource
   * @see java.security.SecureClassLoader
   * @since 1.1
   */
  defineClass(
    name: String | string,
    b: unknown[],
    off: number,
    len: number
  ): Class;

  /**
   * Converts an array of bytes into an instance of class <tt>Class</tt>,
   *  with an optional <tt>ProtectionDomain</tt>.  If the domain is
   *  <tt>null</tt>, then a default domain will be assigned to the class as
   *  specified in the documentation for {@link #defineClass(String, byte[],
   *  int, int)}.  Before the class can be used it must be resolved.
   *
   *  <p> The first class defined in a package determines the exact set of
   *  certificates that all subsequent classes defined in that package must
   *  contain.  The set of certificates for a class is obtained from the
   *  {@link java.security.CodeSource <tt>CodeSource</tt>} within the
   *  <tt>ProtectionDomain</tt> of the class.  Any classes added to that
   *  package must contain the same set of certificates or a
   *  <tt>SecurityException</tt> will be thrown.  Note that if
   *  <tt>name</tt> is <tt>null</tt>, this check is not performed.
   *  You should always pass in the <a href="#name">binary name</a> of the
   *  class you are defining as well as the bytes.  This ensures that the
   *  class you are defining is indeed the class you think it is.
   *
   *  <p> The specified <tt>name</tt> cannot begin with "<tt>java.</tt>", since
   *  all classes in the "<tt>java.*</tt> packages can only be defined by the
   *  bootstrap class loader.  If <tt>name</tt> is not <tt>null</tt>, it
   *  must be equal to the <a href="#name">binary name</a> of the class
   *  specified by the byte array "<tt>b</tt>", otherwise a {@link
   *  NoClassDefFoundError <tt>NoClassDefFoundError</tt>} will be thrown. </p>
   * @param name&#xA; The expected <a href="#name">binary name</a> of the class, or&#xA; <tt>null</tt> if not known
   * @param b&#xA; The bytes that make up the class data. The bytes in positions&#xA; <tt>off</tt> through <tt>off+len-1</tt> should have the format&#xA; of a valid class file as defined by&#xA; <cite>The Java&trade; Virtual Machine Specification</cite>.
   * @param off&#xA; The start offset in <tt>b</tt> of the class data
   * @param len&#xA; The length of the class data
   * @param protectionDomain&#xA; The ProtectionDomain of the class
   * @return The <tt>Class</tt> object created from the data,&#xA; and optional <tt>ProtectionDomain</tt>.
   * @throws ClassFormatError&#xA; If the data did not contain a valid class
   * @throws NoClassDefFoundError&#xA; If <tt>name</tt> is not equal to the <a href="#name">binary&#xA; name</a> of the class specified by <tt>b</tt>
   * @throws IndexOutOfBoundsException&#xA; If either <tt>off</tt> or <tt>len</tt> is negative, or if&#xA; <tt>off+len</tt> is greater than <tt>b.length</tt>.
   * @throws SecurityException&#xA; If an attempt is made to add this class to a package that&#xA; contains classes that were signed by a different set of&#xA; certificates than this class, or if <tt>name</tt> begins with&#xA; "<tt>java.</tt>".
   */
  defineClass(
    name: String | string,
    b: unknown[],
    off: number,
    len: number,
    protectionDomain: ProtectionDomain
  ): Class;

  /**
   * Converts a {@link java.nio.ByteBuffer <tt>ByteBuffer</tt>}
   *  into an instance of class <tt>Class</tt>,
   *  with an optional <tt>ProtectionDomain</tt>.  If the domain is
   *  <tt>null</tt>, then a default domain will be assigned to the class as
   *  specified in the documentation for {@link #defineClass(String, byte[],
   *  int, int)}.  Before the class can be used it must be resolved.
   *
   *  <p>The rules about the first class defined in a package determining the
   *  set of certificates for the package, and the restrictions on class names
   *  are identical to those specified in the documentation for {@link
   *  #defineClass(String, byte[], int, int, ProtectionDomain)}.
   *
   *  <p> An invocation of this method of the form
   *  <i>cl</i><tt>.defineClass(</tt><i>name</i><tt>,</tt>
   *  <i>bBuffer</i><tt>,</tt> <i>pd</i><tt>)</tt> yields exactly the same
   *  result as the statements
   *
   * <p> <tt>
   *  ...<br>
   *  byte[] temp = new byte[bBuffer.{@link
   *  java.nio.ByteBuffer#remaining remaining}()];<br>
   *      bBuffer.{@link java.nio.ByteBuffer#get(byte[])
   *  get}(temp);<br>
   *      return {@link #defineClass(String, byte[], int, int, ProtectionDomain)
   *  cl.defineClass}(name, temp, 0,
   *  temp.length, pd);<br>
   *  </tt></p>
   * @param name&#xA; The expected <a href="#name">binary name</a>. of the class, or&#xA; <tt>null</tt> if not known
   * @param b&#xA; The bytes that make up the class data. The bytes from positions&#xA; <tt>b.position()</tt> through <tt>b.position() + b.limit() -1&#xA; </tt> should have the format of a valid class file as defined by&#xA; <cite>The Java&trade; Virtual Machine Specification</cite>.
   * @param protectionDomain&#xA; The ProtectionDomain of the class, or <tt>null</tt>.
   * @return The <tt>Class</tt> object created from the data,&#xA; and optional <tt>ProtectionDomain</tt>.
   * @throws ClassFormatError&#xA; If the data did not contain a valid class.
   * @throws NoClassDefFoundError&#xA; If <tt>name</tt> is not equal to the <a href="#name">binary&#xA; name</a> of the class specified by <tt>b</tt>
   * @throws SecurityException&#xA; If an attempt is made to add this class to a package that&#xA; contains classes that were signed by a different set of&#xA; certificates than this class, or if <tt>name</tt> begins with&#xA; "<tt>java.</tt>".
   * @see #defineClass(String, byte[], int, int, ProtectionDomain)
   * @since 1.5
   */
  defineClass(
    name: String | string,
    b: unknown,
    protectionDomain: ProtectionDomain
  ): Class;

  /**
   * Links the specified class.  This (misleadingly named) method may be
   *  used by a class loader to link a class.  If the class <tt>c</tt> has
   *  already been linked, then this method simply returns. Otherwise, the
   *  class is linked as described in the "Execution" chapter of
   *  <cite>The Java&trade; Language Specification</cite>.
   * @param c&#xA; The class to link
   * @throws NullPointerException&#xA; If <tt>c</tt> is <tt>null</tt>.
   * @see #defineClass(String, byte[], int, int)
   */
  resolveClass(c: Class): void;

  /**
   * Finds a class with the specified <a href="#name">binary name</a>,
   *  loading it if necessary.
   *
   *  <p> This method loads the class through the system class loader (see
   *  {@link #getSystemClassLoader()}).  The <tt>Class</tt> object returned
   *  might have more than one <tt>ClassLoader</tt> associated with it.
   *  Subclasses of <tt>ClassLoader</tt> need not usually invoke this method,
   *  because most class loaders need to override just {@link
   *  #findClass(String)}.  </p>
   * @param name&#xA; The <a href="#name">binary name</a> of the class
   * @return The <tt>Class</tt> object for the specified <tt>name</tt>
   * @throws ClassNotFoundException&#xA; If the class could not be found
   * @see #ClassLoader(ClassLoader)
   * @see #getParent()
   */
  findSystemClass(name: String | string): Class;

  /**
   * Returns the class with the given <a href="#name">binary name</a> if this
   *  loader has been recorded by the Java virtual machine as an initiating
   *  loader of a class with that <a href="#name">binary name</a>.  Otherwise
   *  <tt>null</tt> is returned.
   * @param name&#xA; The <a href="#name">binary name</a> of the class
   * @return The <tt>Class</tt> object, or <tt>null</tt> if the class has&#xA; not been loaded
   * @since 1.1
   */
  findLoadedClass(name: String | string): Class;

  /**
   * Sets the signers of a class.  This should be invoked after defining a
   *  class.
   * @param c&#xA; The <tt>Class</tt> object
   * @param signers&#xA; The signers for the class
   * @since 1.1
   */
  setSigners(c: Class, signers: unknown[]): void;

  /**
   * Finds the resource with the given name.  A resource is some data
   *  (images, audio, text, etc) that can be accessed by class code in a way
   *  that is independent of the location of the code.
   *
   *  <p> The name of a resource is a '<tt>/</tt>'-separated path name that
   *  identifies the resource.
   *
   *  <p> This method will first search the parent class loader for the
   *  resource; if the parent is <tt>null</tt> the path of the class loader
   *  built-in to the virtual machine is searched.  That failing, this method
   *  will invoke {@link #findResource(String)} to find the resource.  </p>
   * @apiNote When overriding this method it is recommended that an&#xA; implementation ensures that any delegation is consistent with the {@link&#xA; #getResources(java.lang.String) getResources(String)} method.
   * @param name&#xA; The resource name
   * @return A <tt>URL</tt> object for reading the resource, or&#xA; <tt>null</tt> if the resource could not be found or the invoker&#xA; doesn't have adequate privileges to get the resource.
   * @since 1.1
   */
  getResource(name: String | string): URL;

  /**
   * Finds all the resources with the given name. A resource is some data
   *  (images, audio, text, etc) that can be accessed by class code in a way
   *  that is independent of the location of the code.
   *
   *  <p>The name of a resource is a <tt>/</tt>-separated path name that
   *  identifies the resource.
   *
   *  <p> The search order is described in the documentation for {@link
   *  #getResource(String)}.  </p>
   * @apiNote When overriding this method it is recommended that an&#xA; implementation ensures that any delegation is consistent with the {@link&#xA; #getResource(java.lang.String) getResource(String)} method. This should&#xA; ensure that the first element returned by the Enumeration's&#xA; {@code nextElement} method is the same resource that the&#xA; {@code getResource(String)} method would return.
   * @param name&#xA; The resource name
   * @return An enumeration of {@link java.net.URL <tt>URL</tt>} objects for&#xA; the resource. If no resources could be found, the enumeration&#xA; will be empty. Resources that the class loader doesn't have&#xA; access to will not be in the enumeration.
   * @throws IOException&#xA; If I/O errors occur
   * @see #findResources(String)
   * @since 1.2
   */
  getResources(name: String | string): Enumeration;

  /**
   * Finds the resource with the given name. Class loader implementations
   *  should override this method to specify where to find resources.
   * @param name&#xA; The resource name
   * @return A <tt>URL</tt> object for reading the resource, or&#xA; <tt>null</tt> if the resource could not be found
   * @since 1.2
   */
  findResource(name: String | string): URL;

  /**
   * Returns an enumeration of {@link java.net.URL <tt>URL</tt>} objects
   *  representing all the resources with the given name. Class loader
   *  implementations should override this method to specify where to load
   *  resources from.
   * @param name&#xA; The resource name
   * @return An enumeration of {@link java.net.URL <tt>URL</tt>} objects for&#xA; the resources
   * @throws IOException&#xA; If I/O errors occur
   * @since 1.2
   */
  findResources(name: String | string): Enumeration;

  /**
   * Returns an input stream for reading the specified resource.
   *
   *  <p> The search order is described in the documentation for {@link
   *  #getResource(String)}.  </p>
   * @param name&#xA; The resource name
   * @return An input stream for reading the resource, or <tt>null</tt>&#xA; if the resource could not be found
   * @since 1.1
   */
  getResourceAsStream(name: String | string): InputStream;

  /**
   * Returns the parent class loader for delegation. Some implementations may
   *  use <tt>null</tt> to represent the bootstrap class loader. This method
   *  will return <tt>null</tt> in such implementations if this class loader's
   *  parent is the bootstrap class loader.
   *
   *  <p> If a security manager is present, and the invoker's class loader is
   *  not <tt>null</tt> and is not an ancestor of this class loader, then this
   *  method invokes the security manager's {@link
   *  SecurityManager#checkPermission(java.security.Permission)
   *  <tt>checkPermission</tt>} method with a {@link
   *  RuntimePermission#RuntimePermission(String)
   *  <tt>RuntimePermission("getClassLoader")</tt>} permission to verify
   *  access to the parent class loader is permitted.  If not, a
   *  <tt>SecurityException</tt> will be thrown.  </p>
   * @return The parent <tt>ClassLoader</tt>
   * @throws SecurityException&#xA; If a security manager exists and its <tt>checkPermission</tt>&#xA; method doesn't allow access to this class loader's parent class&#xA; loader.
   * @since 1.2
   */
  getParent(): ClassLoader;

  /**
   * Defines a package by name in this <tt>ClassLoader</tt>.  This allows
   *  class loaders to define the packages for their classes. Packages must
   *  be created before the class is defined, and package names must be
   *  unique within a class loader and cannot be redefined or changed once
   *  created.
   * @param name&#xA; The package name
   * @param specTitle&#xA; The specification title
   * @param specVersion&#xA; The specification version
   * @param specVendor&#xA; The specification vendor
   * @param implTitle&#xA; The implementation title
   * @param implVersion&#xA; The implementation version
   * @param implVendor&#xA; The implementation vendor
   * @param sealBase&#xA; If not <tt>null</tt>, then this package is sealed with&#xA; respect to the given code source {@link java.net.URL&#xA; <tt>URL</tt>} object. Otherwise, the package is not sealed.
   * @return The newly defined <tt>Package</tt> object
   * @throws IllegalArgumentException&#xA; If package name duplicates an existing package either in this&#xA; class loader or one of its ancestors
   * @since 1.2
   */
  definePackage(
    name: String | string,
    specTitle: String | string,
    specVersion: String | string,
    specVendor: String | string,
    implTitle: String | string,
    implVersion: String | string,
    implVendor: String | string,
    sealBase: URL
  ): Package;

  /**
   * Returns a <tt>Package</tt> that has been defined by this class loader
   *  or any of its ancestors.
   * @param name&#xA; The package name
   * @return The <tt>Package</tt> corresponding to the given name, or&#xA; <tt>null</tt> if not found
   * @since 1.2
   */
  getPackage(name: String | string): Package;

  /**
   * Returns all of the <tt>Packages</tt> defined by this class loader and
   *  its ancestors.
   * @return The array of <tt>Package</tt> objects defined by this&#xA; <tt>ClassLoader</tt>
   * @since 1.2
   */
  getPackages(): Package;

  /**
   * Returns the absolute path name of a native library.  The VM invokes this
   *  method to locate the native libraries that belong to classes loaded with
   *  this class loader. If this method returns <tt>null</tt>, the VM
   *  searches the library along the path specified as the
   *  "<tt>java.library.path</tt>" property.
   * @param libname&#xA; The library name
   * @return The absolute path of the native library
   * @see System#loadLibrary(String)
   * @see System#mapLibraryName(String)
   * @since 1.2
   */
  findLibrary(libname: String | string): string;

  /**
   * Sets the default assertion status for this class loader.  This setting
   *  determines whether classes loaded by this class loader and initialized
   *  in the future will have assertions enabled or disabled by default.
   *  This setting may be overridden on a per-package or per-class basis by
   *  invoking {@link #setPackageAssertionStatus(String, boolean)} or {@link
   *  #setClassAssertionStatus(String, boolean)}.
   * @param enabled&#xA; <tt>true</tt> if classes loaded by this class loader will&#xA; henceforth have assertions enabled by default, <tt>false</tt>&#xA; if they will have assertions disabled by default.
   * @since 1.4
   */
  setDefaultAssertionStatus(enabled: boolean): void;

  /**
   * Sets the package default assertion status for the named package.  The
   *  package default assertion status determines the assertion status for
   *  classes initialized in the future that belong to the named package or
   *  any of its "subpackages".
   *
   *  <p> A subpackage of a package named p is any package whose name begins
   *  with "<tt>p.</tt>".  For example, <tt>javax.swing.text</tt> is a
   *  subpackage of <tt>javax.swing</tt>, and both <tt>java.util</tt> and
   *  <tt>java.lang.reflect</tt> are subpackages of <tt>java</tt>.
   *
   *  <p> In the event that multiple package defaults apply to a given class,
   *  the package default pertaining to the most specific package takes
   *  precedence over the others.  For example, if <tt>javax.lang</tt> and
   *  <tt>javax.lang.reflect</tt> both have package defaults associated with
   *  them, the latter package default applies to classes in
   *  <tt>javax.lang.reflect</tt>.
   *
   *  <p> Package defaults take precedence over the class loader's default
   *  assertion status, and may be overridden on a per-class basis by invoking
   *  {@link #setClassAssertionStatus(String, boolean)}.  </p>
   * @param packageName&#xA; The name of the package whose package default assertion status&#xA; is to be set. A <tt>null</tt> value indicates the unnamed&#xA; package that is "current"&#xA; (see section 7.4.2 of&#xA; <cite>The Java&trade; Language Specification</cite>.)
   * @param enabled&#xA; <tt>true</tt> if classes loaded by this classloader and&#xA; belonging to the named package or any of its subpackages will&#xA; have assertions enabled by default, <tt>false</tt> if they will&#xA; have assertions disabled by default.
   * @since 1.4
   */
  setPackageAssertionStatus(
    packageName: String | string,
    enabled: boolean
  ): void;

  /**
   * Sets the desired assertion status for the named top-level class in this
   *  class loader and any nested classes contained therein.  This setting
   *  takes precedence over the class loader's default assertion status, and
   *  over any applicable per-package default.  This method has no effect if
   *  the named class has already been initialized.  (Once a class is
   *  initialized, its assertion status cannot change.)
   *
   *  <p> If the named class is not a top-level class, this invocation will
   *  have no effect on the actual assertion status of any class. </p>
   * @param className&#xA; The fully qualified class name of the top-level class whose&#xA; assertion status is to be set.
   * @param enabled&#xA; <tt>true</tt> if the named class is to have assertions&#xA; enabled when (and if) it is initialized, <tt>false</tt> if the&#xA; class is to have assertions disabled.
   * @since 1.4
   */
  setClassAssertionStatus(className: String | string, enabled: boolean): void;

  /**
   * Sets the default assertion status for this class loader to
   *  <tt>false</tt> and discards any package defaults or class assertion
   *  status settings associated with the class loader.  This method is
   *  provided so that class loaders can be made to ignore any command line or
   *  persistent assertion status settings and "start with a clean slate."
   * @since 1.4
   */
  clearAssertionStatus(): void;
};
