import React, {useMemo} from "react";
import { format } from 'date-fns';

import * as S from './styles';

import TypeIcons from '../../utils/TypeIcons';



function TaskCard({ type, title, when, done }) {

    const date = useMemo(() => format(new Date(when), 'dd/MM/yy'));
    const hour = useMemo(() => format(new Date(when), 'HH:mm'));

    return (
        <S.Container done={done}>
            <S.TopCard>
                <img src={TypeIcons[type]} alt="" />
                <p>{title}</p>
            </S.TopCard>

            <S.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.BottomCard>
        </S.Container>


    );
  }
  
  export default TaskCard;
  