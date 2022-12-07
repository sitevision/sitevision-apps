interface ToastOptions {
  heading?: string;
  message: string;
  type?: string;
  ttl?: number;
  callback?: () => void;
  checkmark?: boolean;
}

export function publish(options: ToastOptions): void;

declare namespace toasts {
  export { publish };
}

export default toasts;
