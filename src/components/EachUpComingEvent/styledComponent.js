import styled from "styled-components";

const EventBgContainer = styled.li`
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:flex-start
  height: 20vh;
  width: 20vw;
  margin: auto;
  color: #989090;
`;

export default EventBgContainer;
