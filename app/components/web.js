import React from 'react'
import {
    View,
    StyleSheet,
    WebView
} from 'react-native'

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
})

export default class Web extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={styles.mainContainer}>
                <WebView
                    source={{uri: this.props.url}}
                />
            </View>
        )
    }
}