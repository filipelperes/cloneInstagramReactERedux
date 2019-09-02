import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes';

const initialState = {
    posts: [{
        id: Math.random(),
        nickName: 'Rafael Pereira Filho',
        email: 'rafaelprrflh@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
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
        image: require('../../../assets/imgs/bw.jpg'),
        comments: [{
            nickName: 'Felps',
            comment: 'Chavosidade pura!'
        }, {
            nickName: 'Felps',
            comment: 'Saudades basquete!'
        }]
    }]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId) {
                        if(post.comments) {
                            post.comments = post.comments.concat(action.payload.comment)
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post;
                })
            }
        default: 
            return state;
    }
}

export default reducer;