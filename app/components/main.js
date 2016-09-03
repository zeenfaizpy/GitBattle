import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

import api from '../helpers/api'
import Dashboard from './dashboard'

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            is_loading: false,
            is_error: false,
            error: '',
        }
    }
    onChange(event){
        this.setState({
            'username': event.nativeEvent.text,
            is_loading: false,
        })
    }
    onPress(){
        this.setState({
            'is_loading': true,
            is_error: false,
            error: '',
        })
        api.getUserInfo(this.state.username)
            .then((response) => {
                if(response.message === 'Not Found'){
                    this.setState({
                        is_loading: false,
                        is_error: true,
                        error: 'User Not Found'
                    });
                }
                else {
                    this.setState({
                        is_loading: false,
                        is_error: false,
                        error: '',
                    });
                    this.props.navigator.push({
                        title: 'Dashboard',
                        component: Dashboard,
                        passProps: { 
                            user_info: response,
                            username: this.state.username,
                        }
                    });
                    
                }
            })
    }
    render(){
        var showError = () => {
            if(this.state.is_error){
                return <Text>{this.state.error}</Text>
            }
            else{
                return <View></View>
            }
        }
        return (
            <View style={styles.mainContainer}>
               <Text style={styles.title}>Github Username</Text>
               <TextInput style={styles.searchInput} onChange={this.onChange.bind(this)}></TextInput>
               <TouchableHighlight
                    onPress={this.onPress.bind(this)}
                    style={styles.button}
                    underlayColor='white'>
                        <Text style={styles.buttonText}>Search</Text>
               </TouchableHighlight>
               <ActivityIndicator animating={this.state.is_loading}></ActivityIndicator>
               {showError()}
            </View>
        )
    }
}