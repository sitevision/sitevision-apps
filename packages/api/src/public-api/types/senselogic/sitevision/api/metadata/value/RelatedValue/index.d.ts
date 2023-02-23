/**
 * A temporary representation of a related metadata value.
 *
 *  <p>
 *     An instance of this interface can be used in MetadataUtil when setting a related metadata via the
 *     {@link senselogic.sitevision.api.metadata.MetadataUtil#setMetadataPropertyValue(javax.jcr.Node, String, Object)}
 *     or
 *     {@link senselogic.sitevision.api.metadata.MetadataUtil#setMetadataPropertyValue(javax.jcr.Node, javax.jcr.Property, Object)}
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.metadata.builder.RelatedValueBuilder#build()}.
 *     See {@link senselogic.sitevision.api.metadata.builder.RelatedValueBuilder} for how to obtain an instance of the
 *     <code>RelatedValueBuilder</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 * @see senselogic.sitevision.api.metadata.builder.RelatedValueBuilder
 */
export type RelatedValue = {};
