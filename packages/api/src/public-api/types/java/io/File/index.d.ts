import type { String } from "../../lang/String";

import type { URL } from "../../net/URL";
import type { URI } from "../../net/URI";

import type { FilenameFilter } from "../FilenameFilter";
import type { FileFilter } from "../FileFilter";

import type { Object } from "../../lang/Object";
import type { Path } from "../../nio/file/Path";
import type { Serializable } from "../Serializable";
import type { Comparable } from "../../lang/Comparable";

/**
 * An abstract representation of file and directory pathnames.
 *
 *  <p> User interfaces and operating systems use system-dependent <em>pathname
 *  strings</em> to name files and directories.  This class presents an
 *  abstract, system-independent view of hierarchical pathnames.  An
 *  <em>abstract pathname</em> has two components:
 *
 *  <ol>
 *  <li> An optional system-dependent <em>prefix</em> string,
 *       such as a disk-drive specifier, <code>"/"</code>&nbsp;for the UNIX root
 *       directory, or <code>"\\\\"</code>&nbsp;for a Microsoft Windows UNC pathname, and
 *  <li> A sequence of zero or more string <em>names</em>.
 *  </ol>
 *
 *  The first name in an abstract pathname may be a directory name or, in the
 *  case of Microsoft Windows UNC pathnames, a hostname.  Each subsequent name
 *  in an abstract pathname denotes a directory; the last name may denote
 *  either a directory or a file.  The <em>empty</em> abstract pathname has no
 *  prefix and an empty name sequence.
 *
 *  <p> The conversion of a pathname string to or from an abstract pathname is
 *  inherently system-dependent.  When an abstract pathname is converted into a
 *  pathname string, each name is separated from the next by a single copy of
 *  the default <em>separator character</em>.  The default name-separator
 *  character is defined by the system property <code>file.separator</code>, and
 *  is made available in the public static fields <code>{@link
 *  #separator}</code> and <code>{@link #separatorChar}</code> of this class.
 *  When a pathname string is converted into an abstract pathname, the names
 *  within it may be separated by the default name-separator character or by any
 *  other name-separator character that is supported by the underlying system.
 *
 *  <p> A pathname, whether abstract or in string form, may be either
 *  <em>absolute</em> or <em>relative</em>.  An absolute pathname is complete in
 *  that no other information is required in order to locate the file that it
 *  denotes.  A relative pathname, in contrast, must be interpreted in terms of
 *  information taken from some other pathname.  By default the classes in the
 *  <code>java.io</code> package always resolve relative pathnames against the
 *  current user directory.  This directory is named by the system property
 *  <code>user.dir</code>, and is typically the directory in which the Java
 *  virtual machine was invoked.
 *
 *  <p> The <em>parent</em> of an abstract pathname may be obtained by invoking
 *  the {@link #getParent} method of this class and consists of the pathname's
 *  prefix and each name in the pathname's name sequence except for the last.
 *  Each directory's absolute pathname is an ancestor of any <tt>File</tt>
 *  object with an absolute abstract pathname which begins with the directory's
 *  absolute pathname.  For example, the directory denoted by the abstract
 *  pathname <tt>"/usr"</tt> is an ancestor of the directory denoted by the
 *  pathname <tt>"/usr/local/bin"</tt>.
 *
 *  <p> The prefix concept is used to handle root directories on UNIX platforms,
 *  and drive specifiers, root directories and UNC pathnames on Microsoft Windows platforms,
 *  as follows:
 *
 *  <ul>
 *
 *  <li> For UNIX platforms, the prefix of an absolute pathname is always
 *  <code>"/"</code>.  Relative pathnames have no prefix.  The abstract pathname
 *  denoting the root directory has the prefix <code>"/"</code> and an empty
 *  name sequence.
 *
 *  <li> For Microsoft Windows platforms, the prefix of a pathname that contains a drive
 *  specifier consists of the drive letter followed by <code>":"</code> and
 *  possibly followed by <code>"\\"</code> if the pathname is absolute.  The
 *  prefix of a UNC pathname is <code>"\\\\"</code>; the hostname and the share
 *  name are the first two names in the name sequence.  A relative pathname that
 *  does not specify a drive has no prefix.
 *
 *  </ul>
 *
 *  <p> Instances of this class may or may not denote an actual file-system
 *  object such as a file or a directory.  If it does denote such an object
 *  then that object resides in a <i>partition</i>.  A partition is an
 *  operating system-specific portion of storage for a file system.  A single
 *  storage device (e.g. a physical disk-drive, flash memory, CD-ROM) may
 *  contain multiple partitions.  The object, if any, will reside on the
 *  partition <a name="partName">named</a> by some ancestor of the absolute
 *  form of this pathname.
 *
 *  <p> A file system may implement restrictions to certain operations on the
 *  actual file-system object, such as reading, writing, and executing.  These
 *  restrictions are collectively known as <i>access permissions</i>.  The file
 *  system may have multiple sets of access permissions on a single object.
 *  For example, one set may apply to the object's <i>owner</i>, and another
 *  may apply to all other users.  The access permissions on an object may
 *  cause some methods in this class to fail.
 *
 *  <p> Instances of the <code>File</code> class are immutable; that is, once
 *  created, the abstract pathname represented by a <code>File</code> object
 *  will never change.
 *
 *  <h3>Interoperability with {@code java.nio.file} package</h3>
 *
 *  <p> The <a href="../../java/nio/file/package-summary.html">{@code java.nio.file}</a>
 *  package defines interfaces and classes for the Java virtual machine to access
 *  files, file attributes, and file systems. This API may be used to overcome
 *  many of the limitations of the {@code java.io.File} class.
 *  The {@link #toPath toPath} method may be used to obtain a {@link
 *  Path} that uses the abstract path represented by a {@code File} object to
 *  locate a file. The resulting {@code Path} may be used with the {@link
 *  java.nio.file.Files} class to provide more efficient and extensive access to
 *  additional file operations, file attributes, and I/O exceptions to help
 *  diagnose errors when an operation on a file fails.
 * @author unascribed
 * @since JDK1.0
 */
