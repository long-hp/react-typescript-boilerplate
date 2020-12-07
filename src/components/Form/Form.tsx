import React, { ReactNode } from 'react';
import FormItem from './FormItem';

export interface FormProps {
  children?: ReactNode;
  image: string;
}

const Form = ({ children, image }: FormProps) => {
  return (
    <div>
      {image}
      {children}
    </div>
  );
};

Form.Item = FormItem;

export default Form;
