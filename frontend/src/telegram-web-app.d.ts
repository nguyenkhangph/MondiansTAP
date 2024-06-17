// src/types/telegram-web-app.d.ts
export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        close: () => void;
        ready: () => void;
        onEvent: (event: string, callback: () => void) => void;
      };
    };
  }
}
