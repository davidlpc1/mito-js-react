/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FormField({
  label, type, name, value, onChange, delet, onDelet,
}) {
  const fieldId = `id_${name}_delete=${delet}`;

  if (type === 'textarea') {
    return (
      <div>
        <label
          htmlFor={fieldId}
        >
          {label}
          {'  '}
          <textarea
            id={fieldId}
            type="text"
            value={value}
            name={name}
            onChange={onChange}
          />
        </label>
        {delet && (
          <DeleteButton type="button" onClick={onDelet}>
            Apagar
          </DeleteButton>
        )}
      </div>
    );
  }
  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        {'  '}
        <input id={fieldId} type={type} value={value} name={name} onChange={onChange} />
      </label>
      {delet && (
      <DeleteButton type="button" onClick={onDelet}>
        Apagar
      </DeleteButton>
      )}
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  // name:,
  // value:,
  // onChange:,
  // delet:,
  // onDelet:,
};

const DeleteButton = styled.button`
  cursor: pointer;
  padding: 7px;
  color: #fbb;
  background-color: #f11;
  border: none;
  margin-left: 5px;
  outline: none;
  transition: 450ms;

  &:hover {
    opacity: 0.8;
    transform: translateY(-0.2rem);
  }
`;

export default FormField;
