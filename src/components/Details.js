import React from 'react';
import { connect } from 'react-redux';
import _ from "lodash";

class Details extends React.Component {
    renderUserDetails = () => {
        const { singleUser } = this.props;
        if ( !_.isEmpty( singleUser ) ) {
            return (
                <div>
                    <p>{ singleUser.name }</p>
                    <p>{ singleUser.email }</p>
                </div>
            );
        } else {
            return <p>Please chose post</p>
        }
    };

    render() {
        return (
            <div>
                <h2>
                    User Details
                </h2>
                { this.renderUserDetails() }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    singleUser: state.singleUser
});

export default connect(mapStateToProps)(Details);