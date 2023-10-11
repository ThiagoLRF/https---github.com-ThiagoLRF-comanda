import { StyleSheet, Text, View } from "react-native"
import Button from "../components/button"
import Input from "../components/input"

export default function Comanda(){
    return(
      <view style={style.conterner}>
        
        <view>
            <text>Olá,</text>
            <text>Thiago Leandro</text>
        </view>
        

        </view>
            

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