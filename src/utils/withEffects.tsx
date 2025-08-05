import React from 'react';

export const withHover = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WithHoverComponent = React.forwardRef<HTMLElement, P>((props, ref) => {
    return <Component {...(props as P)} ref={ref} />;
  });
  
  WithHoverComponent.displayName = `withHover(${Component.displayName || Component.name || 'Component'})`;
  
  return WithHoverComponent;
}; 