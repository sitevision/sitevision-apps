export function on(eventName: string, callback: (options: any) => void): void;
export function emit(eventName: string, options: any): void;

declare namespace events {
  export { on, emit };
}

export default events;
