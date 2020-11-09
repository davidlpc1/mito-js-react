import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
    overflow: hidden;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  padding: 7px;
  color: var(--logo);
  background-color: var(--primary);
  border: none;
  margin-left: 5px;
  outline: none;
  transition: 450ms;
  position: absolute;
  top:1px;
  right:1px;
  border-radius:4px;

  &:hover {
    opacity: 0.4;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: 450ms ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color 400ms;
  
  &:focus {
    border-bottom-color: var(--logo);
  }

  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  label, type, name, value, onChange, delet, onDelet, suggestions,
}) {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  const fieldId = `id_${name}`;

  const hasSuggestion = Boolean(suggestions.length);
  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          type={type}
          id={fieldId}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete={hasSuggestion ? 'off' : 'on'}
          list={`suggestionFor_${fieldId}`}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {hasSuggestion && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {
            suggestions.map((suggestion) => (
              <option
                value={suggestion}
                key={`suggestionFor_${fieldId}_option_${suggestion}`}
              >
                {suggestion}
              </option>
            ))
          }
          </datalist>
        )}

      </Label>
      {delet && (
      <DeleteButton type="button" onClick={onDelet}>
        Apagar
      </DeleteButton>
      )}
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  delet: false,
  onDelet: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  delet: PropTypes.bool,
  onDelet: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
