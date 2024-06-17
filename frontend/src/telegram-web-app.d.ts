// telegram-web-app.d.ts
export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        close: () => void;
        ready: () => void;
        onEvent: (event: string, callback: () => void) => void;
        sendData: (data: string) => void;  // Ensure this method is supported by the Telegram API you're using
      };
    };
  }
}
