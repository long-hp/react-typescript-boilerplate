import React from 'react';
import CodeHighlight, { CodeHighlightProps } from 'components/CodeHighlight';
import { select, text } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';

export default {
  title: 'General/CodeHighlight',
  component: (CodeHighlight as any).type,
};
console.log(CodeHighlight);

const defaultChildren = `function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}
ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('container')
);`;

function decodeHtml(html: string) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

export const Default = () => {
  const language = select<CodeHighlightProps['language']>(
    'language',
    getOptions<CodeHighlightProps['language'][]>(['c', 'cpp', 'css', 'go', 'java', 'js', 'jsx', 'php', 'python', 'scss', 'tsx', 'typescript']),
    'jsx',
  );
  const children = text('children', defaultChildren);

  return <CodeHighlight language={language}>{decodeHtml(children)}</CodeHighlight>;
};
