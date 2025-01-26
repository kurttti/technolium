import { LoadingSpinner } from "./loading-spinner";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <LoadingSpinner size="lg" />
          <p className="text-muted-foreground animate-pulse">
            Загрузка...
          </p>
        </div>
      </div>
    </div>
  );
}
