import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
 


class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = { timer: 0 }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Image
                        source={require('./../images/Norris-Jokes.png')}
                    />
                    <Text style={{alignSelf: 'center'}}>Chuck Norris Jokes</Text>
                </View>
            </View>
        )
    }
}
 
export default Splash