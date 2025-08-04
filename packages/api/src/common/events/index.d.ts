import type { Node } from '../../public-api/types/javax/jcr/Node';

/** Emitted when something (typically a page) is published. */
export type PublishingPublishOptions = {
  /** The full name of the event */
  event: 'sv:publishing:publish';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the node that was published */
  node: string;
  /** If the publishing comment feature is enabled and a comment has been provided */
  publishingComment?: string;
};

/** Emitted when something (typically a page) is unpublished. */
export type PublishingUnpublishOptions = {
  /** The full name of the event */
  event: 'sv:publishing:unpublish';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the node that was unpublished */
  node: string;
};

/** Emitted when a simple user is created. */
export type SimpleUserCreateOptions = {
  /** The full name of the event */
  event: 'sv:simpleuser:create';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the simple user that was created */
  user: string;
};

/** Emitted when a simple user is updated. */
export type SimpleUserUpdateOptions = {
  /** The full name of the event */
  event: 'sv:simpleuser:update';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the simple user that was updated */
  user: string;
};

/** Emitted when the http session for a simple user is destroyed (e.g. session timed out). */
export type SimpleUserSessionDestroyOptions = {
  /** The full name of the event */
  event: 'sv:simpleuser:session:destroy';
  /** No user is emitting the event */
  emitter: 'anonymous',
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the simple user whose session was destroyed */
  user: string;
};

/** Emitted when something (typically a page) is moved. */
export type StructureMoveOptions = {
  /** The full name of the event */
  event: 'sv:structure:move';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the node that was moved */
  node: string;
  /** The JCR identifier of the old parent node */
  from: string;
  /** The JCR identifier of the new parent node */
  to: string;
};

/** Emitted when something (typically a page/article/file/image) is added to the trashcan. */
export type TrashcanAddOptions = {
  /** The full name of the event */
  event: 'sv:trashcan:add';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the node that was trashed */
  node: string;
};

/** Emitted when something (typically a page/article/file/image) is restored from the trashcan. */
export type TrashcanRestoreOptions = {
  /** The full name of the event */
  event: 'sv:trashcan:restore';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the node that was restored */
  node: string;
};

/** Emitted when a file or an image is added to a repository or folder. */
export type BinaryCreateOptions = {
  /** The full name of the event */
  event: 'sv:binary:create';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the file that has been created */
  node: string;
};

/** Emitted when the content for a file or an image has been updated. */
export type BinaryUpdateContentOptions = {
  /** The full name of the event */
  event: 'sv:binary:update:content';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the file that was updated */
  node: string;
};

/** Emitted when metadata for a file or an image has been updated. */
export type BinaryUpdateMetadataOptions = {
  /** The full name of the event */
  event: 'sv:binary:update:metadata';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the file that has updated metadata */
  node: string;
};

/** Emitted when the name of a file or an image has been changed. */
export type BinaryUpdateNameOptions = {
  /** The full name of the event */
  event: 'sv:binary:update:name';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the file that has been renamed */
  node: string;
};

/** Emitted when tags for a file or an image has been changed. */
export type BinaryUpdateTagsOptions = {
  /** The full name of the event */
  event: 'sv:binary:update:tags';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the file that was changed */
  node: string;
};

/** Emitted when a new version of a file has been created. */
export type BinaryUpdateVersionCreateOptions = {
  /** The full name of the event */
  event: 'sv:binary:update:version:create';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the file that has a new version */
  node: string;
};

/** Emitted when a version of a file has been deleted. */
export type BinaryUpdateVersionDeleteOptions = {
  /** The full name of the event */
  event: 'sv:binary:update:version:delete';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the file that has a deleted version */
  node: string;
};

/** Emitted when a version of a file has been selected. */
export type BinaryUpdateVersionSelectOptions = {
  /** The full name of the event */
  event: 'sv:binary:update:version:select';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the file that has a new version selected */
  node: string;
};

/** Emitted when a folder whose metadata is updated. */
export type FolderUpdateMetadataOptions = {
  /** The full name of the event */
  event: 'sv:folder:update:metadata';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the folder that has been updated */
  node: string;
};

/** Form field answer structure */
export type FormAnswer = {
  /** Unique identifier for the form field */
  id: string;
  /** The question or prompt shown to the user */
  question: string;
  /** User's answer as a string or a [sv:temporaryFile](https://developer.sitevision.se/docs/public-api/node-types/node-types/2019-02-20-svtemporaryfile) for file uploads */
  value: string | Node;
};

/** Emitted when Sitevision's email/question-form module is posted. */
export type FormPostOptions = {
  /** The full name of the event */
  event: 'sv:form:post';
  /** The JCR identifier of the emitting user */
  emitter: string;
  /** The timestamp when the event was emitted */
  timestamp: number;
  /** The JCR identifier of the page the form was posted */
  node: string;
  /** Array of form field answers */
  answers: FormAnswer[];
};

/** Emitted every 5 minutes. */
export type Every5MinutesOptions = {
  /** The full name of the event */
  event: 'sv:every-5-minutes';
  /** No user is emitting the event */
  emitter: 'anonymous';
  /** The timestamp when the event was emitted */
  timestamp: number;
};

/** Emitted every 15 minutes. */
export type Every15MinutesOptions = {
  /** The full name of the event */
  event: 'sv:every-15-minutes';
  /** No user is emitting the event */
  emitter: 'anonymous';
  /** The timestamp when the event was emitted */
  timestamp: number;
};

/** Emitted every 30 minutes. */
export type Every30MinutesOptions = {
  /** The full name of the event */
  event: 'sv:every-30-minutes';
  /** No user is emitting the event */
  emitter: 'anonymous';
  /** The timestamp when the event was emitted */
  timestamp: number;
};

