import React from "react";
import styled from "styled-components";
import magnifier from "../img/magnifier.svg";

const SearchForm = styled.form`
  display: flex;
  background: #f5f8fa;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  border-radius: 100px;

  input {
    border: 0;
    padding: 8px 0 8px 11px;
    background: #f5f8fa;
    border-radius: 100px;
  }

  button {
    margin-right: 8px;
    background: #f5f8fa;
    border: 0;
  }
`;

export default () => (
  <SearchForm action="">
    <input type="text" placeholder="Search" />
    <button>
      <img src={magnifier} alt="" />
    </button>
  </SearchForm>
);
