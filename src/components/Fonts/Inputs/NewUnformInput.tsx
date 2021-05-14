/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Input, InputProps } from '@chakra-ui/react';

interface Props {
  name: string;
  label?: string;
}

type CustomInputProps = InputProps & Props;

export default function NewUnformInput({
  name,
  label,
  ...rest
}: CustomInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        display="flex"
        variant="filled"
        borderWidth={1}
        borderColor="brand.900"
        w={['100%', '100%', '']}
        minW="120px"
        maxW={['', '', '280px']}
        focusBorderColor="brand.200"
        color="brand.200"
        textAlign="center"
        _placeholder={{
          color: 'brand.200',
          fontSize: 'sm',
          fontWeight: 400,
        }}
        borderRadius="full"
        pl={2}
        m={2}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}
