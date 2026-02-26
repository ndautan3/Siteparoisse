import { useFadeIn } from '@/hooks/useFadeIn';

export const FadeIn = ({ children, className = '', delay = 0 }) => {
  const ref = useFadeIn();

  return (
    <div
      ref={ref}
      className={`fade-in-section ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
