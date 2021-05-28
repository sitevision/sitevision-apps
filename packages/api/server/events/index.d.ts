interface events {
  on(eventName: string, callback: (options: any) => void): void;
  emit(eventName: string, options: any): void;
}

export default events;
