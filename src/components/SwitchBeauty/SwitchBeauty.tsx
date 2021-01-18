import React, { FC } from 'react';
import FieldBox, { BoxProps } from 'components/FieldBox';
import Switch, { SwitchProps } from 'components/Switch/Switch';
import TextStatus, { TextStatusProps } from 'components/SwitchBeauty/TextStatus';
import { omit, pick } from 'ramda';
import * as css from './styles';

export interface SwitchBeautyProps
  extends SwitchProps,
    Omit<BoxProps, 'children' | 'onChange'>,
    Pick<TextStatusProps, 'size' | 'enable' | 'enableText' | 'disableText' | 'enableColor' | 'disableColor'> {}

const SwitchBeauty: FC<SwitchBeautyProps> = ({ ...rest }) => {
  const switchPropsKeys: (keyof SwitchProps)[] = [
    'checked',
    'CheckedChildren',
    'UnCheckedChildren',
    'defaultChecked',
    'loading',
    'size',
    'disabled',
    'onValueChange',
    'onChange',
  ];
  const textStatusPropsKeys: (keyof TextStatusProps)[] = ['size', 'enable', 'enableText', 'disableText', 'enableColor', 'disableColor'];
  const omitFieldBoxPropsKeys = [...switchPropsKeys, ...textStatusPropsKeys];
  const switchProps = pick(switchPropsKeys, rest);
  const textStatusProps = pick(textStatusPropsKeys, rest);
  const fieldBoxProps = omit(omitFieldBoxPropsKeys, rest);
  const { size = 'large', disabled = false } = rest;

  return (
    <FieldBox css={[css.container(size), css.disabled(disabled)]} {...fieldBoxProps}>
      <Switch {...switchProps} renderAfter={value => <TextStatus {...textStatusProps} enable={value} />} />
    </FieldBox>
  );
};

export default SwitchBeauty;
