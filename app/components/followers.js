import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    TouchableHighlight,
} from 'react-native';

import Web from './web'

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

class Follower extends React.Component{
    constructor(props){
        super(props)
    }
    onPress(){
        this.props.navigator.push({
            title: 'Web View',
            component: Web,
            passProps: { 
                url: this.props.data.html_url
            }
        });
    }
    render(){
        return (
            <View>
                <TouchableHighlight
                    onPress={this.onPress.bind(this)}
                    underlayColor='white'>
                        <View style={styles.rowContainer}>
                            <Image source={{uri: this.props.data.avatar_url}}
                                   style={styles.photo} />
                            <Text style={styles.text}>{this.props.data.login}</Text>
                        </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default class Followers extends React.Component{
    constructor(props){
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2 })
        this.state = {
            dataSource: ds.cloneWithRows(this.props.followers)
        }
    }
    renderRow(data){
        return (
            <Follower data={data} navigator={this.props.navigator} />
        )
    }
    renderSeparator(sectionId, rowId, adjacentRowHighlighted){
        return (
            <View style={styles.separator} key={rowId}></View>
        )
    }
    render(){
        return (
            <ListView
                style={styles.mainContainer}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                renderSeparator={this.renderSeparator.bind(this)}>
            </ListView>
        )
    }
}