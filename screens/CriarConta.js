import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";

export default function CriarConta(){
    return(
        <View style={styles.container}>

            <View>
                <Text>Olá,</Text>
                <Text>Novo Usuario</Text>
            </View>

            <View>
                <Input />
                <Button>confirmar</Button>
            </View>

            <Text>
                Digite o seu nome completo 
                para começar a criar a conta
            </Text>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
})