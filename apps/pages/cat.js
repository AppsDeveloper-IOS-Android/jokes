import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Picker, Alert,Image ,Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const parseJsonAsyncFunc = jsonString => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(jsonString));
    });
  });
}

class cat extends Component {

  
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      PickerSelectedVal : ''
    }
  }
  renderItems() {
    const items = [];
    this.dataSource.foreach( ( dataItem ) => {
      items.put( <Text>{ dataItem.id }</Text> );
    } )
    return items;
  }

  

  componentDidMount() {

return fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories', {
  method: 'GET',
    headers: {
        'X-RapidAPI-Host' : 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'X-RapidAPI-Key' : 'a787686b2fmshd1449439b32a681p1bb8fejsnf95269cac16d',
        'Accept' : 'application/json'
    }
}).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
          
        })
      })
      
      .catch((error) => {
        console.log(error)
      });
      console.log (responseJson)
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    return (


      <View style={styles.container}>
      <View style={{width:'60%',justifyContent: 'center'}}>
        <Picker mode="dropdown" style={{ height:20, backgroundColor: 'white',width: '80%'}}
 selectedValue={this.state.PickerSelectedVal}
 onValueChange={(itemValue) => this.setState({PickerSelectedVal: itemValue})} >
          {
            this.state.dataSource.map((item) =>{
              return(
      
              <Picker.Item  label={item} value={item} key={item}/>
              );
            })
          }
        </Picker>
        <Button style={styles.touchButtonText} title="Get Selected Picker Value" onPress={ () => Alert.alert(
        'Alert Title',
         this.state.PickerSelectedVal
      )}/>
      </View>
    </View>

    );
  }
}
getSelectedPickerValue=()=>{
  Alert.alert(
    'Alert Title',
    this.state.PickerSelectedVal,
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      alignContent:'center',
      justifyContent:'center',
  },
  touchButton:{
      alignSelf:'center',
      backgroundColor:'#2980b9',
      paddingVertical: 25,
      width:295,
      margin:15,
  },
  touchButtonText:{
    textAlign:'center',
    color:'#ffffff',
    fontWeight:'bold'
  },
  PickerStyleClass:{
    backgroundColor:'#87ceeb',
    paddingLeft: 7,
marginBottom: 7,
height: 40,
borderWidth: 1,
 borderColor: '#FF5722',
}

  
  })

export default (cat)