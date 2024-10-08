import React,{useEffect,useState} from "react";
import { View, Text, StyleSheet,  TouchableOpacity, Alert,TextInput, ImageBackground } from "react-native";
import { Firebase } from "../firebase";

export default function Login({navigation}){
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [initializing, setInitialinzing] = useState(true);
    const [user,setUser] = useState();

    function dados(user){

        setUser(user)
        if(initializing) setInitialinzing(false);

    }

    function logar(params){

        Firebase.auth().signInWithEmailAndPassword(email,senha)
        .then(()=>{
            if(user){
                alert('Usuário não existe.');
                return;
            }
            navigation.navigate('Rotas',{email})
        })
        .catch((error) => {
            alert(error);
            navigation.navigate('login')
        })

    }

    return(
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Login</Text>
            
                <TextInput style={estilo.inputTexto} placeholder="Digite o email."/>
                <TextInput style={estilo.inputTexto} placeholder="Digite a Senha."/>
            
                <TouchableOpacity style={estilo.botaoLogar}> 
                    <Text style={estilo.textoBotaoLogar}>Logar</Text>
                </TouchableOpacity>
        </View>
        );


}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'Center',
        alignItens:'center',
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    },
    titulo:{
        fontSize:50,
         marginBottom:35,
        textAlign:'center',
        color:'white',

    },
    inputTexto:{
        bottom:20,
        width:300,
        height:50,
        textAlign:'center',
        backgroundColor:'white',
        marginVertical:10,
        borderRadius: 10,
        paddinghorizontal:15,
        fontSize:25,
    },
    botaoLogar:{
        width:150,
        height:50,
        borderRadius:10,
        backgroundColor:'grey',
        top:5
    },
    textoBotaoLogar:{
        fontSize:24,
        color:'white',
        textAlign: 'center',
        padding: 7
    }


})