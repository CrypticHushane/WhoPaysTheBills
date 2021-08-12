import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Image } from 'react-native-elements'; 
import StageOne from './components/StageOne';
import StageTwo from './components/StageTwo';
import { MyContext } from './context';
import Logo from './assets/logo.png'

class App extends Component {

  static contextType = MyContext;

 

  render(){
      
    return (
      <SafeAreaView>
        <ScrollView >
          <View style={styles.container}>
            <Image 
              source={Logo}
              style={{
                width:200,
                height: 200,
              }}
            />
            <StatusBar style="auto" />
            {this.context.state.stage === 1?
              <StageOne />
              :
              <StageTwo />
            }
            
          </View>
        </ScrollView>
      </SafeAreaView>
      
    
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;