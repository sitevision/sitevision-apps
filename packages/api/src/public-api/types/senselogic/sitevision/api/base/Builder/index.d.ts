/**
 * This is the base interface for all builders in the Sitevision Utility API.
 *
 * <p>
 *    A <code>Builder</code> is used to set up the state necessary to build an instance of a specific type.
 * </p>
 * <p>
 *    A <code>Builder</code> has zero or more <strong>optional attributes</strong> and zero or more <strong>mandatory attributes</strong>.
 *    The builder will typically throw an <code>IllegalStateException</code> if a <em>mandatory</em> attribute hasn't been
 *    set when the <code>build()</code> method is invoked.
 * </p>
 * <p>
 *    A <code>Builder</code> is <strong>not thread safe</strong>, but the it <strong>can be re-used</strong> by the same thread to build multiple
 *    instances.
 * </p>
 * <p>
 *    Using a <code>Builder</code> is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *    would typically use it like this:
 * </p>
 * <ol>
 *   <li>Get the Builder</li>
 *   <li>Set/add all mandatory attributes</li>
 *   <li>Potentially set/add optional attributes</li>
 *   <li>Do build</li>
 * </ol>
 * <p>
 *    When you have built an instance, you can re-use the builder to build more instances. Typically like:
 * </p>
 * <ol>
 *   <li>(Re-)set one or more attributes</li>
 *   <li>Do build</li>
 * </ol>
 *
 * <p>
 *    All methods (except the <code><em>build()</em></code> method) of a <code>Builder</code> will typically
 *    <strong>return the builder itself</strong>.
 *    This makes it easy to "chain" all method invocations, i.e. do all setup on a single line of code.
 * </p>
 * <h3>An example of how to work with a Builder!</h3>
 * <p>
 *    In <strong>Java</strong>, you would typically use the {@link senselogic.sitevision.api.mail.MailBuilder} like this:
 * </p><pre><code>   MailBuilder mailBuilder = siteVisionUtils.getMailUtil().getMailBuilder();
 *
 *   <em>// Create a mail</em>
 *   Mail mail = mailBuilder.setSubject("Hello")
 *                          .setTextMessage("How are you Magnus?")
 *                          .addRecipient("magnus.lovgren@sitevision.se")
 *                          .build();</code></pre>
 * <p>
 *    The code would typically look similar when using server-side <strong>JavaScript</strong>:
 * </p><pre><code>   var mailBuilder = require('MailBuilder');
 *
 *   <em>// Create a mail</em>
 *   var mail = mailBuilder.setSubject('Hello')
 *                         .setTextMessage('How are you Magnus?')
 *                         .addRecipient('magnus.lovgren@sitevision.se')
 *                         .build();</code></pre>
 * <p>
 *    To use the same multi-line approach in <strong>Velocity</strong>, you would actually have to write it like this:
 * </p><pre><code>   #set ($mailBuilder = $sitevisionUtils.mailUtil.mailBuilder)
 *
 *   <em>## Create a mail</em>
 *   #set ($mail = $mailBuilder.setSubject('Hello'
 *                            ).setTextMessage('How are you Magnus?'
 *                            ).addRecipient('magnus.lovgren@sitevision.se'
 *                            ).build())</code></pre>
 * <p>
 *    As exemplified above, working with a builder in Velocity has some caveats since the Velocity parser doesn't allow whitespace
 *    before the dot <em>(i.e. you must put the method closing parenthesis and the dot tight together)</em>. If you are uncomfortable handling
 *    multi-line nested method invocations in Velocity as above, you could instead:
 * </p>
 * <ul>
 *    <li>
 *       Put all nested invocations on one line:<pre><code>
 *       <em>## Create a mail</em>
 *       #set ($mail = $mailBuilder.setSubject('Hello').setTextMessage('How are you Magnus?').addRecipient('magnus.lovgren@sitevision.se').build())
 *       </code></pre>
 *    </li>
 *    <li>
 *       Use the {@link senselogic.sitevision.api.script.ScriptUtil#swallow(Object)} method to prohibit unwanted output:<pre><code>
 *       <em>## Get script util</em>
 *       #set ($scriptUtil = $sitevisionUtils.scriptUtil)
 *       ...
 *       <em>## Create a mail</em>
 *       $scriptUtil.swallow($mailBuilder.setSubject('Hello'))
 *       $scriptUtil.swallow($mailBuilder.setTextMessage('How are you Magnus?'))
 *       $scriptUtil.swallow($mailBuilder.addRecipient('magnus.lovgren@sitevision.se'))
 *       #set ($mail = $mailBuilder.build())</code></pre>
 *    </li>
 * </ul>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export type Builder = {
  /**
   * Creates an instance of type <em>T</em> using current state of this builder.
   * @return an instance of type <em>T</em>
   */
  build(): unknown;
};
