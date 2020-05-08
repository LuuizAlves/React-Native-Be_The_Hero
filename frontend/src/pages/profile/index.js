import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import './styles.css';

import api from '../../services/api';

import logosvg from '../../assets/logo.svg';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongID');
    const ongName = localStorage.getItem('ongName');

    async function HandleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(err){
            alert('ERRO AO DELETAR O INCIDENT! Tente Novamente.');
        }
    }

    function HandlesLogout(){
        localStorage.clear();
        history.push('/');
    }


    useEffect( () => {
        api.get('profiles', {
            headers: {
                Authorization: ongId,
            }
        }).then( response => {
            setIncidents(response.data);
        })
    }, [ongId] );

    return(
        <div className="profile-container">
            <header>
                <img src={ logosvg } height="64px" alt=" Be the Hero"/>
                <span> Bem vindo {ongName} </span>

                <Link className="button" to="/incidents/new"> Cadastrar novo Caso </Link>

                <button type="button" onClick={HandlesLogout}> <FiPower size={18} color="E02041" /> </button>
            </header>

            <h1> Casos Cadastrados </h1>

            <ul>
                {incidents.map( incident => (
                    <li key={incident.id}>

                        <strong> CASO </strong>
                        <p> {incident.title} </p>

                        <strong> DESCRIÇÃO </strong>
                        <p> {incident.description} </p>

                        <strong> VALOR </strong>
                        <p>
                            {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                            .format(incident.value)}
                        </p>

                        <button type="button" onClick={ () => HandleDeleteIncident(incident.id)}> <FiTrash2 size={20} color="#a8a8b3" /> </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}