import React, { FC, memo, useEffect, useRef } from 'react';
import './vendors/prism';
import './vendors/prism.css';

export interface CodeHighlightProps {
  /** Thay đổi ngôn ngữ lập trình */
  language?: 'css' | 'scss' | 'js' | 'jsx' | 'tsx' | 'php' | 'go' | 'java' | 'python' | 'typescript' | 'c' | 'cpp';
  /** Đoạn code cần hiển thị */
  children: string;
}

const CodeHighlight: FC<CodeHighlightProps> = ({ language = 'js', children }) => {
  const _codeRef = useRef<HTMLElement | null>(null);
  const _prevChildren = useRef<string>('');

  const _handleCodeHighlight = (): void => {
    if (_codeRef.current) {
      (window as any).Prism.highlightElement(_codeRef.current);
    }
  };

  useEffect(() => {
    if (_prevChildren.current !== children) {
      _handleCodeHighlight();
    }
    _prevChildren.current = children;
  }, [children]);

  return (
    <pre>
      <code ref={_codeRef} className={`language-${language}`}>
        {children.trim()}
      </code>
    </pre>
  );
};

export default memo(CodeHighlight);
