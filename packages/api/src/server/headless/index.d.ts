export interface HeadlessContentParams {
  textPortletFormat?: 'JSON' | 'PLAIN';
}

export interface ImageContent {
  mimeType: string;
  displayName: string;
  URL: string;
  id?: string;
  alt?: string;
  URI?: string;
}

export interface TextElement {
  type: 'text';
  content: string;
}

export interface HtmlElement {
  type: 'block' | 'inline';
  htmlTag: string;
  attributes?: Record<string, string>;
  children: (HtmlElement | TextElement)[];
}

export interface FileContent {
  mimeType: string;
  displayName: string;
  URL: string;
}

export interface VideoContent {
  displayName: string;
  mimeType: string;
  URL: string;
  id?: string;
  streamURI?: string;
  streamURL?: string;
  URI?: string;
}

export interface HeadlessContent {
  type: string;
}

export interface HeadlessImageContent extends HeadlessContent {
  type: 'image';
  properties: {
    image: ImageContent;
  };
}

export interface HeadlessImagesContent extends HeadlessContent {
  type: 'images';
  properties: {
    images: ImageContent[];
  };
}

export interface HeadlessVideoContent extends HeadlessContent {
  type: 'video';
  properties: {
    video: VideoContent;
  };
}

export interface HeadlessTextContent extends HeadlessContent {
  type: 'text';
  properties: {
    textContent: string | HtmlElement[];
  };
}

export interface HeadlessFilesContent extends HeadlessContent {
  type: 'files';
  properties: {
    files: FileContent[];
  };
}

export interface Headless {
  getHeadlessContent(
    callback: (
      params: HeadlessContentParams
    ) => (
      | HeadlessImageContent
      | HeadlessImagesContent
      | HeadlessVideoContent
      | HeadlessTextContent
      | HeadlessFilesContent
    )[]
  ): void;
}

declare namespace Headless {}

declare var headless: Headless;

export default headless;
