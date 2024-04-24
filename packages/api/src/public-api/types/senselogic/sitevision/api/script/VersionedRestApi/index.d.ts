import type { String } from "../../../../../java/lang/String";

/**
 * Script utility for server-side invoke of the local
 *  <a href="https://developer.sitevision.se/docs/rest-api/model-rest-api" target="_blank">Sitevision REST API</a> in a specific version.
 *
 *  <p>
 *  <strong>Version note!</strong>
 *  This is an exotic sibling interface to {@link RestApi RestApi} that can be used to invoke the local Sitevision REST API
 *  in a specific version - regardless of what version your code are currently executing in.
 *  If you don't know what a version is or haven't thought much about it, you would typically use {@link RestApi RestApi}
 *  that invokes the local REST API in {@link senselogic.sitevision.api.versioning.VersionUtil#getCurrentVersion() current version}.
 *  </p>
 *
 *  <p>
 *  This utility can be used regardless of the REST API of the local site is enabled or not!
 *  </p>
 *
 *  <p>
 *  <strong>Performance note!</strong> {@link RestApi} will always outperform <code>VersionedRestApi</code> when executing
 *  in the same version! Note that the method contracts of the interfaces differs. RestApi operates on Node objects and VersionedRestApi
 *  operates on Strings (i.e. Node identifiers).
 *  </p>
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via
 *  {@link RestApiFactory#getOfflineRestApi() RestApiFactory.getOfflineRestApi()} or
 *  {@link RestApiFactory#getOnlineRestApi() RestApiFactory.getOnlineRestApi()}.
 *  See {@link RestApiFactory} for how to obtain an instance of the <code>RestApiFactory</code> interface.
 *  </p>
 * @param <O> script object
 * @author Magnus Lövgren
 * @see RestApi
 * @see RestApiFactory
 * @since Sitevision 2024.04.2
 */
