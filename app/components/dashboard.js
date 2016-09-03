import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';

import api from '../helpers/api'
import Followers from './followers'

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

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            is_loading: false,
            is_error: false,
            error: '',
        }
    }
    onPress(){
        this.setState({
            is_loading: true,
            is_error: false,
            error: '',
        })
        api.getFollowers(this.props.username)
            .then((response) => {
                if(response.message === 'Not Found' || response.length == 0){
                    this.setState({
                        is_loading: false,
                        is_error: true,
                        error: 'Data Not Found ' + response
                    });
                }
                else {
                    this.setState({
                        is_loading: false,
                        is_error: false,
                        error: '',
                    });
                    this.props.navigator.push({
                        title: `Followers (${response.length})`,
                        component: Followers,
                        passProps: { 
                            followers: response
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
        var has_repos = () => {
            if(this.props.repos.length > 0){
                return (
                    <View>
                        <Text style={styles.title}>You have {this.props.repos.length} Repos.</Text>
                    </View>
                )
            }
            else{
                return (
                    <View>
                        <Text style={styles.title}>You have NO Repos.</Text>
                    </View>
                )
            }
        }
        return (
            <View style={styles.mainContainer}>
                {has_repos()}
                <TouchableHighlight
                    onPress={this.onPress.bind(this)}
                    style={styles.button}
                    underlayColor='white'>
                        <Text style={styles.buttonText}>Show Followers</Text>
               </TouchableHighlight>
               <ActivityIndicator animating={this.state.is_loading}></ActivityIndicator>
               {showError()}
            </View>
        )
    }
}