import type { Node } from '../../public-api/types/javax/jcr/Node';

/** Emitted when something (typically a page) is published. */
export type PublishingPublishOptions = {
  event: 'sv:publishing:publish';
  emitter: string;
  timestamp: number;
  node: string;
  publishingComment?: string;
};

/** Emitted when something (typically a page) is unpublished. */
export type PublishingUnpublishOptions = {
  event: 'sv:publishing:unpublish';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when a simple user is created. */
export type SimpleUserCreateOptions = {
  event: 'sv:simpleuser:create';
  emitter: string;
  timestamp: number;
  user: string;
};

/** Emitted when a simple user is updated. */
export type SimpleUserUpdateOptions = {
  event: 'sv:simpleuser:update';
  emitter: string;
  timestamp: number;
  user: string;
};

/** Emitted when the http session for a simple user is destroyed (e.g. session timed out). */
export type SimpleUserSessionDestroyOptions = {
  event: 'sv:simpleuser:session:destroy';
  emitter: string;
  timestamp: number;
  user: string;
};

/** Emitted when something (typically a page) is moved. */
export type StructureMoveOptions = {
  event: 'sv:structure:move';
  emitter: string;
  timestamp: number;
  node: string;
  from: string;
  to: string;
};

/** Emitted when something (typically a page/article/file/image) is added to the trashcan. */
export type TrashcanAddOptions = {
  event: 'sv:trashcan:add';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when something (typically a page/article/file/image) is restored from the trashcan. */
export type TrashcanRestoreOptions = {
  event: 'sv:trashcan:restore';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when a file or an image is added to a repository or folder. */
export type BinaryCreateOptions = {
  event: 'sv:binary:create';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when the content for a file or an image has been updated. */
export type BinaryUpdateContentOptions = {
  event: 'sv:binary:update:content';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when metadata for a file or an image has been updated. */
export type BinaryUpdateMetadataOptions = {
  event: 'sv:binary:update:metadata';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when the name of a file or an image has been changed. */
export type BinaryUpdateNameOptions = {
  event: 'sv:binary:update:name';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when tags for a file or an image has been changed. */
export type BinaryUpdateTagsOptions = {
  event: 'sv:binary:update:tags';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when a new version of a file has been created. */
export type BinaryUpdateVersionCreateOptions = {
  event: 'sv:binary:update:version:create';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when a version of a file has been deleted. */
export type BinaryUpdateVersionDeleteOptions = {
  event: 'sv:binary:update:version:delete';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when a version of a file has been selected. */
export type BinaryUpdateVersionSelectOptions = {
  event: 'sv:binary:update:version:select';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Emitted when a folder whose metadata is updated. */
export type FolderUpdateMetadataOptions = {
  event: 'sv:folder:update:metadata';
  emitter: string;
  timestamp: number;
  node: string;
};

/** Form field answer structure */
export type FormAnswer = {
  /** Unique identifier for the form field */
  id: string;
  /** The question or prompt shown to the user */
  question: string;
  /** User's answer as a string. For file uploads, value is a sv:temporaryFile */
  value: string | Node | unknown;
};

/** Emitted when Sitevision's email/question-form module is posted. */
export type FormPostOptions = {
  event: 'sv:form:post';
  emitter: string;
  timestamp: number;
  /** The JCR identifier of the page the form was posted */
  node: string;
  /** Array of form field answers */
  answers: FormAnswer[];
};

/** Emitted every 5 minutes. */
export type Every5MinutesOptions = {
  event: 'sv:every-5-minutes';
  emitter: 'anonymous';
  timestamp: number;
};

/** Emitted every 15 minutes. */
export type Every15MinutesOptions = {
  event: 'sv:every-15-minutes';
  emitter: 'anonymous';
  timestamp: number;
};

/** Emitted every 30 minutes. */
export type Every30MinutesOptions = {
  event: 'sv:every-30-minutes';
  emitter: 'anonymous';
  timestamp: number;
};

/** Emitted every hour. */
export type EveryHourOptions = {
  event: 'sv:every-hour';
  emitter: 'anonymous';
  timestamp: number;
};

/** Emitted every day. */
export type EveryDayOptions = {
  event: 'sv:every-day';
  emitter: 'anonymous';
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
  on(eventName: 'sv:publishing:publish', callback: (options: PublishingPublishOptions) => void): void;
  on(eventName: 'sv:publishing:unpublish', callback: (options: PublishingUnpublishOptions) => void): void;
  on(eventName: 'sv:simpleuser:create', callback: (options: SimpleUserCreateOptions) => void): void;
  on(eventName: 'sv:simpleuser:update', callback: (options: SimpleUserUpdateOptions) => void): void;
  on(eventName: 'sv:simpleuser:session:destroy', callback: (options: SimpleUserSessionDestroyOptions) => void): void;
  on(eventName: 'sv:structure:move', callback: (options: StructureMoveOptions) => void): void;
  on(eventName: 'sv:trashcan:add', callback: (options: TrashcanAddOptions) => void): void;
  on(eventName: 'sv:trashcan:restore', callback: (options: TrashcanRestoreOptions) => void): void;
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
  // Union type overloads for grouped events
  on(eventName: 'sv:publishing', callback: (options: PublishingOptions) => void): void;
  on(eventName: 'sv:simpleuser', callback: (options: SimpleUserOptions) => void): void;
  on(eventName: 'sv:binary', callback: (options: BinaryOptions) => void): void;
  on(eventName: 'sv:timer', callback: (options: TimerOptions) => void): void;
  on(eventName: 'sv:trashcan', callback: (options: TrashcanOptions) => void): void;
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
