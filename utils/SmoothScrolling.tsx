'use client';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

interface Props {
  children: JSX.Element | JSX.Element[];
}

function SmoothScrolling({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
