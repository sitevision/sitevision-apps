interface HeadlessContentParams {
  textPortletFormat?: 'JSON' | 'PLAIN';
}

interface ImageContent {
  mimeType: string;
  displayName: string;
  URL: string;
  id?: string;
  alt?: string;
  URI?: string;
}

interface TextElement {
  type: 'text';
  content: string;
}

interface HtmlElement {
  type: 'block' | 'inline';
  htmlTag: string;
  attributes?: Record<string, string>;
  children: (HtmlElement | TextElement)[];
}

interface FileContent {
  mimeType: string;
  displayName: string;
  URL: string;
}

interface VideoContent {
  displayName: string;
  mimeType: string;
  URL: string;
  id?: string;
  streamURI?: string;
  streamURL?: string;
  URI?: string;
}

interface HeadlessContent {
  type: string;
}

interface HeadlessImageContent extends HeadlessContent {
  type: 'image';
  properties: {
    image: ImageContent;
  };
}

interface HeadlessImagesContent extends HeadlessContent {
  type: 'images';
  properties: {
    images: ImageContent[];
  };
}

interface HeadlessVideoContent extends HeadlessContent {
  type: 'video';
  properties: {
    video: VideoContent;
  };
}

interface HeadlessTextContent extends HeadlessContent {
  type: 'text';
  properties: {
    textContent: string | HtmlElement[];
  };
}

interface HeadlessFilesContent extends HeadlessContent {
  type: 'files';
  properties: {
    files: FileContent[];
  };
}

export function getHeadlessContent(
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

declare namespace headless {
  export { getHeadlessContent };
}

export default headless;
