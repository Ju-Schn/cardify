import styled from 'styled-components';
import StyledButton from './StyledButton';

export default function Card({ question, answer }) {
  return (
    <FileCard>
      <h2>Frage: </h2>
      <span>{question}</span>
      <h2>Antwort: </h2>
      <span>{answer}</span>
      <StyledButton>
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8657 1.52185L19.376 3.04242C21.3607 3.77839 22.7138 4.88554 22.7138 6.40355C22.7138 9.48181 17.1594 10.8808 12.0006 10.8808C6.84057 10.8808 1.28873 9.48181 1.28873 6.40355C1.28873 4.77546 2.84809 3.62095 5.07502 2.88883L5.57504 1.3977C2.42668 2.22582 0 3.80015 0 6.40227V9.30006C0 10.8667 0.88278 12.0583 2.26816 12.9415L2.77721 24.8001C2.77721 26.5665 6.99651 28 12.2004 28C17.4043 28 21.6249 26.5665 21.6249 24.8001L22.1468 12.6497C23.2873 11.7998 24 10.7042 24 9.30006V6.40099C24.0026 3.92174 21.7963 2.37941 18.8657 1.52185ZM6.3225 25.0433C5.70907 24.6773 5.00542 23.9605 4.81985 23.46C3.5221 19.9274 3.87907 17.1627 4.13682 13.8477C5.10079 14.2061 6.17301 14.4774 7.29421 14.6707C7.01713 18.0728 6.74005 20.9718 7.29936 24.6901C7.38442 25.2379 6.93465 25.4068 6.32379 25.0446L6.3225 25.0433ZM14.2173 25.3019C14.1915 25.8702 13.3255 26.3962 12.261 26.3962C11.1939 26.3962 10.3305 25.8676 10.306 25.298C10.1436 21.4633 10.2647 18.4862 10.3936 15.0073C10.9323 15.0368 11.4697 15.056 11.9994 15.056C12.6978 15.056 13.4118 15.0304 14.1258 14.9792C14.2546 18.4734 14.3783 21.4557 14.216 25.3006L14.2173 25.3019ZM19.7021 23.4613C19.5178 23.9631 18.8129 24.6773 18.2007 25.0421C17.5911 25.4056 17.1491 25.234 17.2303 24.6888C17.7935 20.9386 17.5061 18.0229 17.2239 14.5824C18.3579 14.3597 19.425 14.0486 20.3684 13.648C20.6287 17.0527 21.0256 19.8583 19.7034 23.4626L19.7021 23.4613ZM6.63824 6.33699C6.96315 6.4434 7.31724 6.41795 7.62333 6.26619C7.92942 6.11443 8.16271 5.84865 8.27235 5.52679H8.26977L9.26209 2.56116H15.1387L16.1336 5.52551C16.2427 5.84685 16.4753 6.11229 16.7808 6.26384C17.0862 6.4154 17.4396 6.44078 17.7638 6.33443C17.9246 6.28148 18.0732 6.19758 18.2013 6.08753C18.3294 5.97748 18.4344 5.84343 18.5103 5.69306C18.5861 5.54269 18.6314 5.37894 18.6436 5.21116C18.6557 5.04339 18.6344 4.8749 18.5809 4.7153L17.2896 0.87548C17.2044 0.621336 17.041 0.400154 16.8225 0.243093C16.604 0.0860314 16.3414 0.0010076 16.0717 0H8.33679C7.78521 0 7.29034 0.351984 7.11507 0.8742L5.82634 4.71403C5.60082 5.38472 5.96553 6.10916 6.63824 6.33443V6.33699Z"
            fill="#D92B04"
          />
        </svg>
      </StyledButton>
    </FileCard>
  );
}

const FileCard = styled.section`
  background-color: #f4e9c9;
  color: #000;
  font-size: 24px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 30px 30px 30px;

  h2 {
    margin-top: 24px;
  }

  span {
    margin-top: 16px;
  }
`;
