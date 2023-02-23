import type { String } from "../../../lang/String";
import type { Object } from "../../../lang/Object";

/**
 * A typesafe enumeration for file-mapping modes.
 * @since 1.4
 * @see java.nio.channels.FileChannel#map
 */
export type MapMode = Object & {
  /**
   * Returns a string describing this file-mapping mode.
   * @return A descriptive string
   */
  toString(): string;

  /**
 * Mode for a read-only mapping.
  
    */
  READ_ONLY: MapMode;

  /**
 * Mode for a read/write mapping.
  
    */
  READ_WRITE: MapMode;

  /**
 * Mode for a private (copy-on-write) mapping.
  
    */
  PRIVATE: MapMode;
};
