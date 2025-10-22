import React from 'react';
import { View, Text, Button } from 'react-native';
import style from './style';

export default function Details({navigation}){
return(
    <View style={style.container}>
        <Text style={style.title}>Tela de Detalhes</Text>
        <Button
            title="Voltar para Inicial"
            onPress={()=>navigation.goBack()}
        />
    </View>
)
}