export type File = Object &
  Serializable &
  Comparable & {
    /**
     * Returns the name of the file or directory denoted by this abstract
     *  pathname.  This is just the last name in the pathname's name
     *  sequence.  If the pathname's name sequence is empty, then the empty
     *  string is returned.
     * @return The name of the file or directory denoted by this abstract&#xA; pathname, or the empty string if this pathname's name sequence&#xA; is empty
     */
    getName(): string;

    /**
     * Returns the pathname string of this abstract pathname's parent, or
     *  <code>null</code> if this pathname does not name a parent directory.
     *
     *  <p> The <em>parent</em> of an abstract pathname consists of the
     *  pathname's prefix, if any, and each name in the pathname's name
     *  sequence except for the last.  If the name sequence is empty then
     *  the pathname does not name a parent directory.
     * @return The pathname string of the parent directory named by this&#xA; abstract pathname, or <code>null</code> if this pathname&#xA; does not name a parent
     */
    getParent(): string;

    /**
     * Returns the abstract pathname of this abstract pathname's parent,
     *  or <code>null</code> if this pathname does not name a parent
     *  directory.
     *
     *  <p> The <em>parent</em> of an abstract pathname consists of the
     *  pathname's prefix, if any, and each name in the pathname's name
     *  sequence except for the last.  If the name sequence is empty then
     *  the pathname does not name a parent directory.
     * @return The abstract pathname of the parent directory named by this&#xA; abstract pathname, or <code>null</code> if this pathname&#xA; does not name a parent
     * @since 1.2
     */
    getParentFile(): File;

    /**
     * Converts this abstract pathname into a pathname string.  The resulting
     *  string uses the {@link #separator default name-separator character} to
     *  separate the names in the name sequence.
     * @return The string form of this abstract pathname
     */
    getPath(): string;

    /**
     * Tests whether this abstract pathname is absolute.  The definition of
     *  absolute pathname is system dependent.  On UNIX systems, a pathname is
     *  absolute if its prefix is <code>"/"</code>.  On Microsoft Windows systems, a
     *  pathname is absolute if its prefix is a drive specifier followed by
     *  <code>"\\"</code>, or if its prefix is <code>"\\\\"</code>.
     * @return <code>true</code> if this abstract pathname is absolute,&#xA; <code>false</code> otherwise
     */
    isAbsolute(): boolean;

    /**
     * Returns the absolute pathname string of this abstract pathname.
     *
     *  <p> If this abstract pathname is already absolute, then the pathname
     *  string is simply returned as if by the <code>{@link #getPath}</code>
     *  method.  If this abstract pathname is the empty abstract pathname then
     *  the pathname string of the current user directory, which is named by the
     *  system property <code>user.dir</code>, is returned.  Otherwise this
     *  pathname is resolved in a system-dependent way.  On UNIX systems, a
     *  relative pathname is made absolute by resolving it against the current
     *  user directory.  On Microsoft Windows systems, a relative pathname is made absolute
     *  by resolving it against the current directory of the drive named by the
     *  pathname, if any; if not, it is resolved against the current user
     *  directory.
     * @return The absolute pathname string denoting the same file or&#xA; directory as this abstract pathname
     * @throws SecurityException&#xA; If a required system property value cannot be accessed.
     * @see java.io.File#isAbsolute()
     */
    getAbsolutePath(): string;

    /**
     * Returns the absolute form of this abstract pathname.  Equivalent to
     *  <code>new&nbsp;File(this.{@link #getAbsolutePath})</code>.
     * @return The absolute abstract pathname denoting the same file or&#xA; directory as this abstract pathname
     * @throws SecurityException&#xA; If a required system property value cannot be accessed.
     * @since 1.2
     */
    getAbsoluteFile(): File;

    /**
     * Returns the canonical pathname string of this abstract pathname.
     *
     *  <p> A canonical pathname is both absolute and unique.  The precise
     *  definition of canonical form is system-dependent.  This method first
     *  converts this pathname to absolute form if necessary, as if by invoking the
     *  {@link #getAbsolutePath} method, and then maps it to its unique form in a
     *  system-dependent way.  This typically involves removing redundant names
     *  such as <tt>"."</tt> and <tt>".."</tt> from the pathname, resolving
     *  symbolic links (on UNIX platforms), and converting drive letters to a
     *  standard case (on Microsoft Windows platforms).
     *
     *  <p> Every pathname that denotes an existing file or directory has a
     *  unique canonical form.  Every pathname that denotes a nonexistent file
     *  or directory also has a unique canonical form.  The canonical form of
     *  the pathname of a nonexistent file or directory may be different from
     *  the canonical form of the same pathname after the file or directory is
     *  created.  Similarly, the canonical form of the pathname of an existing
     *  file or directory may be different from the canonical form of the same
     *  pathname after the file or directory is deleted.
     * @return The canonical pathname string denoting the same file or&#xA; directory as this abstract pathname
     * @throws IOException&#xA; If an I/O error occurs, which is possible because the&#xA; construction of the canonical pathname may require&#xA; filesystem queries
     * @throws SecurityException&#xA; If a required system property value cannot be accessed, or&#xA; if a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkRead}</code> method denies&#xA; read access to the file
     * @since JDK1.1
     * @see Path#toRealPath
     */
    getCanonicalPath(): string;

    /**
     * Returns the canonical form of this abstract pathname.  Equivalent to
     *  <code>new&nbsp;File(this.{@link #getCanonicalPath})</code>.
     * @return The canonical pathname string denoting the same file or&#xA; directory as this abstract pathname
     * @throws IOException&#xA; If an I/O error occurs, which is possible because the&#xA; construction of the canonical pathname may require&#xA; filesystem queries
     * @throws SecurityException&#xA; If a required system property value cannot be accessed, or&#xA; if a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkRead}</code> method denies&#xA; read access to the file
     * @since 1.2
     * @see Path#toRealPath
     */
    getCanonicalFile(): File;

    /**
     * Converts this abstract pathname into a <code>file:</code> URL.  The
     *  exact form of the URL is system-dependent.  If it can be determined that
     *  the file denoted by this abstract pathname is a directory, then the
     *  resulting URL will end with a slash.
     * @return A URL object representing the equivalent file URL
     * @throws MalformedURLException&#xA; If the path cannot be parsed as a URL
     * @see #toURI()
     * @see java.net.URI
     * @see java.net.URI#toURL()
     * @see java.net.URL
     * @since 1.2
     * @deprecated This method does not automatically escape characters that&#xA; are illegal in URLs. It is recommended that new code convert an&#xA; abstract pathname into a URL by first converting it into a URI, via the&#xA; {@link #toURI() toURI} method, and then converting the URI into a URL&#xA; via the {@link java.net.URI#toURL() URI.toURL} method.
     */
    toURL(): URL;

    /**
     * Constructs a <tt>file:</tt> URI that represents this abstract pathname.
     *
     *  <p> The exact form of the URI is system-dependent.  If it can be
     *  determined that the file denoted by this abstract pathname is a
     *  directory, then the resulting URI will end with a slash.
     *
     *  <p> For a given abstract pathname <i>f</i>, it is guaranteed that
     *
     *  <blockquote><tt>
     *  new {@link #File(java.net.URI) File}(</tt><i>&nbsp;f</i><tt>.toURI()).equals(</tt><i>&nbsp;f</i><tt>.{@link #getAbsoluteFile() getAbsoluteFile}())
     *  </tt></blockquote>
     *
     *  so long as the original abstract pathname, the URI, and the new abstract
     *  pathname are all created in (possibly different invocations of) the same
     *  Java virtual machine.  Due to the system-dependent nature of abstract
     *  pathnames, however, this relationship typically does not hold when a
     *  <tt>file:</tt> URI that is created in a virtual machine on one operating
     *  system is converted into an abstract pathname in a virtual machine on a
     *  different operating system.
     *
     *  <p> Note that when this abstract pathname represents a UNC pathname then
     *  all components of the UNC (including the server name component) are encoded
     *  in the {@code URI} path. The authority component is undefined, meaning
     *  that it is represented as {@code null}. The {@link Path} class defines the
     *  {@link Path#toUri toUri} method to encode the server name in the authority
     *  component of the resulting {@code URI}. The {@link #toPath toPath} method
     *  may be used to obtain a {@code Path} representing this abstract pathname.
     * @return An absolute, hierarchical URI with a scheme equal to&#xA; <tt>"file"</tt>, a path representing this abstract pathname,&#xA; and undefined authority, query, and fragment components
     * @throws SecurityException If a required system property value cannot&#xA; be accessed.
     * @see #File(java.net.URI)
     * @see java.net.URI
     * @see java.net.URI#toURL()
     * @since 1.4
     */
    toURI(): URI;

    /**
     * Tests whether the application can read the file denoted by this
     *  abstract pathname. On some platforms it may be possible to start the
     *  Java virtual machine with special privileges that allow it to read
     *  files that are marked as unreadable. Consequently this method may return
     *  {@code true} even though the file does not have read permissions.
     * @return <code>true</code> if and only if the file specified by this&#xA; abstract pathname exists <em>and</em> can be read by the&#xA; application; <code>false</code> otherwise
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkRead(java.lang.String)}</code>&#xA; method denies read access to the file
     */
    canRead(): boolean;

    /**
     * Tests whether the application can modify the file denoted by this
     *  abstract pathname. On some platforms it may be possible to start the
     *  Java virtual machine with special privileges that allow it to modify
     *  files that are marked read-only. Consequently this method may return
     *  {@code true} even though the file is marked read-only.
     * @return <code>true</code> if and only if the file system actually&#xA; contains a file denoted by this abstract pathname <em>and</em>&#xA; the application is allowed to write to the file;&#xA; <code>false</code> otherwise.
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to the file
     */
    canWrite(): boolean;

    /**
     * Tests whether the file or directory denoted by this abstract pathname
     *  exists.
     * @return <code>true</code> if and only if the file or directory denoted&#xA; by this abstract pathname exists; <code>false</code> otherwise
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkRead(java.lang.String)}</code>&#xA; method denies read access to the file or directory
     */
    exists(): boolean;

    /**
     * Tests whether the file denoted by this abstract pathname is a
     *  directory.
     *
     *  <p> Where it is required to distinguish an I/O exception from the case
     *  that the file is not a directory, or where several attributes of the
     *  same file are required at the same time, then the {@link
     *  java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
     *  Files.readAttributes} method may be used.
     * @return <code>true</code> if and only if the file denoted by this&#xA; abstract pathname exists <em>and</em> is a directory;&#xA; <code>false</code> otherwise
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkRead(java.lang.String)}</code>&#xA; method denies read access to the file
     */
    isDirectory(): boolean;

    /**
     * Tests whether the file denoted by this abstract pathname is a normal
     *  file.  A file is <em>normal</em> if it is not a directory and, in
     *  addition, satisfies other system-dependent criteria.  Any non-directory
     *  file created by a Java application is guaranteed to be a normal file.
     *
     *  <p> Where it is required to distinguish an I/O exception from the case
     *  that the file is not a normal file, or where several attributes of the
     *  same file are required at the same time, then the {@link
     *  java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
     *  Files.readAttributes} method may be used.
     * @return <code>true</code> if and only if the file denoted by this&#xA; abstract pathname exists <em>and</em> is a normal file;&#xA; <code>false</code> otherwise
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkRead(java.lang.String)}</code>&#xA; method denies read access to the file
     */
    isFile(): boolean;

    /**
     * Tests whether the file named by this abstract pathname is a hidden
     *  file.  The exact definition of <em>hidden</em> is system-dependent.  On
     *  UNIX systems, a file is considered to be hidden if its name begins with
     *  a period character (<code>'.'</code>).  On Microsoft Windows systems, a file is
     *  considered to be hidden if it has been marked as such in the filesystem.
     * @return <code>true</code> if and only if the file denoted by this&#xA; abstract pathname is hidden according to the conventions of the&#xA; underlying platform
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkRead(java.lang.String)}</code>&#xA; method denies read access to the file
     * @since 1.2
     */
    isHidden(): boolean;

    /**
     * Returns the time that the file denoted by this abstract pathname was
     *  last modified.
     *
     *  <p> Where it is required to distinguish an I/O exception from the case
     *  where {@code 0L} is returned, or where several attributes of the
     *  same file are required at the same time, or where the time of last
     *  access or the creation time are required, then the {@link
     *  java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
     *  Files.readAttributes} method may be used.
     * @return A <code>long</code> value representing the time the file was&#xA; last modified, measured in milliseconds since the epoch&#xA; (00:00:00 GMT, January 1, 1970), or <code>0L</code> if the&#xA; file does not exist or if an I/O error occurs
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkRead(java.lang.String)}</code>&#xA; method denies read access to the file
     */
    lastModified(): number;

    /**
     * Returns the length of the file denoted by this abstract pathname.
     *  The return value is unspecified if this pathname denotes a directory.
     *
     *  <p> Where it is required to distinguish an I/O exception from the case
     *  that {@code 0L} is returned, or where several attributes of the same file
     *  are required at the same time, then the {@link
     *  java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
     *  Files.readAttributes} method may be used.
     * @return The length, in bytes, of the file denoted by this abstract&#xA; pathname, or <code>0L</code> if the file does not exist. Some&#xA; operating systems may return <code>0L</code> for pathnames&#xA; denoting system-dependent entities such as devices or pipes.
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkRead(java.lang.String)}</code>&#xA; method denies read access to the file
     */
    length(): number;

    /**
     * Atomically creates a new, empty file named by this abstract pathname if
     *  and only if a file with this name does not yet exist.  The check for the
     *  existence of the file and the creation of the file if it does not exist
     *  are a single operation that is atomic with respect to all other
     *  filesystem activities that might affect the file.
     *  <P>
     *  Note: this method should <i>not</i> be used for file-locking, as
     *  the resulting protocol cannot be made to work reliably. The
     *  {@link java.nio.channels.FileLock FileLock}
     *  facility should be used instead.
     * @return <code>true</code> if the named file does not exist and was&#xA; successfully created; <code>false</code> if the named file&#xA; already exists
     * @throws IOException&#xA; If an I/O error occurred
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to the file
     * @since 1.2
     */
    createNewFile(): boolean;

    /**
     * Deletes the file or directory denoted by this abstract pathname.  If
     *  this pathname denotes a directory, then the directory must be empty in
     *  order to be deleted.
     *
     *  <p> Note that the {@link java.nio.file.Files} class defines the {@link
     *  java.nio.file.Files#delete(Path) delete} method to throw an {@link IOException}
     *  when a file cannot be deleted. This is useful for error reporting and to
     *  diagnose why a file cannot be deleted.
     * @return <code>true</code> if and only if the file or directory is&#xA; successfully deleted; <code>false</code> otherwise
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkDelete}</code> method denies&#xA; delete access to the file
     */
    delete(): boolean;

    /**
     * Requests that the file or directory denoted by this abstract
     *  pathname be deleted when the virtual machine terminates.
     *  Files (or directories) are deleted in the reverse order that
     *  they are registered. Invoking this method to delete a file or
     *  directory that is already registered for deletion has no effect.
     *  Deletion will be attempted only for normal termination of the
     *  virtual machine, as defined by the Java Language Specification.
     *
     *  <p> Once deletion has been requested, it is not possible to cancel the
     *  request.  This method should therefore be used with care.
     *
     *  <P>
     *  Note: this method should <i>not</i> be used for file-locking, as
     *  the resulting protocol cannot be made to work reliably. The
     *  {@link java.nio.channels.FileLock FileLock}
     *  facility should be used instead.
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkDelete}</code> method denies&#xA; delete access to the file
     * @see #delete
     * @since 1.2
     */
    deleteOnExit(): void;

    /**
     * Returns an array of strings naming the files and directories in the
     *  directory denoted by this abstract pathname.
     *
     *  <p> If this abstract pathname does not denote a directory, then this
     *  method returns {@code null}.  Otherwise an array of strings is
     *  returned, one for each file or directory in the directory.  Names
     *  denoting the directory itself and the directory's parent directory are
     *  not included in the result.  Each string is a file name rather than a
     *  complete path.
     *
     *  <p> There is no guarantee that the name strings in the resulting array
     *  will appear in any specific order; they are not, in particular,
     *  guaranteed to appear in alphabetical order.
     *
     *  <p> Note that the {@link java.nio.file.Files} class defines the {@link
     *  java.nio.file.Files#newDirectoryStream(Path) newDirectoryStream} method to
     *  open a directory and iterate over the names of the files in the directory.
     *  This may use less resources when working with very large directories, and
     *  may be more responsive when working with remote directories.
     * @return An array of strings naming the files and directories in the&#xA; directory denoted by this abstract pathname. The array will be&#xA; empty if the directory is empty. Returns {@code null} if&#xA; this abstract pathname does not denote a directory, or if an&#xA; I/O error occurs.
     * @throws SecurityException&#xA; If a security manager exists and its {@link&#xA; SecurityManager#checkRead(String)} method denies read access to&#xA; the directory
     */
    list(): string;

    /**
     * Returns an array of strings naming the files and directories in the
     *  directory denoted by this abstract pathname that satisfy the specified
     *  filter.  The behavior of this method is the same as that of the
     *  {@link #list()} method, except that the strings in the returned array
     *  must satisfy the filter.  If the given {@code filter} is {@code null}
     *  then all names are accepted.  Otherwise, a name satisfies the filter if
     *  and only if the value {@code true} results when the {@link
     *  FilenameFilter#accept FilenameFilter.accept(File,&nbsp;String)} method
     *  of the filter is invoked on this abstract pathname and the name of a
     *  file or directory in the directory that it denotes.
     * @param filter&#xA; A filename filter
     * @return An array of strings naming the files and directories in the&#xA; directory denoted by this abstract pathname that were accepted&#xA; by the given {@code filter}. The array will be empty if the&#xA; directory is empty or if no names were accepted by the filter.&#xA; Returns {@code null} if this abstract pathname does not denote&#xA; a directory, or if an I/O error occurs.
     * @throws SecurityException&#xA; If a security manager exists and its {@link&#xA; SecurityManager#checkRead(String)} method denies read access to&#xA; the directory
     * @see java.nio.file.Files#newDirectoryStream(Path,String)
     */
    list(filter: FilenameFilter): string;

    /**
     * Returns an array of abstract pathnames denoting the files in the
     *  directory denoted by this abstract pathname.
     *
     *  <p> If this abstract pathname does not denote a directory, then this
     *  method returns {@code null}.  Otherwise an array of {@code File} objects
     *  is returned, one for each file or directory in the directory.  Pathnames
     *  denoting the directory itself and the directory's parent directory are
     *  not included in the result.  Each resulting abstract pathname is
     *  constructed from this abstract pathname using the {@link #File(File,
     *  String) File(File,&nbsp;String)} constructor.  Therefore if this
     *  pathname is absolute then each resulting pathname is absolute; if this
     *  pathname is relative then each resulting pathname will be relative to
     *  the same directory.
     *
     *  <p> There is no guarantee that the name strings in the resulting array
     *  will appear in any specific order; they are not, in particular,
     *  guaranteed to appear in alphabetical order.
     *
     *  <p> Note that the {@link java.nio.file.Files} class defines the {@link
     *  java.nio.file.Files#newDirectoryStream(Path) newDirectoryStream} method
     *  to open a directory and iterate over the names of the files in the
     *  directory. This may use less resources when working with very large
     *  directories.
     * @return An array of abstract pathnames denoting the files and&#xA; directories in the directory denoted by this abstract pathname.&#xA; The array will be empty if the directory is empty. Returns&#xA; {@code null} if this abstract pathname does not denote a&#xA; directory, or if an I/O error occurs.
     * @throws SecurityException&#xA; If a security manager exists and its {@link&#xA; SecurityManager#checkRead(String)} method denies read access to&#xA; the directory
     * @since 1.2
     */
    listFiles(): File;

    /**
     * Returns an array of abstract pathnames denoting the files and
     *  directories in the directory denoted by this abstract pathname that
     *  satisfy the specified filter.  The behavior of this method is the same
     *  as that of the {@link #listFiles()} method, except that the pathnames in
     *  the returned array must satisfy the filter.  If the given {@code filter}
     *  is {@code null} then all pathnames are accepted.  Otherwise, a pathname
     *  satisfies the filter if and only if the value {@code true} results when
     *  the {@link FilenameFilter#accept
     *  FilenameFilter.accept(File,&nbsp;String)} method of the filter is
     *  invoked on this abstract pathname and the name of a file or directory in
     *  the directory that it denotes.
     * @param filter&#xA; A filename filter
     * @return An array of abstract pathnames denoting the files and&#xA; directories in the directory denoted by this abstract pathname.&#xA; The array will be empty if the directory is empty. Returns&#xA; {@code null} if this abstract pathname does not denote a&#xA; directory, or if an I/O error occurs.
     * @throws SecurityException&#xA; If a security manager exists and its {@link&#xA; SecurityManager#checkRead(String)} method denies read access to&#xA; the directory
     * @since 1.2
     * @see java.nio.file.Files#newDirectoryStream(Path,String)
     */
    listFiles(filter: FilenameFilter): File;

    /**
     * Returns an array of abstract pathnames denoting the files and
     *  directories in the directory denoted by this abstract pathname that
     *  satisfy the specified filter.  The behavior of this method is the same
     *  as that of the {@link #listFiles()} method, except that the pathnames in
     *  the returned array must satisfy the filter.  If the given {@code filter}
     *  is {@code null} then all pathnames are accepted.  Otherwise, a pathname
     *  satisfies the filter if and only if the value {@code true} results when
     *  the {@link FileFilter#accept FileFilter.accept(File)} method of the
     *  filter is invoked on the pathname.
     * @param filter&#xA; A file filter
     * @return An array of abstract pathnames denoting the files and&#xA; directories in the directory denoted by this abstract pathname.&#xA; The array will be empty if the directory is empty. Returns&#xA; {@code null} if this abstract pathname does not denote a&#xA; directory, or if an I/O error occurs.
     * @throws SecurityException&#xA; If a security manager exists and its {@link&#xA; SecurityManager#checkRead(String)} method denies read access to&#xA; the directory
     * @since 1.2
     * @see java.nio.file.Files#newDirectoryStream(Path,java.nio.file.DirectoryStream.Filter)
     */
    listFiles(filter: FileFilter): File;

    /**
     * Creates the directory named by this abstract pathname.
     * @return <code>true</code> if and only if the directory was&#xA; created; <code>false</code> otherwise
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method does not permit the named directory to be created
     */
    mkdir(): boolean;

    /**
     * Creates the directory named by this abstract pathname, including any
     *  necessary but nonexistent parent directories.  Note that if this
     *  operation fails it may have succeeded in creating some of the necessary
     *  parent directories.
     * @return <code>true</code> if and only if the directory was created,&#xA; along with all necessary parent directories; <code>false</code>&#xA; otherwise
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkRead(java.lang.String)}</code>&#xA; method does not permit verification of the existence of the&#xA; named directory and all necessary parent directories; or if&#xA; the <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method does not permit the named directory and all necessary&#xA; parent directories to be created
     */
    mkdirs(): boolean;

    /**
     * Renames the file denoted by this abstract pathname.
     *
     *  <p> Many aspects of the behavior of this method are inherently
     *  platform-dependent: The rename operation might not be able to move a
     *  file from one filesystem to another, it might not be atomic, and it
     *  might not succeed if a file with the destination abstract pathname
     *  already exists.  The return value should always be checked to make sure
     *  that the rename operation was successful.
     *
     *  <p> Note that the {@link java.nio.file.Files} class defines the {@link
     *  java.nio.file.Files#move move} method to move or rename a file in a
     *  platform independent manner.
     * @param dest The new abstract pathname for the named file
     * @return <code>true</code> if and only if the renaming succeeded;&#xA; <code>false</code> otherwise
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to either the old or new pathnames
     * @throws NullPointerException&#xA; If parameter <code>dest</code> is <code>null</code>
     */
    renameTo(dest: File): boolean;

    /**
     * Sets the last-modified time of the file or directory named by this
     *  abstract pathname.
     *
     *  <p> All platforms support file-modification times to the nearest second,
     *  but some provide more precision.  The argument will be truncated to fit
     *  the supported precision.  If the operation succeeds and no intervening
     *  operations on the file take place, then the next invocation of the
     *  <code>{@link #lastModified}</code> method will return the (possibly
     *  truncated) <code>time</code> argument that was passed to this method.
     * @param time The new last-modified time, measured in milliseconds since&#xA; the epoch (00:00:00 GMT, January 1, 1970)
     * @return <code>true</code> if and only if the operation succeeded;&#xA; <code>false</code> otherwise
     * @throws IllegalArgumentException If the argument is negative
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to the named file
     * @since 1.2
     */
    setLastModified(time: number): boolean;

    /**
     * Marks the file or directory named by this abstract pathname so that
     *  only read operations are allowed. After invoking this method the file
     *  or directory will not change until it is either deleted or marked
     *  to allow write access. On some platforms it may be possible to start the
     *  Java virtual machine with special privileges that allow it to modify
     *  files that are marked read-only. Whether or not a read-only file or
     *  directory may be deleted depends upon the underlying system.
     * @return <code>true</code> if and only if the operation succeeded;&#xA; <code>false</code> otherwise
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to the named file
     * @since 1.2
     */
    setReadOnly(): boolean;

    /**
     * Sets the owner's or everybody's write permission for this abstract
     *  pathname. On some platforms it may be possible to start the Java virtual
     *  machine with special privileges that allow it to modify files that
     *  disallow write operations.
     *
     *  <p> The {@link java.nio.file.Files} class defines methods that operate on
     *  file attributes including file permissions. This may be used when finer
     *  manipulation of file permissions is required.
     * @param writable&#xA; If <code>true</code>, sets the access permission to allow write&#xA; operations; if <code>false</code> to disallow write operations
     * @param ownerOnly&#xA; If <code>true</code>, the write permission applies only to the&#xA; owner's write permission; otherwise, it applies to everybody. If&#xA; the underlying file system can not distinguish the owner's write&#xA; permission from that of others, then the permission will apply to&#xA; everybody, regardless of this value.
     * @return <code>true</code> if and only if the operation succeeded. The&#xA; operation will fail if the user does not have permission to change&#xA; the access permissions of this abstract pathname.
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to the named file
     * @since 1.6
     */
    setWritable(writable: boolean, ownerOnly: boolean): boolean;

    /**
     * A convenience method to set the owner's write permission for this abstract
     *  pathname. On some platforms it may be possible to start the Java virtual
     *  machine with special privileges that allow it to modify files that
     *  disallow write operations.
     *
     *  <p> An invocation of this method of the form <tt>file.setWritable(arg)</tt>
     *  behaves in exactly the same way as the invocation
     *
     *  <pre>
     *      file.setWritable(arg, true) </pre>
     * @param writable&#xA; If <code>true</code>, sets the access permission to allow write&#xA; operations; if <code>false</code> to disallow write operations
     * @return <code>true</code> if and only if the operation succeeded. The&#xA; operation will fail if the user does not have permission to&#xA; change the access permissions of this abstract pathname.
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to the file
     * @since 1.6
     */
    setWritable(writable: boolean): boolean;

    /**
     * Sets the owner's or everybody's read permission for this abstract
     *  pathname. On some platforms it may be possible to start the Java virtual
     *  machine with special privileges that allow it to read files that are
     *  marked as unreadable.
     *
     *  <p> The {@link java.nio.file.Files} class defines methods that operate on
     *  file attributes including file permissions. This may be used when finer
     *  manipulation of file permissions is required.
     * @param readable&#xA; If <code>true</code>, sets the access permission to allow read&#xA; operations; if <code>false</code> to disallow read operations
     * @param ownerOnly&#xA; If <code>true</code>, the read permission applies only to the&#xA; owner's read permission; otherwise, it applies to everybody. If&#xA; the underlying file system can not distinguish the owner's read&#xA; permission from that of others, then the permission will apply to&#xA; everybody, regardless of this value.
     * @return <code>true</code> if and only if the operation succeeded. The&#xA; operation will fail if the user does not have permission to&#xA; change the access permissions of this abstract pathname. If&#xA; <code>readable</code> is <code>false</code> and the underlying&#xA; file system does not implement a read permission, then the&#xA; operation will fail.
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to the file
     * @since 1.6
     */
    setReadable(readable: boolean, ownerOnly: boolean): boolean;

    /**
     * A convenience method to set the owner's read permission for this abstract
     *  pathname. On some platforms it may be possible to start the Java virtual
     *  machine with special privileges that allow it to read files that that are
     *  marked as unreadable.
     *
     *  <p>An invocation of this method of the form <tt>file.setReadable(arg)</tt>
     *  behaves in exactly the same way as the invocation
     *
     *  <pre>
     *      file.setReadable(arg, true) </pre>
     * @param readable&#xA; If <code>true</code>, sets the access permission to allow read&#xA; operations; if <code>false</code> to disallow read operations
     * @return <code>true</code> if and only if the operation succeeded. The&#xA; operation will fail if the user does not have permission to&#xA; change the access permissions of this abstract pathname. If&#xA; <code>readable</code> is <code>false</code> and the underlying&#xA; file system does not implement a read permission, then the&#xA; operation will fail.
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to the file
     * @since 1.6
     */
    setReadable(readable: boolean): boolean;

    /**
     * Sets the owner's or everybody's execute permission for this abstract
     *  pathname. On some platforms it may be possible to start the Java virtual
     *  machine with special privileges that allow it to execute files that are
     *  not marked executable.
     *
     *  <p> The {@link java.nio.file.Files} class defines methods that operate on
     *  file attributes including file permissions. This may be used when finer
     *  manipulation of file permissions is required.
     * @param executable&#xA; If <code>true</code>, sets the access permission to allow execute&#xA; operations; if <code>false</code> to disallow execute operations
     * @param ownerOnly&#xA; If <code>true</code>, the execute permission applies only to the&#xA; owner's execute permission; otherwise, it applies to everybody.&#xA; If the underlying file system can not distinguish the owner's&#xA; execute permission from that of others, then the permission will&#xA; apply to everybody, regardless of this value.
     * @return <code>true</code> if and only if the operation succeeded. The&#xA; operation will fail if the user does not have permission to&#xA; change the access permissions of this abstract pathname. If&#xA; <code>executable</code> is <code>false</code> and the underlying&#xA; file system does not implement an execute permission, then the&#xA; operation will fail.
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to the file
     * @since 1.6
     */
    setExecutable(executable: boolean, ownerOnly: boolean): boolean;

    /**
     * A convenience method to set the owner's execute permission for this
     *  abstract pathname. On some platforms it may be possible to start the Java
     *  virtual machine with special privileges that allow it to execute files
     *  that are not marked executable.
     *
     *  <p>An invocation of this method of the form <tt>file.setExcutable(arg)</tt>
     *  behaves in exactly the same way as the invocation
     *
     *  <pre>
     *      file.setExecutable(arg, true) </pre>
     * @param executable&#xA; If <code>true</code>, sets the access permission to allow execute&#xA; operations; if <code>false</code> to disallow execute operations
     * @return <code>true</code> if and only if the operation succeeded. The&#xA; operation will fail if the user does not have permission to&#xA; change the access permissions of this abstract pathname. If&#xA; <code>executable</code> is <code>false</code> and the underlying&#xA; file system does not implement an execute permission, then the&#xA; operation will fail.
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkWrite(java.lang.String)}</code>&#xA; method denies write access to the file
     * @since 1.6
     */
    setExecutable(executable: boolean): boolean;

    /**
     * Tests whether the application can execute the file denoted by this
     *  abstract pathname. On some platforms it may be possible to start the
     *  Java virtual machine with special privileges that allow it to execute
     *  files that are not marked executable. Consequently this method may return
     *  {@code true} even though the file does not have execute permissions.
     * @return <code>true</code> if and only if the abstract pathname exists&#xA; <em>and</em> the application is allowed to execute the file
     * @throws SecurityException&#xA; If a security manager exists and its <code>{@link&#xA; java.lang.SecurityManager#checkExec(java.lang.String)}</code>&#xA; method denies execute access to the file
     * @since 1.6
     */
    canExecute(): boolean;

    /**
     * Returns the size of the partition <a href="#partName">named</a> by this
     *  abstract pathname.
     * @return The size, in bytes, of the partition or <tt>0L</tt> if this&#xA; abstract pathname does not name a partition
     * @throws SecurityException&#xA; If a security manager has been installed and it denies&#xA; {@link RuntimePermission}<tt>("getFileSystemAttributes")</tt>&#xA; or its {@link SecurityManager#checkRead(String)} method denies&#xA; read access to the file named by this abstract pathname
     * @since 1.6
     */
    getTotalSpace(): number;

    /**
     * Returns the number of unallocated bytes in the partition <a
     *  href="#partName">named</a> by this abstract path name.
     *
     *  <p> The returned number of unallocated bytes is a hint, but not
     *  a guarantee, that it is possible to use most or any of these
     *  bytes.  The number of unallocated bytes is most likely to be
     *  accurate immediately after this call.  It is likely to be made
     *  inaccurate by any external I/O operations including those made
     *  on the system outside of this virtual machine.  This method
     *  makes no guarantee that write operations to this file system
     *  will succeed.
     * @return The number of unallocated bytes on the partition or <tt>0L</tt>&#xA; if the abstract pathname does not name a partition. This&#xA; value will be less than or equal to the total file system size&#xA; returned by {@link #getTotalSpace}.
     * @throws SecurityException&#xA; If a security manager has been installed and it denies&#xA; {@link RuntimePermission}<tt>("getFileSystemAttributes")</tt>&#xA; or its {@link SecurityManager#checkRead(String)} method denies&#xA; read access to the file named by this abstract pathname
     * @since 1.6
     */
    getFreeSpace(): number;

    /**
     * Returns the number of bytes available to this virtual machine on the
     *  partition <a href="#partName">named</a> by this abstract pathname.  When
     *  possible, this method checks for write permissions and other operating
     *  system restrictions and will therefore usually provide a more accurate
     *  estimate of how much new data can actually be written than {@link
     *  #getFreeSpace}.
     *
     *  <p> The returned number of available bytes is a hint, but not a
     *  guarantee, that it is possible to use most or any of these bytes.  The
     *  number of unallocated bytes is most likely to be accurate immediately
     *  after this call.  It is likely to be made inaccurate by any external
     *  I/O operations including those made on the system outside of this
     *  virtual machine.  This method makes no guarantee that write operations
     *  to this file system will succeed.
     * @return The number of available bytes on the partition or <tt>0L</tt>&#xA; if the abstract pathname does not name a partition. On&#xA; systems where this information is not available, this method&#xA; will be equivalent to a call to {@link #getFreeSpace}.
     * @throws SecurityException&#xA; If a security manager has been installed and it denies&#xA; {@link RuntimePermission}<tt>("getFileSystemAttributes")</tt>&#xA; or its {@link SecurityManager#checkRead(String)} method denies&#xA; read access to the file named by this abstract pathname
     * @since 1.6
     */
    getUsableSpace(): number;

    /**
     * Compares two abstract pathnames lexicographically.  The ordering
     *  defined by this method depends upon the underlying system.  On UNIX
     *  systems, alphabetic case is significant in comparing pathnames; on Microsoft Windows
     *  systems it is not.
     * @param pathname The abstract pathname to be compared to this abstract&#xA; pathname
     * @return Zero if the argument is equal to this abstract pathname, a&#xA; value less than zero if this abstract pathname is&#xA; lexicographically less than the argument, or a value greater&#xA; than zero if this abstract pathname is lexicographically&#xA; greater than the argument
     * @since 1.2
     */
    compareTo(pathname: File): number;

    /**
     * Tests this abstract pathname for equality with the given object.
     *  Returns <code>true</code> if and only if the argument is not
     *  <code>null</code> and is an abstract pathname that denotes the same file
     *  or directory as this abstract pathname.  Whether or not two abstract
     *  pathnames are equal depends upon the underlying system.  On UNIX
     *  systems, alphabetic case is significant in comparing pathnames; on Microsoft Windows
     *  systems it is not.
     * @param obj The object to be compared with this abstract pathname
     * @return <code>true</code> if and only if the objects are the same;&#xA; <code>false</code> otherwise
     */
    equals(obj: unknown): boolean;

    /**
     * Computes a hash code for this abstract pathname.  Because equality of
     *  abstract pathnames is inherently system-dependent, so is the computation
     *  of their hash codes.  On UNIX systems, the hash code of an abstract
     *  pathname is equal to the exclusive <em>or</em> of the hash code
     *  of its pathname string and the decimal value
     *  <code>1234321</code>.  On Microsoft Windows systems, the hash
     *  code is equal to the exclusive <em>or</em> of the hash code of
     *  its pathname string converted to lower case and the decimal
     *  value <code>1234321</code>.  Locale is not taken into account on
     *  lowercasing the pathname string.
     * @return A hash code for this abstract pathname
     */
    hashCode(): number;

    /**
     * Returns the pathname string of this abstract pathname.  This is just the
     *  string returned by the <code>{@link #getPath}</code> method.
     * @return The string form of this abstract pathname
     */
    toString(): string;

    /**
     * Returns a {@link Path java.nio.file.Path} object constructed from the
     *  this abstract path. The resulting {@code Path} is associated with the
     *  {@link java.nio.file.FileSystems#getDefault default-filesystem}.
     *
     *  <p> The first invocation of this method works as if invoking it were
     *  equivalent to evaluating the expression:
     *  <blockquote><pre>
     *  {@link java.nio.file.FileSystems#getDefault FileSystems.getDefault}().{@link
     *  java.nio.file.FileSystem#getPath getPath}(this.{@link #getPath getPath}());
     *  </pre></blockquote>
     *  Subsequent invocations of this method return the same {@code Path}.
     *
     *  <p> If this abstract pathname is the empty abstract pathname then this
     *  method returns a {@code Path} that may be used to access the current
     *  user directory.
     * @return a {@code Path} constructed from this abstract path
     * @throws java.nio.file.InvalidPathException&#xA; if a {@code Path} object cannot be constructed from the abstract&#xA; path (see {@link java.nio.file.FileSystem#getPath FileSystem.getPath})
     * @since 1.7
     * @see Path#toFile
     */
    toPath(): Path;

    /**
     * The system-dependent default name-separator character.  This field is
     *  initialized to contain the first character of the value of the system
     *  property <code>file.separator</code>.  On UNIX systems the value of this
     *  field is <code>'/'</code>; on Microsoft Windows systems it is <code>'\\'</code>.
     * @see java.lang.System#getProperty(java.lang.String)
     */
    separatorChar: string;

    /**
 * The system-dependent default name-separator character, represented as a
 *  string for convenience.  This string contains a single character, namely
 *  <code>{@link #separatorChar}</code>.
  
    */
    separator: string;

    /**
     * The system-dependent path-separator character.  This field is
     *  initialized to contain the first character of the value of the system
     *  property <code>path.separator</code>.  This character is used to
     *  separate filenames in a sequence of files given as a <em>path list</em>.
     *  On UNIX systems, this character is <code>':'</code>; on Microsoft Windows systems it
     *  is <code>';'</code>.
     * @see java.lang.System#getProperty(java.lang.String)
     */
    pathSeparatorChar: string;

    /**
 * The system-dependent path-separator character, represented as a string
 *  for convenience.  This string contains a single character, namely
 *  <code>{@link #pathSeparatorChar}</code>.
  
    */
    pathSeparator: string;
  };
