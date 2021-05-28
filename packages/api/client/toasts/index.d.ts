enum ToastType {
  DEFAULT = '',
  SUCCESS = 'success',
  PRIMARY = 'primary',
}

interface ToastOptions {
  heading: string;
  message: string;
  type: ToastType;
  ttl: number;
  callback: () => void;
  checkmark: boolean;
}

interface toasts {
  publish(options: ToastOptions): void;
}

export default toasts;
