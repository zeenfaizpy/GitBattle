import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

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
    }
    render(){
        var has_repos = () => {
            if(this.props.user_data.length > 0){
                return (
                    <View>
                        <Text style={styles.title}>You have {this.props.user_data.length} Repos.</Text>
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
            </View>
        )
    }
}