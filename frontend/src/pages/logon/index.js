//IMPORTAR O REACT POR PADRÃO
import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

//IMPORTANDO A ESTILIZAÇÃO DA PÁGINA
import './styles.css'

//IMPORTANDO A API DO DATABASE
import api from '../../services/api';

//IMPORTANDO IMAGENS
import logosvg from '../../assets/logo.svg';
import heroespng from '../../assets/heroes.png';

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function HandleLogon(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { id });

            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.name);
            
            history.push('/profiles');
        }catch(err){
            alert('FALHA NO LOGIN! Tente novamente');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logosvg} alt="Be the Hero" />

                <form onSubmit={HandleLogon}>
                    <h1> Faça seu Logon </h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange = { e => setId(e.target.value)}
                    />
                    <button className="button" type="submit"> Entrar </button>

                    <Link className="back-link" to="/register"> 
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro 
                    </Link>
                </form>
            </section>

            <img src={heroespng} alt="Heroes"/>
        </div>
    );
};