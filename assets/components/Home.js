import { Text, View, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';

function Home({navigation}) {

    const styles = StyleSheet.create({
        purpleButtonText: {
          color: '#E1CDFF',
          fontSize: 20,
          fontFamily: 'XanhMono',
          textAlign: 'center'
        },
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
        }
      });

    const toHostGame = () => {
        navigation.navigate('HostGame')
    }
    const toJoinGame = () => {
        navigation.navigate('JoinGame')
    }
    const toExit = () => {
        BackHandler.exitApp();
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toHostGame}>
                <Text style={styles.purpleButtonText}>Host Game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toJoinGame}>
                <Text style={styles.purpleButtonText}>Join Game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toExit}>
                <Text style={styles.purpleButtonText}>Exit</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home