export type VersionedRestApi = {
  /**
   * Get the version that is used by this instance.
   * @return {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}&#xA; or {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
   */
  getVersion(): number;

  /**
   * Executes a GET endpoint of the REST API.
   *
   *  <p>
   *  Delegates execution to {@link RestApi#get(javax.jcr.Node, String) RestApi.get(Node,String)}
   *  in the {@link #getVersion() version} specified by this instance.
   *  </p>
   * @param aContextNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint context Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationName the endpoint operation name/method
   * @return the result of the {@link RestApi#get(javax.jcr.Node, String) RestApi.get(Node,String)} invocation
   * @throws NullPointerException if aContextNodeIdentifier or aOperationName is null
   * @throws IllegalArgumentException if aContextNodeIdentifier or aOperationName is empty or blank
   */
  get(
    aContextNodeIdentifier: String | string,
    aOperationName: String | string
  ): unknown;

  /**
   * Executes a GET endpoint of the REST API.
   *
   *  <p>
   *  Delegates execution to {@link RestApi#get(javax.jcr.Node, String, Object) RestApi.get(Node,String,Options)}
   *  in the {@link #getVersion() version} specified by this instance.
   *  </p>
   * @param aContextNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint context Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationName the endpoint operation name/method
   * @param aOperationOptions the operation data/parameters
   * @return the result of the {@link RestApi#get(javax.jcr.Node, String, Object) RestApi.get(Node,String,Options)} invocation
   * @throws NullPointerException if aContextNodeIdentifier or aOperationName is null
   * @throws IllegalArgumentException if aContextNodeIdentifier or aOperationName is empty or blank
   */
  get(
    aContextNodeIdentifier: String | string,
    aOperationName: String | string,
    aOperationOptions: unknown
  ): unknown;

  /**
   * Executes a GET endpoint of the REST API, targeting an instance of the context.
   *
   *  <p>
   *  Delegates execution to {@link RestApi#get(javax.jcr.Node, String, javax.jcr.Node, Object) RestApi.get(Node,String,Node,Options)}
   *  in the {@link #getVersion() version} specified by this instance.
   *  </p>
   * @param aContextNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint context Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationName the endpoint operation name/method
   * @param aOperationNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint operation Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationOptions the operation data/parameters
   * @return the result of the {@link RestApi#get(javax.jcr.Node, String, javax.jcr.Node, Object) RestApi.get(Node,String,Node,Options)} invocation
   * @throws NullPointerException if aContextNodeIdentifier, aOperationName or aOperationNodeIdentifier is null
   * @throws IllegalArgumentException if aContextNodeIdentifier, aOperationName or aOperationNodeIdentifier is empty or blank
   */
  get(
    aContextNodeIdentifier: String | string,
    aOperationName: String | string,
    aOperationNodeIdentifier: String | string,
    aOperationOptions: unknown
  ): unknown;

  /**
   * Executes a POST endpoint of the REST API.
   *
   *  <p>
   *  Delegates execution to {@link RestApi#post(javax.jcr.Node, String, Object) RestApi.post(Node,String,Options)}
   *  in the {@link #getVersion() version} specified by this instance.
   *  </p>
   * @param aContextNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint context Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationName the endpoint operation name/method
   * @param aOperationOptions the operation data/parameters
   * @return the result of the {@link RestApi#post(javax.jcr.Node, String, Object) RestApi.post(Node,String,Options)} invocation
   * @throws NullPointerException if aContextNodeIdentifier or aOperationName is null
   * @throws IllegalArgumentException if aContextNodeIdentifier or aOperationName is empty or blank
   */
  post(
    aContextNodeIdentifier: String | string,
    aOperationName: String | string,
    aOperationOptions: unknown
  ): unknown;

  /**
   * Executes a PUT endpoint of the REST API.
   *
   *  <p>
   *  Delegates execution to {@link RestApi#put(javax.jcr.Node, String, Object) RestApi.put(Node,String,Options)}
   *  in the {@link #getVersion() version} specified by this instance.
   *  </p>
   * @param aContextNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint context Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationName the endpoint operation name/method
   * @param aOperationOptions the operation data/parameters
   * @return the result of the {@link RestApi#put(javax.jcr.Node, String, Object) RestApi.put(Node,String,Options)} invocation
   * @throws NullPointerException if aContextNodeIdentifier or aOperationName is null
   * @throws IllegalArgumentException if aContextNodeIdentifier or aOperationName is empty or blank
   */
  put(
    aContextNodeIdentifier: String | string,
    aOperationName: String | string,
    aOperationOptions: unknown
  ): unknown;

  /**
   * Executes a PUT endpoint of the REST API
   *
   *  <p>
   *  Delegates execution to {@link RestApi#put(javax.jcr.Node, String, javax.jcr.Node, Object) RestApi.put(Node,String,Node,Options)}
   *  in the {@link #getVersion() version} specified by this instance.
   *  </p>
   * @param aContextNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint context Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationName the endpoint operation name/method
   * @param aOperationNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint operation Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationOptions the operation data/parameters
   * @return the result of the {@link RestApi#put(javax.jcr.Node, String, javax.jcr.Node, Object) RestApi.put(Node,String,Node,Options)} invocation
   * @throws NullPointerException if aContextNodeIdentifier, aOperationName or aOperationNodeIdentifier is null
   * @throws IllegalArgumentException if aContextNodeIdentifier, aOperationName or aOperationNodeIdentifier is empty or blank
   */
  put(
    aContextNodeIdentifier: String | string,
    aOperationName: String | string,
    aOperationNodeIdentifier: String | string,
    aOperationOptions: unknown
  ): unknown;

  /**
   * Executes a DELETE endpoint of the REST API.
   *
   *  <p>
   *  Delegates execution to {@link RestApi#delete(javax.jcr.Node, String) RestApi.delete(Node,String)}
   *  in the {@link #getVersion() version} specified by this instance.
   *  </p>
   * @param aContextNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint context Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationName the endpoint operation name/method
   * @return the result of the {@link RestApi#delete(javax.jcr.Node, String) RestApi.delete(Node,String)} invocation
   * @throws NullPointerException if aContextNodeIdentifier or aOperationName is null
   * @throws IllegalArgumentException if aContextNodeIdentifier or aOperationName is empty or blank
   */
  delete(
    aContextNodeIdentifier: String | string,
    aOperationName: String | string
  ): unknown;

  /**
   * Executes a DELETE endpoint of the REST API, targeting an instance of the context.
   *
   *  <p>
   *  Delegates execution to {@link RestApi#delete(javax.jcr.Node, String, javax.jcr.Node) RestApi.delete(Node,String,Node)}
   *  in the {@link #getVersion() version} specified by this instance.
   *  </p>
   * @param aContextNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint context Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationName the endpoint operation name/method
   * @param aOperationNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint operation Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @return the result of the {@link RestApi#delete(javax.jcr.Node, String, javax.jcr.Node) RestApi.delete(Node,String,Node)} invocation
   * @throws NullPointerException if aContextNodeIdentifier, aOperationName or aOperationNodeIdentifier is null
   * @throws IllegalArgumentException if aContextNodeIdentifier, aOperationName or aOperationNodeIdentifier is empty or blank
   */
  delete(
    aContextNodeIdentifier: String | string,
    aOperationName: String | string,
    aOperationNodeIdentifier: String | string
  ): unknown;

  /**
   * Executes a DELETE endpoint of the REST API, targeting an instance of the context.
   *
   *  <p>
   *  Delegates execution to {@link RestApi#delete(javax.jcr.Node, String, javax.jcr.Node, Object) RestApi.delete(Node,String,Node,Options)}
   *  in the {@link #getVersion() version} specified by this instance.
   *  </p>
   * @param aContextNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint context Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationName the endpoint operation name/method
   * @param aOperationNodeIdentifier the {@link javax.jcr.Node#getIdentifier() identifier} for the endpoint operation Node.&#xA; Note that there is no guarantee that such a Node exists in the version specified by this instance.
   * @param aOperationOptions the operation data/parameters
   * @return the result of the {@link RestApi#delete(javax.jcr.Node, String, javax.jcr.Node, Object) RestApi.delete(Node,String,Node,Options)}&#xA; invocation
   * @throws NullPointerException if aContextNodeIdentifier, aOperationName or aOperationNodeIdentifier is null
   * @throws IllegalArgumentException if aContextNodeIdentifier, aOperationName or aOperationNodeIdentifier is empty or blank
   */
  delete(
    aContextNodeIdentifier: String | string,
    aOperationName: String | string,
    aOperationNodeIdentifier: String | string,
    aOperationOptions: unknown
  ): unknown;
};
