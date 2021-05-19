import React, { FC, useRef, useState } from 'react';
import { View } from 'wiloke-react-core';

export interface LinkPrefetchProps {
  link: string;
}

const createLinkElement = (link: string) => {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'prefetch');
  linkEl.setAttribute('as', 'html');
  linkEl.setAttribute('href', link);
  return linkEl;
};

const LinkPrefetch: FC<LinkPrefetchProps> = ({ link, children }) => {
  const linkElRef = useRef<HTMLLinkElement | null>(null);
  const timeoutIdRef = useRef(0);
  const [load, setLoad] = useState(false);

  const handleMouseEnter = () => {
    linkElRef.current = createLinkElement(link);
    timeoutIdRef.current = window.setTimeout(() => {
      setLoad(true);
      clearTimeout(timeoutIdRef.current);
    }, 500);
    if (!!linkElRef.current && !document.querySelector(`link[href="${link}"]`)) {
      document.head.appendChild(linkElRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (!load) {
      clearTimeout(timeoutIdRef.current);
      linkElRef.current?.remove();
    }
  };

  return (
    <View onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </View>
  );
};

export default LinkPrefetch;
