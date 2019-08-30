import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View
} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickName: 'Rafael Pereira Filho',
            email: 'rafaelprrflh@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickName: 'John Ray Sheldon',
                comment: 'Stunning!'
            }, {
                nickName: 'Ana Julia Arruda',
                comment: 'Foto linda! Onde foi tirada?'
            }]
        }, {
            id: Math.random(),
            nickName: 'Francisco Leandro Lima',
            email: 'fllima@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: [{
                nickName: 'Felps',
                comment: 'Chavosidade pura!'
            }, {
                nickName: 'Felps',
                comment: 'Saudades basquete!'
            }]
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={ ({ item }) => 
                        <Post key={item.id} {...item} />
                    } />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed;