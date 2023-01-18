/**
 * Message text rendering interface that detects and creates links in plain message texts.
 * @author Magnus Lövgren
 * @since Sitevision 3.0.2
 */
type MessageTextLinker = {
  /**
   * Creates links found in plain message text.
   * @param aText the text that might contain links
   * @return a linked text, or empty string if <code>aText</code> is <code>null</code>
   */
  autoLink(aText: string): string;
};

export = MessageTextLinker;
