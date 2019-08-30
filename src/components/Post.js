import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native';
import Author from './Author';
import Comments from './Comments';
import AddComment from './AddComment';

class Post extends Component {
    render() {
        return (
            <View style={style.container}>
                <Image source={this.props.image} style={style.image} />
                <Author email={this.props.email} nickName={this.props.nickName} />
                <Comments comments={this.props.comments} />
                <AddComment />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'contain'
    }
})

export default Post