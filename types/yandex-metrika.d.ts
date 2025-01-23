declare global {
  interface Window {
    ym: (
      id: number, 
      method: string, 
      event?: string, 
      params?: Record<string, any>
    ) => void;
  }
}

export {} 