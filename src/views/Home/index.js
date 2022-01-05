import React, {useState, useEffect} from 'react';
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {

    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);
    const [lateCount, setLateCount] = useState();

    async function loadTasks() {
      await api.get(`/task/filter/${filterActived}/fe:30:09:4b:11:11`)
                .then(response => {
                  setTasks(response.data);

                })
                .catch(error => {
                  return error;
                }); 
    };

    async function lateVerify() {
      await api.get(`/task/filter/late/fe:30:09:4b:11:11`)
                .then(response => {
                  setLateCount(response.data.length);
                })
    };

    function Notification() {
      setFilterActived('late')
    }

    useEffect(() => {
      loadTasks();
      lateVerify();
    }, [filterActived])

    return (
      <>
        <S.Container>
          <Header lateCount={lateCount} clickNotification={Notification}/>

          <S.FilterArea>
            <button type="button" onClick={() => setFilterActived('all')}>
            <FilterCard title="All" actived={filterActived === 'all'}/>
            </button>

            <button type="button" onClick={() => setFilterActived('today')}>
            <FilterCard title="Today" actived={filterActived === 'today'}/>
            </button>

            <button type="button" onClick={() => setFilterActived('week')}>
            <FilterCard title="7 days" actived={filterActived === 'week'}/>
            </button>

            <button type="button" onClick={() => setFilterActived('month')}>
            <FilterCard title="30 days" actived={filterActived === 'month'}/>
            </button>

            <button type="button" onClick={() => setFilterActived('year')}>
            <FilterCard title="1 year" actived={filterActived === 'year'}/>
            </button>
 
          </S.FilterArea>

          <S.Title>
            <h3>{filterActived === 'late' ? 'Overdue Tasks' : 'Tasks'}</h3>
          </S.Title>

          <S.Content>
           
          {
            tasks.map(task => 
              <TaskCard key={task._id} title={task.title} type={task.type} when={task.when}/>
              )

          }
              
          </S.Content>

          <Footer/>
        </S.Container>
      </>
    );
  }
  
  export default Home;
  