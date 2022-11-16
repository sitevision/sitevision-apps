import * as url from 'url';

export const getDirname = (metaUrl) => url.fileURLToPath(new URL('.', metaUrl));
