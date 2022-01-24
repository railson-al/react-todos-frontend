import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";

import * as S from "./styles";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TypeIcons from "../../utils/TypeIcons";
import { isConnected } from "../../utils/isConnected";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

function Task() {
  const { _id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const [lateCount, setLateCount] = useState("");
  const [type, setType] = useState("");
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  async function showTask() {
    if (!_id) {
      return false;
    }

    await api.get(`/task/${_id}`).then((response) => {
      setTitle(response.data.title);
      setDone(response.data.done);
      setType(response.data.type);
      setDescription(response.data.description);
      setDate(format(new Date(response.data.when), "yyyy-MM-dd"));
      setHour(format(new Date(response.data.when), "HH:mm"));
    });
  }

  async function saveTask() {
    if (_id) {
      await api
        .put(`/task/${_id}`, {
          macaddress: isConnected,
          done,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`,
        })
        .then(() => setRedirect(true))
        .catch((error) => {
          if (!error) {
            return alert("erro");
          }

          alert(error.response.data.error);
        });
    } else {
      if (date === "" || hour === "") {
        // verify if date and hour has send
        return alert("data/hora requerida!");
      }

      if (type === "") {
        //verify if type has send
        return alert("Selecione a categoria!");
      }

      await api
        .post("/task", {
          macaddress: isConnected,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`,
        })
        .then(() => setRedirect(true))
        .catch((error) => {
          if (!error) {
            return alert("erro");
          }

          alert(error.response.data.error);
        });
    }
  }

  async function removeTask() {
    const confirm = window.confirm("Do you want to remove task?");

    if (!confirm) {
      return;
    }

    api.delete(`/task/${_id}`).then(setRedirect(true));
  }

  useEffect(() => {
    showTask();

    if (!isConnected) {
      setRedirect(true);
    }
  }, []);

  return (
    <>
      <S.Container>
        {redirect && navigate("/")}
        <Header />

        <S.Form>
          <S.TypeIcon>
            {TypeIcons.map(
              (icon, index) =>
                index > 0 && (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setType(index)}
                  >
                    <img
                      src={icon}
                      alt="Type"
                      className={(
                        type &&
                        type !== index &&
                        "unselected"
                      ).toString()}
                    />
                  </button>
                )
            )}
          </S.TypeIcon>

          <S.Input>
            <span>Title</span>
            <input
              type="text"
              placeholder="insert the title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </S.Input>

          <S.TextArea>
            <span>Description</span>
            <textarea
              placeholder="insert the title"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </S.TextArea>

          <S.Input>
            <span>Date</span>
            <input
              type="date"
              placeholder="insert the conclusion date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
            <img src={iconCalendar} alt="date" />
          </S.Input>

          <S.Input>
            <span>Hours</span>
            <input
              type="time"
              placeholder="insert the time"
              onChange={(e) => setHour(e.target.value)}
              value={hour}
            />
            <img src={iconClock} alt="hour" />
          </S.Input>

          <S.Options>
            <div>
              <input
                type="checkbox"
                checked={done}
                onChange={() => setDone(!done)}
              />
              <span>Done</span>
            </div>

            {_id && (
              <button onClick={removeTask} type="button">
                Delete
              </button>
            )}
          </S.Options>

          <S.Save>
            <button type="button" onClick={saveTask}>
              Save
            </button>
          </S.Save>
        </S.Form>

        <Footer />
      </S.Container>
    </>
  );
}

export default Task;
