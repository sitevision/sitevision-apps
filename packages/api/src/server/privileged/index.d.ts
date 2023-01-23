import type { Node } from '../../types/javax/jcr/Node';

export interface Privileged {
  /**
   * Returns true if there are a service user configured for usage for the app. Returns false if not
   *
   * @since 7.0
   */
  isConfigured(): boolean;

  /**
   * Gets the user the privileged action will run as. Will be null if isConfigured is false
   *
   *  @since 7.0
   */
  getPrivilegedActionUser(): Node | null;

  /**
   * Executes a callback function as the privileged action user. Callback will be executed as current user if isConfigured is false
   *
   * @since 7.0
   * @param callback The callback to trigger as the privileged action user
   */
  doPrivilegedAction(callback: () => void): void;
}

declare namespace Privileged {}

declare var privileged: Privileged;

export default privileged;
