import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { isConnected } from "../../utils/isConnected";

import * as S from "./styles";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();
  const [blockNavigate, setBlockNavigate] = useState(true);

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  function logout() {
    localStorage.removeItem("@todo/macaddress");
    window.location.reload();
  }

  useEffect(() => {
    lateVerify();

    if (!isConnected) setBlockNavigate(false);
  }, []);

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt={"logo"} />
      </S.LeftSide>

      {blockNavigate && (
        <S.RightSide>
          <Link to="/">Home</Link>
          <Link to="/task">New Task</Link>

          <a onClick={logout}> Exit </a>
          <a onClick={clickNotification} id="notification">
            <img src={bell} alt="notification" />
            {lateCount > 0 && <span>{lateCount}</span>}
          </a>
        </S.RightSide>
      )}
    </S.Container>
  );
}

export default Header;
