export interface AppInfo {
  appVersion: string;
  maxUploadSizeInMB: number;
  appHelpURL: string;
  addon: {
    'jcr:uuid': string;
    'jcr:primaryType': string;
    displayName: string;
  };
  appName: string;
  appDescription: string;
  certificate: {
    signee: string;
    signed: boolean;
  };
  active: boolean;
  runtime: {
    sitevisionVersion: string;
    scriptEngineLanguageVersion: number;
    scriptEngineVersion: string;
    serverName: string;
    scriptEngineName: string;
  };
  'jcr:uuid': string;
  requirePrivileged: boolean;
  appIdentifier: string;
  appAuthor: string;
  appType: string;
  appImportDate: number;
  'jcr:primaryType': string;
}

declare namespace AppInfo {}

declare var appInfo: AppInfo;

export default appInfo;
