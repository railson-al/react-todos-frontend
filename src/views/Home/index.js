import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";

import api from "../../services/api";

import { isConnected } from "../../utils/isConnected";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";
import TaskCard from "../../components/TaskCard";

function Home() {
  const [filterActived, setFilterActived] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState();
  const navigate = useNavigate();

  async function loadTasks() {
    await api
      .get(`/task/filter/${filterActived}/${isConnected}`)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        return error;
      });
  }

  function Notification() {
    setFilterActived("late");
  }

  useEffect(() => {
    loadTasks();

    if (!isConnected) {
      setRedirect(true);
    }
  }, [filterActived]);

  return (
    <>
      <S.Container>
        {redirect && navigate("/sync")}
        <Header clickNotification={Notification} />

        <S.FilterArea>
          <button type="button" onClick={() => setFilterActived("all")}>
            <FilterCard title="All" actived={filterActived === "all"} />
          </button>

          <button type="button" onClick={() => setFilterActived("today")}>
            <FilterCard title="Today" actived={filterActived === "today"} />
          </button>

          <button type="button" onClick={() => setFilterActived("week")}>
            <FilterCard title="7 days" actived={filterActived === "week"} />
          </button>

          <button type="button" onClick={() => setFilterActived("month")}>
            <FilterCard title="30 days" actived={filterActived === "month"} />
          </button>

          <button type="button" onClick={() => setFilterActived("year")}>
            <FilterCard title="1 year" actived={filterActived === "year"} />
          </button>
        </S.FilterArea>

        <S.Title>
          <h3>{filterActived === "late" ? "Overdue Tasks" : "Tasks"}</h3>
        </S.Title>

        <S.Content>
          {tasks.map((task) => (
            <Link key={task._id} to={`/task/${task._id}`}>
              <TaskCard
                title={task.title}
                type={task.type}
                when={task.when}
                done={task.done}
              />
            </Link>
          ))}
        </S.Content>

        <Footer />
      </S.Container>
    </>
  );
}

export default Home;
