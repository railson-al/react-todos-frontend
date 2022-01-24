import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';

import * as S from './styles';



import Header from '../../components/Header';
import Footer from '../../components/Footer';


function QRCodeView() {

    const [mac, setMac] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    function saveMac() {

      if(!mac) {
        return alert('Informe o Mac');
      }
      localStorage.setItem('@todo/macaddress', mac);
      setRedirect(true);
      window.location.reload();
    }

    return (
      <>
          <S.Container>
          { redirect && navigate('/') }
            <Header />

                <S.Content>
                  <h3>Target with your app</h3>

                  <S.QRCodeArea>
                    <QRCode value='getmacaddress' size={300}/>
                  </S.QRCodeArea>

                  <p>To sync with ToDos Web</p>

                  <S.Validation>
                    <span>Type macaddress</span>
                    <input type="text" name="macaddress" id="macaddress"
                            onChange={e => setMac(e.target.value)} />

                    <button type='button' onClick={saveMac}>Sync</button>
                  </S.Validation>

                </S.Content>

            <Footer/>
          </S.Container>
      </>
    );
  }
  
  export default QRCodeView;
  