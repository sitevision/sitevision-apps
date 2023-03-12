import { AppData } from '../appData';

export interface GlobalAppData extends AppData {}

declare namespace GlobalAppData {}

declare var globalAppData: GlobalAppData;

export default globalAppData;
