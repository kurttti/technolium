import { createContext, useContext, ReactNode } from 'react';

interface AnimationContextType {
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [isAnimating, setIsAnimating] = React.useState(false);

  return (
    <AnimationContext.Provider value={{ isAnimating, setIsAnimating }}>
      {children}
    </AnimationContext.Provider>
  );
}
