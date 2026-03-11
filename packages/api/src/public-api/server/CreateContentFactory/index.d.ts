/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { TextModuleCreator } from "../../types/senselogic/sitevision/api/webresource/webcontent/TextModuleCreator";
import type { TextModuleUpdater } from "../../types/senselogic/sitevision/api/webresource/webcontent/TextModuleUpdater";

/**
 * Factory for creating and updating web content in Sitevision.
 *
 *  <p>
 *  This factory provides builder instances for creating and updating content.
 *  </p>
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via
 *  {@link senselogic.sitevision.api.Utils#getCreateContentFactory()}.
 *  See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the
 *  <code>Utils</code> interface.
 *  </p>
 * @author Jens Kalshoven
 * @since Sitevision 2026.01.1
 */
export interface CreateContentFactory {
  /**
   * Gets a builder for creating new text modules.
   *
   *  <p>
   *  The returned builder can be used to configure and create a new text module (text portlet)
   *  on a page or within a layout. Each call to this method returns a fresh builder instance
   *  with no state carried over from previous operations.
   *  </p>
   * @return a new TextModuleCreator builder instance
   */
  getTextModuleCreator(): TextModuleCreator;

  /**
   * Gets a builder for updating existing text modules.
   *
   *  <p>
   *  The returned builder can be used to update the content of an existing text module (text portlet).
   *  Each call to this method returns a fresh builder instance with no state carried over from
   *  previous operations.
   *  </p>
   * @return a new TextModuleUpdater builder instance
   */
  getTextModuleUpdater(): TextModuleUpdater;
}

declare namespace CreateContentFactory {}

declare var createContentFactory: CreateContentFactory;

export default createContentFactory;
