declare namespace privileged {
  /**
   * Returns true if there are a service user configured for usage for the app. Returns false if not
   *
   * @since 7.0
   */
  function isConfigured();

  /**
   * Gets the user the privileged action will run as. Will be null if isConfigured is false
   *
   *  @since 7.0
   */
  function getPrivilegedActionUser();

  /**
   * Executes a callback function as the privileged action user. Callback will be executed as current user if isConfigured is false
   *
   * @since 7.0
   * @param callback The callback to trigger as the privileged action user
   */
  function doPrivilegedAction(callback: () => void): void;
}

export default privileged;
