import React from "react";
import styled from "styled-components"

function FormField({ label, type, name, value, onChange, delet,onDelet }) {
  if(type === 'textarea'){
    return (
      <div>
        <label>
          {label}{'  '}
          <textarea
            type='text'
            value={value}
            name={name}
            onChange={onChange}
          />
        </label>
        {delet &&  (
          <DeleteButton type="button" onClick={onDelet}>Apagar</DeleteButton>)}
      </div>
    )
  }
  else{
    return (
      <div>
        <label>
          {label}{'  '}
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
        </label>
        {
        delet &&  (
          <DeleteButton type="button" onClick={onDelet}>Apagar</DeleteButton>)
        }
      </div>
    )
  }

}

const DeleteButton = styled.button`
    cursor: pointer;
    padding:7px;
    color:#fbb;
    background-color:#f11;
    border:none;
    margin-left:5px;
    outline:none; 
    transition: 450ms;

    &:hover{
      opacity:.8;
      transform:translateY(-.2rem)
    }
`;

export default FormField;