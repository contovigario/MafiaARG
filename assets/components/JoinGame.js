import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function JoinGame({navigation}) {

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

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.purpleButtonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

export default JoinGame