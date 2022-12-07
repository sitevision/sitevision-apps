interface OrderByOptions {
  field: string;
  order: 'ASC' | 'DESC';
}

interface FindOptions {
  count?: number;
  skip?: number;
  orderBy?: OrderByOptions | OrderByOptions[];
}

interface CollectionDataStore {
  add(data: any): void;
  addAll(data: any[]): void;
  get(dsid: string): unknown;
  set(dsid: string, data: any): void;
  remove(dsid: string): void;
  removeAll(): void;

  find(query: string, options?: FindOptions): SearchResult;
  /**
   * @deprecated
   */
  find(query: string, count?: number, skip?: number): SearchResult;

  /**
   * Performs instant indexing (blocking) of a collection data store post.
   *
   * This function is typically useful for apps that uses query-based data that always needs to be up-to-date. Such apps would typically call this function after each "add entry" and "remove entry" operation.
   *
   * Note! The blocking "index now" operation will only be performed on the index of the local cluster node! Indexes on other cluster nodes still relies on the asynchronous indexing triggered by data mutations!
   *
   * @since 6.1
   * @param disd The dsid to identify the item to instantly index
   */
  instantIndex(disd: string): void;
}

/**
 * @since 5.2
 */
interface KeyValueDataStore {
  /**
   * Stores data associated with a key.
   * Returns current data stored on the key.
   *
   * @since 5.2
   * @param key A key to uniquely identify the record
   * @param data  Data to store
   */
  put(key: string, data: any): void;

  /**
   * Returns data associated with a key.
   *
   * @since 5.2
   * @param key A key to retrieve data from
   */
  get(key: string): unknown;

  /**
   * Removes data associated with a key.
   * Returns the removed data.
   *
   * @since 5.2
   * @param key A key to identify data to remove
   */
  remove(key: string): void;
}

interface SearchResult {
  toArray(): unknown[];
  each(
    callback: (err: DataStoreError | undefined, data: unknown) => void
  ): void;
  hasNext(): boolean;
  next(): unknown;
  length(
    callback: (err: DataStoreError | undefined, length: number) => void
  ): void;
}

interface DataStoreError {
  dataStore: string;
  type: DataStoreErrorType;
  message: string;
}

declare enum DataStoreErrorType {
  validation_failed,
  read_only,
  item_not_found,
  item_property_count_exceeded,
  illegal_method_call,
  unknown,
}

/**
 * Get an instance of a CollectionDataStore
 * @param identifier The name of a data store
 */
export function getCollectionDataStore(identifier: string): CollectionDataStore;

/**
 * Get an instance of a KeyValueDataStore
 * @param identifier The name of a data store
 */
export function getKeyValueDataStore(identifier: string): KeyValueDataStore;

declare namespace storage {
  export { getCollectionDataStore, getKeyValueDataStore };
}

export default storage;
