/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Input, InputProps } from '@chakra-ui/react';
import ReactInputMask from 'react-input-mask';

interface Props {
  name: string;
  label?: string;
  mask: string;
}

type CustomInputProps = InputProps & Props;

export default function NewUnformInputMask({
  name,
  label,
  mask,
  ...rest
}: CustomInputProps) {
  const inputRef = useRef(null);

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
      <ReactInputMask ref={inputRef} defaultValue={defaultValue} mask={mask}>
        {() => (
          <Input
            id={fieldName}
            ref={inputRef}
            defaultValue={defaultValue}
            display="flex"
            variant="filled"
            borderWidth={1}
            borderColor="brand.900"
            w={['100%', '100%', '']}
            maxW={['', '', '280px']}
            minW="120px"
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
        )}
      </ReactInputMask>

      {error && <span>{error}</span>}
    </>
  );
}
