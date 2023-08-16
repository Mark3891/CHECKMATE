import styled from "styled-components";

function MyBar() {
  
  const MyBarComponent = styled.div`
    font-family: "Pretendard";
    display: flex;
    justify-content: start;
    align-items: center;
    height: 80px;
    padding-top: 18px;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    padding:38px 20px 10px;

    .paddingT{
        padding-left: 3px;
    }
  `;

  const IconWrapper = styled.div`
    position: absolute;
    right: 26px;
    top: calc(50% - 16px/2);
    cursor: pointer;
  `;

  
 

  return (
    <MyBarComponent>
      <p className="paddingT">마이페이지</p>
      <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12Z" fill="black"/>
        </svg>
      </IconWrapper>
    </MyBarComponent>
  );
}

export default MyBar;
