import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export function fetchPosts() {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: _.mapKeys(response.data, 'id')
        });
    }
}

export function fetchUser(id) {
    return async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    }
}
