/**
 * The possible actions specified by the <code>uuidBehavior</code> parameter in
 *  {@link Workspace#importXML}, {@link Session#importXML}, {@link
 *  Workspace#getImportContentHandler} and {@link Session#getImportContentHandler}.
 * 
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
export type ImportUUIDBehavior = {
  IMPORT_UUID_CREATE_NEW: number;

  IMPORT_UUID_COLLISION_REMOVE_EXISTING: number;

  IMPORT_UUID_COLLISION_REPLACE_EXISTING: number;

  IMPORT_UUID_COLLISION_THROW: number;
};
