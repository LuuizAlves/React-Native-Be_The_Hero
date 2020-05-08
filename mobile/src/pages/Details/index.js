import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logopng from '../../assets/logo.png';
import styles from './styles';

export default function Details(){

    const navigation = useNavigation();
    
    const route = useRoute();
    const incident = route.params.incident;

    const message = `Olá ${incident.name}. Eu quero salvar essa CACHORRA, a ajuda com 
                    ${Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(incident.value)}`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: `Herói do Caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }

    function sendWhastapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return(
        <View style={styles.container} >
            <View style={styles.header} >
                <Image source={logopng} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incidents} >
                <Text style={[styles.incidentProperty], {marginTop: 0}}> ONG: </Text>
                <Text style={styles.incidentValue} > {incident.name} de {incident.city}/{incident.uf} </Text>

                <Text style={styles.incidentProperty}> CASO: </Text>
                <Text style={styles.incidentValue}> {incident.title} </Text>

                <Text style={styles.incidentProperty}> VALOR: </Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox} >

                <Text style={styles.heroTitle} > Salve o dia! </Text>
                <Text style={styles.heroTitle} > Seja o herói desse caso. </Text>
                <Text style={styles.heroDescription} > Entre em contato. </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhastapp} >
                        <Text style={styles.actionText}> Whatsapp </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail} >
                        <Text style={styles.actionText}> E-mail </Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        </View>
    );
}