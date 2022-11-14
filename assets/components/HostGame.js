import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { useState, useContext } from 'react'
import plusSign from '../images/cross.png'
import minusSign from '../images/minus.png'

function HostGame({navigation}) {

  const [villagers, setVillagers] = useState(0)
  const [mafias, setMafias] = useState(0)

  const increaseVillagers = () => {
    setVillagers(villagers+1)
  }

  const decreaseVillagers = () => {
    if(villagers>0)
      setVillagers(villagers-1)
  }

  const increaseMafias = () => {
    setMafias(mafias+1)
  }

  const decreaseMafias = () => {
    if(mafias>0)
      setMafias(mafias-1)
  }

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
      },
      purpleSubHeader: {
        color: '#E1CDFF',
        fontSize: 25,
        fontFamily: 'XanhMono',
        textAlign:'center'
      },
      whiteText: {
        color: '#fff',
        fontFamily: 'XanhMono',
        textAlign: 'center'
      },
      roleAddingContainer: {
        display: 'flex'
      },
      plusButton: {
        backgroundColor: '#000',
        color: '#E1CDFF',
        borderColor:'#E1CDFF',
        borderWidth:1,
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'XanhMono',
        width:30,
        flex: 1
      },
      minusButton: {
        backgroundColor: '#000',
        color: '#E1CDFF',
        borderColor:'#E1CDFF',
        borderWidth:1,
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'XanhMono',
        width:30,
        flex: 1
      },
      roleContainer: {
        width:'70%',
        marginLeft:'15%',
        marginRight:'15%',
        flex:1, 
        flexDirection: 'row',
        marginTop:20,
        marginBottom:40
      },
      rolePlusMinus: {
        flex:1, 
        flexDirection:'row',
        height: 30
      },
      roleLabel: {
        flex:2,
        height: 30
      },
      roleCount: {
        flex:1,
        backgroundColor: '#555', 
        padding:0,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        paddingTop:3,
        height: 30
      }
    });

    return (
      <View>
        <Text style={styles.purpleSubHeader}>Host Game</Text>
        <View style={styles.roleContainer}>
          <View style={styles.roleLabel}>
            <Text style={styles.whiteText}>Villagers</Text>
          </View>
          <View style={styles.roleCount}>
            <Text style={styles.whiteText}>{villagers}</Text>
          </View>
          <View style={styles.rolePlusMinus}>
            <TouchableOpacity 
              style={styles.minusButton}
              onPress={() => decreaseVillagers()}>
                <ImageBackground 
                  source={minusSign} 
                  resizeMethod="resize" 
                  resizeMode='contain' 
                  style={{width:'100%', height:'100%'}}
                >
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.plusButton}
              onPress={() => increaseVillagers()}>
              <ImageBackground 
                source={plusSign} 
                resizeMethod="resize" 
                resizeMode='contain' 
                style={{width:'100%', height:'100%'}}>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.roleContainer}>
          <View style={styles.roleLabel}>
            <Text style={styles.whiteText}>Mafias</Text>
          </View>
          <View style={styles.roleCount}>
            <Text style={styles.whiteText}>{mafias}</Text>
          </View>
          <View style={styles.rolePlusMinus}>
            <TouchableOpacity style={styles.minusButton} onPress={() => decreaseMafias()}>
                <ImageBackground source={minusSign} resizeMethod="resize" resizeMode='contain' style={{width:'100%', height:'100%'}}>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusButton} onPress={() => increaseMafias()}>
              <ImageBackground source={plusSign} resizeMethod="resize" resizeMode='contain' style={{width:'100%', height:'100%'}}>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Text style={styles.purpleButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Text style={styles.purpleButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default HostGame