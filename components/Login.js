import React, { useEffect, useState } from "react"; 
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from "react-native";
import { auth } from "../firebase"; // Certifique-se de importar auth corretamente
import { signInWithEmailAndPassword } from "firebase/auth"; // Importar a função

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function dados(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    function logar() {
        signInWithEmailAndPassword(auth, email, senha) // Usar a função importada
        .then(() => {
            if (!user) {
                alert('Usuário não existe.');
                return;
            }
            navigation.navigate('Rotas', { email });
        })
        .catch((error) => {
            alert(error.message);
            navigation.navigate('Login');
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            dados(user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Login</Text>
            <TextInput style={estilo.inputTexto} onChangeText={text => setEmail(text)} placeholder="Digite o email." />
            <TextInput style={estilo.inputTexto} secureTextEntry={true} onChangeText={text => setSenha(text)} placeholder="Digite a Senha." />
            <TouchableOpacity style={estilo.botaoLogar} onPress={logar}> 
                <Text style={estilo.textoBotaoLogar}>Logar</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    titulo: {
        fontSize: 50,
        marginBottom: 35,
        textAlign: 'center',
        color: 'white',
    },
    inputTexto: {
        bottom: 20,
        width: 300,
        height: 50,
        textAlign: 'center',
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 25,
    },
    botaoLogar: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'grey',
        top: 5,
    },
    textoBotaoLogar: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        padding: 7,
    }
});
