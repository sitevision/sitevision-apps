export interface CacheEntry {
  get<A>(key: string, ttl: number, callback: () => A): A;
  purge(key: string): void;
}

export interface Cache {
  getCache(): CacheEntry;
  getSharedCache(aGlobalNamespace: string): CacheEntry;
}

declare namespace Cache {}

declare var cache: Cache;

export default cache;
