/**
 * An event fired by the observation mechanism.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
export type Event = {
  /**
   * Returns the type of this event: a constant defined by this interface. One
   * of: <ul> <li><code>NODE_ADDED</code></li> <li><code>NODE_REMOVED</code></li>
   * <li><code>PROPERTY_ADDED</code></li> <li><code>PROPERTY_REMOVED</code></li>
   * <li><code>PROPERTY_CHANGED</code></li> <li><code>NODE_MOVED</code></li>
   * <li><code>PERSIST</code></li> </ul>
   * @return the type of this event.
   */
  getType(): number;

  /**
   * Returns the absolute path associated with this event or <code>null</code>
   * if this event has no associated identifier. The meaning of the associated
   * path depends upon the type of the event. See event type constants above.
   * @return the absolute path associated with this event or <code>null</code>.
   * @throws RepositoryException if an error occurs.
   */
  getPath(): string;

  /**
   * Returns the user ID connected with this event. This is the string
   * returned by {@link javax.jcr.Session#getUserID} of the session that
   * caused the event.
   * @return the user ID.
   */
  getUserID(): string;

  /**
   * Returns the identifier associated with this event or <code>null</code> if
   * this event has no associated identifier. The meaning of the associated
   * identifier depends upon the type of the event. See event type constants
   * above.
   * @return the identifier associated with this event or <code>null</code>.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getIdentifier(): string;

  /**
   * Returns the information map associated with this event. The meaning of
   * the map depends upon the type of the event. See event type constants
   * above.
   * @return A <code>Map</code> containing parameter information for instances of a <code>NODE_MOVED</code> event.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getInfo(): unknown;

  /**
   * Returns the user data set through {@link ObservationManager#setUserData}
   * on the <code>ObservationManager</code> bound to the <code>Session</code>
   * that caused the event.
   * @return The user data string.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getUserData(): string;

  /**
   * Returns the date when the change was persisted that caused this event.
   * The date is represented as a millisecond value that is an offset from the
   * Epoch, January 1, 1970 00:00:00.000 GMT (Gregorian). The granularity of
   * the returned value is implementation dependent.
   * @return the date when the change was persisted that caused this event.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getDate(): number;

  /**
 * Generated on persist when a node is added. <ul> <li>{@link #getPath}
 * returns the absolute path of the node that was added.</li> <li>{@link
 * #getIdentifier} returns the identifier of the node that was added.</li>
 * <li>{@link #getInfo} returns an empty <code>Map</code> object.</li>
 * </ul>
  
    */
  NODE_ADDED: number;

  /**
 * Generated on persist when a node is removed. <ul> <li>{@link #getPath}
 * returns the absolute path of the node that was removed.</li> <li>{@link
 * #getIdentifier} returns the identifier of the node that was removed.</li>
 * <li>{@link #getInfo} returns an empty <code>Map</code> object.</li>
 * </ul>
  
    */
  NODE_REMOVED: number;

  /**
 * Generated on persist when a property is added. <ul> <li>{@link #getPath}
 * returns the absolute path of the property that was added.</li> <li>{@link
 * #getIdentifier} returns the identifier of the parent node of the property
 * that was added. <li>{@link #getInfo} returns an empty <code>Map</code>
 * object.</li> </ul>
  
    */
  PROPERTY_ADDED: number;

  /**
 * Generated on persist when a property is removed. <ul> <li>{@link
 * #getPath} returns the absolute path of the property that was
 * removed.</li> <li>{@link #getIdentifier} returns the identifier of the
 * parent node of the property that was removed. <li>{@link #getInfo}
 * returns an empty <code>Map</code> object.</li> </ul>
  
    */
  PROPERTY_REMOVED: number;

  /**
 * Generated on persist when a property is changed. <ul> <li>{@link
 * #getPath} returns the absolute path of the property that was
 * changed.</li> <li>{@link #getIdentifier} returns the identifier of the
 * parent node of the property that was changed. <li>{@link #getInfo}
 * returns an empty <code>Map</code> object.</li> </ul>
  
    */
  PROPERTY_CHANGED: number;

  /**
   * Generated on persist when a node is moved. <ul> <li>{@link #getPath}
   * returns the absolute path of the destination of the move.</li> <li>{@link
   * #getIdentifier} returns the identifier of the moved node. <li> {@link
   * #getInfo} If the method that caused this event was a {@link
   * javax.jcr.Session#move Session.move} or {@link javax.jcr.Workspace#move
   * Workspace.move} then the returned {@link java.util.Map Map} has keys
   * <code>srcAbsPath</code> and <code>destAbsPath</code> with values
   * corresponding to the parameters passed to the <code>move</code> method.
   * <p>
   * If the method that caused this event was a {@link
   * javax.jcr.Node#orderBefore Node.orderBefore} then the returned
   * <code>Map</code> has keys <code>srcChildRelPath</code> and
   * <code>destChildRelPath</code> with values corresponding to the parameters
   * passed to the <code>orderBefore</code> method. </li> </ul>
   * @since JCR 2.0
   */
  NODE_MOVED: number;

  /**
   * If event bundling is supported, this event is used to indicate a bundle
   * boundary within the event journal. <ul> <li>{@link #getPath} returns
   * <code>null</code>.</li> <li>{@link #getIdentifier} returns
   * <code>null</code>.</li> <li>{@link #getInfo} returns an empty
   * <code>Map</code> object.</li> </ul>
   * @since JCR 2.0
   */
  PERSIST: number;
};
