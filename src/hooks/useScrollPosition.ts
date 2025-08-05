import { useState, useEffect, useCallback } from 'react';

interface UseScrollPositionOptions {
  threshold?: number;
  passive?: boolean;
}

export const useScrollPosition = (options: UseScrollPositionOptions = {}) => {
  const { threshold = 10, passive = true } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, passive]);

  return isScrolled;
}; 