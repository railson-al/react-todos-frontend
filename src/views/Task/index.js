import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/TypeIcons';

import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'


function Task() {

    const [lateCount, setLateCount] =   useState('');
    const [type, setType] =             useState('');
    const [id, setId] =                 useState('');
    const [done, setDone] =             useState(false);
    const [title, setTitle] =           useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] =             useState('');
    const [hour, setHour] =             useState('');
    const [macadress, setMacadress] = useState('fe:30:09:4b:11:11');


    async function lateVerify() {
      await api.get(`/task/filter/late/fe:30:09:4b:11:11`)
                .then(response => {
                  setLateCount(response.data.length);
                })
    };

    async function createTask() {
      if(date === '' || hour === ''){
        return alert('data/hora requerida!');
      }
      
      if(type === ''){
        return alert('Selecione a categoria!');
      }

      await api.post('/task', {
        macadress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`

      }).then(() =>(

        alert('Tarefa criada com sucesso!'),
        window.location.href = "/"

      )).catch(error => {

        if(!error) {
          return alert('erro');
        }

        alert(error.response.data.error)
      });
    }


    useEffect(() => {

      lateVerify();
    }, []);

    return (
      <>
        <S.Container>
            <Header lateCount={lateCount}/>

            <S.Form>
                <S.TypeIcon>
                    {
                        TypeIcons.map((icon, index) => (
                            index > 0 && 
                            <button key={index} type="button" onClick={() => setType(index)}>
                                <img src={icon} alt="Type task" 
                                     className={type && type !== index && 'unselected'}/>
                            </button>
                             
                        ))
                    }
                </S.TypeIcon>

                <S.Input>
                  <span>Title</span>
                  <input type="text" placeholder="insert the title" 
                    onChange={e => setTitle(e.target.value)} value={title}
                  />

                </S.Input>

                <S.TextArea>
                  <span>Title</span>
                  <textarea placeholder="insert the title" 
                  onChange={e => setDescription(e.target.value)} value={description}/>
                </S.TextArea>

                <S.Input>
                  <span>Date</span>
                  <input type="date" placeholder="insert the conclusion date" 
                  onChange={e => setDate(e.target.value)} value={date}/>
                  <img src={iconCalendar} alt="date" />
                </S.Input>

                <S.Input>
                  <span>Hours - {hour}</span>
                  <input type="time" placeholder="insert the time"
                  onChange={e => setHour(e.target.value)} value={hour}/>
                  <img src={iconClock} alt="hour" />
                </S.Input>

                <S.Options>
                  <div>
                    <input type="checkbox" 
                    checked={done} onChange={() => setDone(!done)}/>
                    <span>Done</span>
                  </div>

                  <button type="button">Delete</button>
                </S.Options>

                <S.Save>
                  <button type="button" onClick={createTask}>Save</button>
                </S.Save>


            </S.Form>

            <Footer/>
        </S.Container>
      </>
    );
  }
  
  export default Task;
  