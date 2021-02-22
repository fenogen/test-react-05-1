import styled from 'styled-components';

export const CardItem = styled.div`
  width: 50%;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border: 1px solid #eee;
  }
`;

export const CardTitle = styled.p`
  position: relative;
  padding: 0 20px;
  height: 45px;
`;