import React from "react";
import { Link } from "react-router-dom";

import * as S from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png'


function Header({ lateCount, clickNotification }) {
    return (

      <S.Container>
        <S.LeftSide>
          <img src={logo} alt={'logo'}/>
        </S.LeftSide>

        <S.RightSide>
          <Link to='/'>Home</Link>
          <Link to='/task'>New Task</Link>
          <a href={'#'}>Sync Mobile</a>
          <a onClick={clickNotification} id="notification">
            <img src={bell} alt="notification"/>
            <span>{lateCount}</span>
          </a>
        </S.RightSide>
      </S.Container>

    );
  }
  
  export default Header;
  