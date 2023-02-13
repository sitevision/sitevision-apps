export interface ToastOptions {
  heading?: string;
  message: string;
  type?: string;
  ttl?: number;
  callback?: () => void;
  checkmark?: boolean;
}

export interface Toasts {
  publish(options: ToastOptions): void;
}

declare namespace Toasts {}

declare var toasts: Toasts;

export default toasts;
