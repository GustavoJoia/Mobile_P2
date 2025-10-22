import React from 'react';
import { View, Text, Button } from 'react-native'
import style from './style';

export default function Home({navigation}){
return(
    <View style={style.container}>
        <Text style={style.title}>Tela inicial</Text>
        <Button
            title="Ir para Detalhes"
            onPress={()=>navigation.navigate('Details')}
        />
    </View>
)
}