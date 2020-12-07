import React, { FC, ReactNode } from 'react';

export interface FormItemProps {
  title: string;
  children?: ReactNode;
}

const FormItem: FC<FormItemProps> = ({ title, children }) => {
  return (
    <div>
      {title}
      {children}
    </div>
  );
};
export default FormItem;
