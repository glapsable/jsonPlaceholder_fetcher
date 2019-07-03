import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchUser } from '../actions/index';
import _ from 'lodash';

class List extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    _onPostClick = (id) => {
        if (this.props.singleUser.id !== id) {
            this.props.fetchUser(id);
        }
    };

    renderList = () => {
        const { postsList } = this.props;
        if (!_.isEmpty( postsList )) {
            return Object.values(postsList).map(post => (
                <div className="item"
                    key={ post.id }
                    onClick={ () => this._onPostClick(post.userId) }
                >
                    <div className="content">
                        <p className="header">{ post.title }</p>
                        <div className="description">{ post.body }</div>
                    </div>
                </div>
            ));
        } else {
            return <p>Loading</p>
        }

    };

    render() {
        return (
            <div>
                <h2>
                    List
                </h2>
                <div className="ui relaxed list">
                    { this.renderList() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    postsList: state.postsList,
    singleUser: state.singleUser
});

export default connect(mapStateToProps, { fetchPosts, fetchUser })(List);