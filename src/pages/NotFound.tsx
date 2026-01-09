import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary">
      <div className="text-center px-6">
        <h1 className="font-display text-8xl font-bold text-gradient-gold mb-4">404</h1>
        <p className="text-xl text-secondary-foreground/70 mb-8">
          Oops! This page doesn't exist.
        </p>
        <Button variant="gold" asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
