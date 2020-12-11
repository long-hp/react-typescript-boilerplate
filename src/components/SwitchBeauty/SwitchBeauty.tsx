import React, { FC } from 'react';
import FieldBox, { BoxProps } from 'components/FieldBox';
import Switch, { SwitchProps } from 'components/Switch/Switch';
import TextStatus, { TextStatusProps } from 'components/SwitchBeauty/TextStatus';
import { omit, pick } from 'ramda';
import { classNames } from 'wiloke-react-core/utils';
import styles from './SwitchBeauty.module.scss';

export interface SwitchBeautyProps
  extends SwitchProps,
    Omit<BoxProps, 'children'>,
    Pick<TextStatusProps, 'size' | 'enable' | 'enableText' | 'disableText' | 'enableColor' | 'disableColor' | 'fontSize'> {}

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
  const textStatusPropsKeys: (keyof TextStatusProps)[] = ['size', 'enable', 'enableText', 'disableText', 'enableColor', 'disableColor', 'fontSize'];
  const omitFieldBoxPropsKeys = [...switchPropsKeys, ...textStatusPropsKeys];
  const switchProps = pick(switchPropsKeys, rest);
  const textStatusProps = pick(textStatusPropsKeys, rest);
  const fieldBoxProps = omit(omitFieldBoxPropsKeys, rest);
  const { size = 'medium', disabled } = rest;
  const disabledClass = disabled ? 'ui-disable' : '';
  const sizeClass = styles[size];
  const classes = classNames(styles.container, sizeClass, disabledClass);
  return (
    <FieldBox className={classes} tachyons={['flex', 'items-center', 'justify-between']} {...fieldBoxProps}>
      <Switch {...switchProps}>{value => <TextStatus {...textStatusProps} enable={value} />}</Switch>
    </FieldBox>
  );
};

export default SwitchBeauty;
