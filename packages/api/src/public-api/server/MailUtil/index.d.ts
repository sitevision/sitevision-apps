import MailBuilder from "../MailBuilder";

/**
 * Returns a mail builder for creating mails.
 * @return a mail builder
 */
export function getMailBuilder(): MailBuilder;

/**
 * Checks if a mail address has a valid format.
 * @param aMailAddress the address to check
 * @return <code>true</code> if <code>aMailAddress</code> has a valid format and can be used to create a <code>javax.mail.internet.InternetAddress</code>, <code>false</code> otherwise.
 */
export function isValidAddress(aMailAddress: string): boolean;

/**
 * Gets the mail address of the site responsible.
 *
 * <p>
 *    <strong>Note!</strong> The returned address is <em>not</em> validated, i.e. it might be an invalid mail address.
 * </p>
 * @return the mail address of the site responsible, or <code>null</code> if there are no address or if it's whitespace only
 */
export function getSiteResponsibleAddress(): string;

/**
 * Gets the from mail address of current site.
 *
 * <p>
 *    <strong>Note!</strong> The returned address is <em>not</em> validated, i.e. it might be an invalid mail address.
 * </p>
 * @return the from mail address of current site, or <code>null</code> if there are no address or if it's whitespace only
 */
export function getSiteFromAddress(): string;

/**
 * Gets the mail address of the server responsible.
 *
 * <p>
 *    <strong>Note!</strong> The returned address is <em>not</em> validated, i.e. it might be an invalid mail address.
 * </p>
 * @return the mail address of the server responsible, or <code>null</code> if there are no address or if it's whitespace only
 */
export function getServerResponsibleAddress(): string;

/**
 * Gets the server from mail address.
 *
 * <p>
 *    <strong>Note!</strong> The returned address is <em>not</em> validated, i.e. it might be an invalid mail address.
 * </p>
 * @return the server from mail address, or <code>null</code> if there are no address or if it's whitespace only
 */
export function getServerFromAddress(): string;

/**
 * Mail utility interface.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getMailUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 *
 * <p>
 *    <em>Note!</em> To send one or more mails, you must use a {@link MailBuilder}.
 *    Use the {@link #getMailBuilder()} method to get a builder instance.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
declare namespace mailUtil {
  export {
    getMailBuilder,
    isValidAddress,
    getSiteResponsibleAddress,
    getSiteFromAddress,
    getServerResponsibleAddress,
    getServerFromAddress,
  };
}

export default mailUtil;
