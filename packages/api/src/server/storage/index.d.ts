export interface OrderByOptions {
  field: string;
  order: 'ASC' | 'DESC';
}

export interface FindOptions {
  count?: number;
  skip?: number;
  orderBy?: OrderByOptions | OrderByOptions[];
}

export interface DataStoreMetadata {
  dsid: string;
  dstimestamp: number;
}

export type CollectionDataStoreItem<T = Record<string, unknown>> = T & DataStoreMetadata;

/**
 * @since 5.2
 */
export interface CollectionDataStore<T = Record<string, unknown>> {
  /**
   * Adds an item to a collection.
   * Returns the stored item.
   *
   * @since 5.2
   * @param data JSON data to store
   */
  add(data: T): CollectionDataStoreItem<T>;

  /**
   * Adds an array of items to a collection.
   *
   * @since 5.2
   * @param data An array of objects to store
   */
  addAll(data: T[]): void;

  /**
   * Gets a specific item in a collection.
   *
   * @since 5.2
   * @param dsid The dsid to identify the item to retrieve data from
   */
  get(dsid: string): CollectionDataStoreItem<T>;

  /**
   * Updates a specific item in a collection (partial update).
   * Returns the stored item.
   *
   * If a property value in the data is set to null, the property will be removed.
   *
   * @since 5.2
   * @param dsid The dsid to identify the item to update
   * @param data JSON data to update the item
   */
  set(dsid: string, data: T): CollectionDataStoreItem<T>;

  /**
   * Removes a specific item in a collection.
   * Returns the removed item.
   *
   * @since 5.2
   * @param dsid The dsid to identify the item to remove
   */
  remove(dsid: string): CollectionDataStoreItem<T>;

  /**
   * Removes all items in a collection.
   *
   * @since 5.2
   */
  removeAll(): void;

  /**
   * Returns a search result, potentially in a custom sort order.
   *
   * Queries use Solr query syntax. First level data is asynchronously indexed — index fields are
   * prefixed with their type: `ds.analyzed.<key>`, `ds.double.<key>`, `ds.sortable.<key>`.
   *
   * Results are always sorted. If no `orderBy` is given, results are sorted by the modified field
   * (last updated first).
   *
   * Match-all queries (`*`, `*:*`) bypass the index and iterate the data store directly
   * if no explicit `orderBy` is specified.
   *
   * @since 8.1
   * @param query The search query (Solr query syntax)
   * @param options Optional count, skip and orderBy
   */
  find(query: string, options?: FindOptions): SearchResult<CollectionDataStoreItem<T>>;

  /**
   * Returns a search result.
   *
   * @deprecated Use `find(query, options)` instead.
   * @param query The search query (Solr query syntax)
   * @param count Maximum number of hits to return (default: 10)
   * @param skip Number of leading hits to be skipped (default: 0)
   */
  find(query: string, count?: number, skip?: number): SearchResult<CollectionDataStoreItem<T>>;

  /**
   * Performs instant indexing (blocking) of a collection data store post.
   *
   * This function is typically useful for apps that uses query-based data that always needs to be up-to-date. Such apps would typically call this function after each "add entry" and "remove entry" operation.
   *
   * Note! The blocking "index now" operation will only be performed on the index of the local cluster node! Indexes on other cluster nodes still relies on the asynchronous indexing triggered by data mutations!
   *
   * @since 6.1
   * @param dsid The dsid to identify the item to instantly index
   */
  instantIndex(dsid: string): void;
}

/**
 * @since 5.2
 */
export interface KeyValueDataStore<T = Record<string, unknown>> {
  /**
   * Stores data associated with a key.
   * Returns current data stored on the key.
   *
   * @since 5.2
   * @param key A key to uniquely identify the record
   * @param data  Data to store
   */
  put(key: string, data: T): T | null;
  /**
   * Returns data associated with a key.
   *
   * @since 5.2
   * @param key A key to retrieve data from
   */
  get(key: string): T | null;

  /**
   * Removes data associated with a key.
   * Returns the removed data.
   *
   * @since 5.2
   * @param key A key to identify data to remove
   */
  remove(key: string): T | null;
}

export interface SearchResult<T = unknown> {
  /**
   * Gets an array of items from the search result.
   *
   * @since 5.2
   */
  toArray(): T[];

  /**
   * Calls the supplied callback for every item in the result.
   *
   * @param callback Called for each item. First parameter is an error object if an error occurred, undefined otherwise. Second parameter is the item.
   */
  each(
    callback: (err: DataStoreError | undefined, data: T) => void
  ): void;

  /**
   * Returns a boolean indicating whether there are available items in the search result iterator.
   */
  hasNext(): boolean;

  /**
   * Reads one item at a time from the result iterator.
   *
   * @since 5.2
   */
  next(): T;

  /**
   * Get the number of items in the search result.
   *
   * @param callback Called after execution. First parameter is an error object if an error occurred, undefined otherwise. Second parameter is the number of hits.
   */
  length(
    callback: (err: DataStoreError | undefined, length: number) => void
  ): void;
}

export interface DataStoreError {
  dataStore: string;
  type: DataStoreErrorType;
  message: string;
}

export enum DataStoreErrorType {
  validation_failed,
  read_only,
  item_not_found,
  item_property_count_exceeded,
  illegal_method_call,
  unknown,
}

export interface Storage {
  /**
   * Get an instance of a CollectionDataStore
   * @param identifier The name of a data store
   */
  getCollectionDataStore<T = Record<string, unknown>>(identifier: string): CollectionDataStore<T>;

  /**
   * Get an instance of a KeyValueDataStore
   * @param identifier The name of a data store
   */
  getKeyValueDataStore<T = Record<string, unknown>>(identifier: string): KeyValueDataStore<T>;
}

declare namespace Storage {}

declare const storage: Storage;

export default storage;
