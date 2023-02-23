import type { MailBuilder } from "../MailBuilder";
import type { String } from "../../types/java/lang/String";

/**
 * Mail utility interface.
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getMailUtil()}.
 *  See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 *
 *  <p>
 *     <em>Note!</em> To send one or more mails, you must use a {@link MailBuilder}.
 *     Use the {@link #getMailBuilder()} method to get a builder instance.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface MailUtil {
  /**
   * Returns a mail builder for creating mails.
   * @return a mail builder
   */
  getMailBuilder(): MailBuilder;

  /**
   * Checks if a mail address has a valid format.
   * @param aMailAddress the address to check
   * @return <code>true</code> if <code>aMailAddress</code> has a valid format and can be used to create a&#xA; <code>javax.mail.internet.InternetAddress</code>, <code>false</code> otherwise.
   */
  isValidAddress(aMailAddress: String | string): boolean;

  /**
   * Gets the mail address of the site responsible.
   *
   *  <p>
   *     <strong>Note!</strong> The returned address is <em>not</em> validated, i.e. it might be an invalid mail address.
   *  </p>
   * @return the mail address of the site responsible, or <code>null</code> if there are no address or if it's whitespace only
   */
  getSiteResponsibleAddress(): string;

  /**
   * Gets the from mail address of current site.
   *
   *  <p>
   *     <strong>Note!</strong> The returned address is <em>not</em> validated, i.e. it might be an invalid mail address.
   *  </p>
   * @return the from mail address of current site, or <code>null</code> if there are no address or if it's whitespace only
   */
  getSiteFromAddress(): string;

  /**
   * Gets the mail address of the server responsible.
   *
   *  <p>
   *     <strong>Note!</strong> The returned address is <em>not</em> validated, i.e. it might be an invalid mail address.
   *  </p>
   * @return the mail address of the server responsible, or <code>null</code> if there are no address or if it's whitespace only
   */
  getServerResponsibleAddress(): string;

  /**
   * Gets the server from mail address.
   *
   *  <p>
   *     <strong>Note!</strong> The returned address is <em>not</em> validated, i.e. it might be an invalid mail address.
   *  </p>
   * @return the server from mail address, or <code>null</code> if there are no address or if it's whitespace only
   */
  getServerFromAddress(): string;
}

declare namespace MailUtil {}

declare var mailUtil: MailUtil;

export default mailUtil;
