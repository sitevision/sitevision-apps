import type { VersionException } from "../VersionException";

/**
 * Exception thrown by <code>VersionHistory.addVersionLabel</code> if
 *  <code>moveLabel</code> is set to <code>false</code> and an attempt is made to
 *  add a label that already exists in the <code>VersionHistory</code>.
 * @since JCR 2.0
 */
export type LabelExistsVersionException = VersionException & {};
