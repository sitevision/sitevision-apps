declare namespace events {
  function on(eventName: string, callback: (options: any) => void): void;
  function emit(eventName: string, options: any): void;
}

export default events;
