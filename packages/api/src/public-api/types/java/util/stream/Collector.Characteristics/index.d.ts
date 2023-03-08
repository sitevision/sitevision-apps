/**
 * Characteristics indicating properties of a {@code Collector}, which can
 *  be used to optimize reduction implementations.
  
    */
export type Characteristics = {
  CONCURRENT: "CONCURRENT";
  UNORDERED: "UNORDERED";
  IDENTITY_FINISH: "IDENTITY_FINISH";
};
