/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../types/java/lang/String";

import type { GeolocationValue } from "../../types/senselogic/sitevision/api/metadata/value/GeolocationValue";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builder to create {@link GeolocationValue} instances that can be used to set geolocation metadata.
 *
 *  <p>
 *     GeolocationValueBuilder has three <strong>mandatory attributes</strong>:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>name</em> - The location name. Must not be null or blank.
 *     </li>
 *     <li>
 *        <em>latitude</em> - The Latitude. Must be a double value within range <code>[-90.0 ... 90.0]</code>.
 *     </li>
 *     <li>
 *        <em>longitude</em> - The Longitude. Must be a double value within range <code>[-180.0 ... 180.0]</code>.
 *     </li>
 *  </ul>
 *  <p>
 *     Using the GeolocationValueBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *     would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the GeolocationValueBuilder</li>
 *    <li>Set the name</li>
 *    <li>Set the latitude</li>
 *    <li>Set the longitude</li>
 *    <li>Do build</li>
 *  </ol>
 *  <p>
 *     When you have built a <code>GeolocationValue</code> instance, you can re-use the GeolocationValueBuilder to build more instances.
 *     Something like:
 *  </p>
 *  <ol>
 *    <li>Possibly set a new name</li>
 *    <li>Possibly set a new latitude</li>
 *    <li>Possibly set a new longitude</li>
 *    <li>Do build</li>
 *  </ol>
 *
 *  <p>
 *     <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *     more information about Builders and how to work with them!
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.metadata.MetadataUtil#getGeolocationValueBuilder()}.
 *     See {@link senselogic.sitevision.api.metadata.MetadataUtil} for how to obtain an instance of the <code>MetadataUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2025.11.1
 */
export interface GeolocationValueBuilder extends Builder {
  /**
   * Sets the location name.
   * @param aLocationName the location name, must not be null or blank
   * @return this builder
   */
  setName(aLocationName: String | string): GeolocationValueBuilder;

  /**
   * Sets the latitude.
   * @param aLatitude the latitude, must be within range [-90.0 ... 90.0]
   * @return this builder
   */
  setLatitude(aLatitude: number): GeolocationValueBuilder;

  /**
   * Sets the longitude.
   * @param aLongitude the longitude, must be within range [-180.0 ... 180.0]
   * @return this builder
   */
  setLongitude(aLongitude: number): GeolocationValueBuilder;

  /**
   * Creates a GeolocationValue instance using current state of this builder.
   * @return a geolocation value
   * @throws IllegalStateException if the name, longitude or latitude value are invalid
   */
  build(): GeolocationValue;
}

declare namespace GeolocationValueBuilder {}

declare var geolocationValueBuilder: GeolocationValueBuilder;

export default geolocationValueBuilder;
