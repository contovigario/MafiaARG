import { Text, View, TouchableOpacity, StyleSheet, BackHandler, TextInput } from 'react-native';
import Home from '../Home'

function Login({navigation, userToken}) {

    const toExit = () => {
        BackHandler.exitApp();
    }

    const changeUsername = (e) => {
        console.log(e)
    }

    const styles = StyleSheet.create({
        button: {
            backgroundColor: '#000',
            color: '#E1CDFF',
            borderColor:'#E1CDFF',
            borderWidth:1,
            fontSize: 20,
            padding: 4,
            textAlign: 'center',
            fontFamily: 'XanhMono',
            marginBottom: 15
        },
        buttonContainer: {
            marginTop:50,
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#000'
        },
        purpleButtonText: {
            color: '#E1CDFF',
            fontSize: 20,
            fontFamily: 'XanhMono',
            textAlign: 'center'
        },
        purpleInput: {
            color:'#fff',
            backgroundColor:'#111',
            borderColor: '#E1CDFF',
            borderWidth: 1,
            marginBottom: 15,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30
        }
    });

    return (
        <View style={styles.buttonContainer}>
            <TextInput 
                editable={true}
                maxLength={40}
                style={styles.purpleInput}
                onChangeText={(e) => changeUsername(e)}
                value={userToken} />
            <TouchableOpacity style={styles.button} onPress={Home}>
                <Text style={styles.purpleButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toExit}>
                <Text style={styles.purpleButtonText}>Exit</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login