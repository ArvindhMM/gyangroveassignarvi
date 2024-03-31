import styled from "styled-components";

const ShowBackgroundContainer = styled.li`
  list-style-type: none;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  width: 250px;
  margin: 2vw;
  color: #989090;
  border-radius: 3px;
`;

export default ShowBackgroundContainer;
