import React from 'react';

export type InputFieldType = {
  inputValue: string;
  label?: string;
  keyboardType?: 'email-address' | 'default' | 'number-pad';
  placeholder?: string;
  leftIcon?: React.ReactNode;
};
