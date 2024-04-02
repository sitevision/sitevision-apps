/**
 * <p>
 *     Different statuses for nodes that can be published.
 *  </p>
 * @author Gustav Holmberg
 * @see senselogic.sitevision.api.versioning.PublishingUtil#getPublishStatus(javax.jcr.Node)
 * @since Sitevision 2024.01.2
 */
declare enum PublishStatus {
  NOT_PUBLISHED,
  PUBLISHED,
  WORKFLOW_STARTED,
  SCHEDULED_PUBLISH,
  SCHEDULED_UNPUBLISH,
  SCHEDULED_PUBLISH_BY_PUBLISHING_PROJECT,
  BELONGS_TO_PUBLISHING_PROJECT,
  LOCKED,
}

export default PublishStatus;