/** Emitted every hour. */
export type EveryHourOptions = {
  /** The full name of the event */
  event: 'sv:every-hour';
  /** No user is emitting the event */
  emitter: 'anonymous';
  /** The timestamp when the event was emitted */
  timestamp: number;
};

/** Emitted every day. */
export type EveryDayOptions = {
  /** The full name of the event */
  event: 'sv:every-day';
  /** No user is emitting the event */
  emitter: 'anonymous';
  /** The timestamp when the event was emitted */
  timestamp: number;
};

// Union types for grouped events
/** All publishing-related event options */
export type PublishingOptions = PublishingPublishOptions | PublishingUnpublishOptions;

/** All simple user-related event options */
export type SimpleUserOptions =
  | SimpleUserCreateOptions
  | SimpleUserUpdateOptions
  | SimpleUserSessionDestroyOptions;

/** All binary-related event options */
export type BinaryOptions =
  | BinaryCreateOptions
  | BinaryUpdateContentOptions
  | BinaryUpdateMetadataOptions
  | BinaryUpdateNameOptions
  | BinaryUpdateTagsOptions
  | BinaryUpdateVersionCreateOptions
  | BinaryUpdateVersionDeleteOptions
  | BinaryUpdateVersionSelectOptions;

/** All timer-related event options */
export type TimerOptions =
  | Every5MinutesOptions
  | Every15MinutesOptions
  | Every30MinutesOptions
  | EveryHourOptions
  | EveryDayOptions;

/** All trashcan-related event options */
export type TrashcanOptions = TrashcanAddOptions | TrashcanRestoreOptions;

/** All possible system event options */
export type AllSystemOptions =
  | PublishingOptions
  | SimpleUserOptions
  | BinaryOptions
  | TimerOptions
  | TrashcanOptions
  | StructureMoveOptions
  | FolderUpdateMetadataOptions
  | FormPostOptions;

export interface Events {
  /**
   * Listen to a given event
   *
   * @param eventName The name of the event
   * @param callback The callback to trigger for the given event
   */
  on(eventName: string, callback: (options: unknown) => void): void;
  on(eventName: 'sv:publishing', callback: (options: PublishingOptions) => void): void;
  on(eventName: 'sv:publishing:publish', callback: (options: PublishingPublishOptions) => void): void;
  on(eventName: 'sv:publishing:unpublish', callback: (options: PublishingUnpublishOptions) => void): void;
  on(eventName: 'sv:simpleuser', callback: (options: SimpleUserOptions) => void): void;
  on(eventName: 'sv:simpleuser:create', callback: (options: SimpleUserCreateOptions) => void): void;
  on(eventName: 'sv:simpleuser:update', callback: (options: SimpleUserUpdateOptions) => void): void;
  on(eventName: 'sv:simpleuser:session:destroy', callback: (options: SimpleUserSessionDestroyOptions) => void): void;
  on(eventName: 'sv:structure:move', callback: (options: StructureMoveOptions) => void): void;
  on(eventName: 'sv:trashcan', callback: (options: TrashcanOptions) => void): void;
  on(eventName: 'sv:trashcan:add', callback: (options: TrashcanAddOptions) => void): void;
  on(eventName: 'sv:trashcan:restore', callback: (options: TrashcanRestoreOptions) => void): void;
  on(eventName: 'sv:binary', callback: (options: BinaryOptions) => void): void;
  on(eventName: 'sv:binary:create', callback: (options: BinaryCreateOptions) => void): void;
  on(eventName: 'sv:binary:update:content', callback: (options: BinaryUpdateContentOptions) => void): void;
  on(eventName: 'sv:binary:update:metadata', callback: (options: BinaryUpdateMetadataOptions) => void): void;
  on(eventName: 'sv:binary:update:name', callback: (options: BinaryUpdateNameOptions) => void): void;
  on(eventName: 'sv:binary:update:tags', callback: (options: BinaryUpdateTagsOptions) => void): void;
  on(eventName: 'sv:binary:update:version:create', callback: (options: BinaryUpdateVersionCreateOptions) => void): void;
  on(eventName: 'sv:binary:update:version:delete', callback: (options: BinaryUpdateVersionDeleteOptions) => void): void;
  on(eventName: 'sv:binary:update:version:select', callback: (options: BinaryUpdateVersionSelectOptions) => void): void;
  on(eventName: 'sv:folder:update:metadata', callback: (options: FolderUpdateMetadataOptions) => void): void;
  on(eventName: 'sv:form:post', callback: (options: FormPostOptions) => void): void;
  on(eventName: 'sv:every-5-minutes', callback: (options: Every5MinutesOptions) => void): void;
  on(eventName: 'sv:every-15-minutes', callback: (options: Every15MinutesOptions) => void): void;
  on(eventName: 'sv:every-30-minutes', callback: (options: Every30MinutesOptions) => void): void;
  on(eventName: 'sv:every-hour', callback: (options: EveryHourOptions) => void): void;
  on(eventName: 'sv:every-day', callback: (options: EveryDayOptions) => void): void;

  /**
   * Stop listening to a given event
   *
   * @param eventName The name of the event
   * @param callback The callback to remove for the given event
   */
  off(eventName: string, callback: (options: unknown) => void): void;
  /**
   * Emit a server side event
   *
   * Note! Server side only
   *
   * @param eventName The name of the event to emit
   * @param options The options for the event
   */
  emit(eventName: string, options: unknown): void;
  /**
   * Trigger a client side event
   *
   * Note! Client side only
   *
   * @param eventName The name of the event to trigger
   * @param options The options for the event
   */
  trigger(eventName: string, options: unknown): void;
}

declare namespace Events {}

declare var events: Events;

export default events;
