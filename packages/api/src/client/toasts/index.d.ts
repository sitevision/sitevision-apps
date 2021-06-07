interface ToastOptions {
  heading: string;
  message: string;
  type: string;
  ttl: number;
  callback: () => void;
  checkmark: boolean;
}

declare namespace toasts {
  function publish(options: ToastOptions): void;
}

export default toasts;
