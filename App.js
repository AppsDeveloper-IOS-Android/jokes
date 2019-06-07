import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null,
            loaded: true,
            error: null
        }
    }
    baseURL = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
    
    getData = (ev)=>{
        this.setState({loaded:false, error: null});
        let url = this.baseURL;
        let h = new Headers();
        h.append('X-RapidAPI-Host','matchilling-chuck-norris-jokes-v1.p.rapidapi.com');
        h.append('X-RapidAPI-Key','a787686b2fmshd1449439b32a681p1bb8fejsnf95269cac16d');
        
        let req = new Request(url, {
            headers: h,
            method: 'GET'
        });
        
        fetch(req)
        .then(response=>response.json())
        .then(this.showData)
        .catch(this.badStuff)
    }
    showData = (data)=>{
        this.setState({loaded:true, data});
        console.log(data);
    }
    badStuff = (err) => {
        this.setState({loaded: true, error: err.message});
    }
    componentDidMount(){
        //this.getData();
        //geolocation -> fetch
    }
    render() {
        return (
            <ScrollView>
              <View style={{alignContent:'center',justifyContent:'center'}}>
                { !this.state.loaded && (
                    <Text>LOADING</Text>
                )}
                <Text style={styles.txt}>Gimme some data!</Text>
                <Button title="Get Data"
                    onPress={this.getData} />
                { this.state.error && (
                    <Text style={styles.err}>{this.state.error}</Text>
                )}
                <Text>Thhis is s Testeste</Text>
                { this.state.data && this.state.data.length > 0 && (
                    
                        <Text>
                          {this.state.data.length}
                        </Text>
                    
                )}
                </View>
            </ScrollView>
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
    txt: {
        fontSize: 24,
        color: '#333'
    },
    err:{
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    }
});