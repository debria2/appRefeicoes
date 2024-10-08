
import React,{useEffect,useState} from "react";
import { View,Text,StyleSheet,TouchableOpacity,Alert,TextInput } from "react-native";
import { firebase } from "../firebase";
export default function Login({navigation}) {
    const [email,setemail]=useState('');
    const [senha,setsenha]=useState('');

    const[initializing,setinitializing]=useState(true);
    const[user,setuser]=useState();

    function dados(user){
        setuser(user);
        if(initializing)setinitializing(false);
    }
    function logar() {
        Firebase.auth().signInWithEmailAndPassword(email,senha)
        .then(()=>{
            if(user){
                alert('Usuário não existe');

                return;
            }
            navigation.navite('Rotas',{email})
        })
        
        .catch((error)=>{
            alert(error);
            navigation.navigate('login')
        })
    }

    return(
        <View style={estilo.container}>
        <Text style={estilo.titulo}> Entar no App da Refeição</Text>
        <TextInput  style={estilo.input}placeholder="Digite o email"/>
        <TextInput  style={estilo.input}placeholder="Digite  a senha"/>
    
    <TouchableOpacity style={estilo.botaoLogar}/>
    <Text style={estilo.textoBotaoLogar}>Logar</Text>
    <TouchableOpacity/>
    </View >
    );

 }

 const estilo=StyleSheet.create({
    CONTAINER:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#116611',
    },
    titulo:{
        fontSize:50,
        textAlign:'center',
        marginBottom:35
    },
    input:{
        width:250,
        height:30,
        backgroundColor:'#5f5c',
        marginVertical:10,
        borderRadius:10,
        paddingHorizontal:15,
        fontSize:25,
    },
    botaoLogar:{
        width:200,
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00008B',
        marginVertical:40
    },
    textoBotaoLogar:{
        fontSize:25,
        color:'#fff'
    }

 })