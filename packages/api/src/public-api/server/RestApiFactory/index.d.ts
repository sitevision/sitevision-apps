import type { RestApi } from "../RestApi";
import type { VersionedRestApi } from "../../types/senselogic/sitevision/api/script/VersionedRestApi";

/**
 * Factory for creating server-side invokers of the local
 *  <a href="https://developer.sitevision.se/docs/rest-api/model-rest-api" target="_blank">Sitevision REST API</a>.
 *
 *  <p>
 *     <strong>REST siblings note!</strong>
 *  </p>
 *  <ul>
 *     <li>
 *        Server-side invoke of a <em>local RESTApp</em> should typically be handled via
 *        {@link senselogic.sitevision.api.script.app.RestAppInvoker}.
 *     </li>
 *     <li>
 *        Invoking <em>external REST API:s</em> should typically be handled via
 *        {@link senselogic.sitevision.api.script.Requester}.
 *     </li>
 *  </ul>
 * @param <O> script object
 * @author Magnus Lövgren
 * @since Sitevision 2024.04.2
 */
export interface RestApiFactory {
  /**
   * Gets the RestApi utility.
   *
   *  <p>
   *     The returned utility invokes the local REST API in
   *     <strong>{@link senselogic.sitevision.api.versioning.VersionUtil#getCurrentVersion() current version}</strong>.
   *  </p>
   * @return the RestApi utility
   */
  getRestApi(): RestApi;

  /**
   * Gets the Versioned RestApi utility for the <strong>ONLINE</strong> version.
   *
   *  <p>
   *     The returned utility always invokes the local REST API in the
   *     <strong>{@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION ONLINE version}</strong>.
   *  </p>
   *  <p>
   *     <em>Related info: URI prefix for the REST API in the ONLINE version is: <code>/rest-api/1/<strong>1</strong>/</code></em>
   *  </p>
   * @return the VersionedRestApi for the {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION ONLINE version}
   */
  getOnlineRestApi(): VersionedRestApi;

  /**
   * Gets the Versioned RestApi utility for the <strong>OFFLINE</strong> version.
   *
   *  <p>
   *     The returned utility always invokes the local REST API in the
   *     <strong>{@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION OFFLINE version}</strong>.
   *  </p>
   *  <p>
   *     <em>Related info: URI prefix for the REST API in the OFFLINE version is: <code>/rest-api/1/<strong>0</strong>/</code></em>
   *  </p>
   * @return the VersionedRestApi for the {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION OFFLINE version}
   */
  getOfflineRestApi(): VersionedRestApi;
}

declare namespace RestApiFactory {}

declare var restApiFactory: RestApiFactory;

export default restApiFactory;
