import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const parseJsonAsyncFunc = jsonString => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(jsonString));
    });
  });
}

class HomePage extends Component {

  
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
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

return fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {
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
        <Image style={{ height: 100, width: 100 }}
          source={{ uri: this.state.dataSource.icon_url }}
        />
        <Text style = {styles.jokesstyle}>
          {this.state.dataSource.value}
        </Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
  },
  jokesstyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },


})

export default (HomePage)