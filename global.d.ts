
export {};

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      isMetaMask?: boolean; 
      on?: (event: string, handler: (...args: any[]) => void) => void; 
    };
  }
}