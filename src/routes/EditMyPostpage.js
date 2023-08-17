import React from "react";
import styled from "styled-components";
import AppBar from '../components/AppBar'
import BackImage from "../assets/images/background.jpeg";
import { useLocation } from 'react-router-dom';
import EditPost from "../components/EditPost";



function EditMyPostpage() {


const location = useLocation();
const userInfo = { ...location.state };
console.log(userInfo);
  const EditMyPostpage = styled.div`
    @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
    }
    background-color: white;
    width: 375px;
    height: 100vh;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `;


  
  return (
   
      <EditMyPostpage>
        <AppBar />
       <EditPost Id={userInfo.postId}/>
      
      </EditMyPostpage>

  );
}


export default EditMyPostpage;