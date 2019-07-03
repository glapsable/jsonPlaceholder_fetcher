import React from 'react';
import List from './List';
import Details from './Details';

class App extends React.Component {
    render() {
        return (
            <div className="ui grid container app-container">
                <div className="eight wide column app-left">
                    <List />
                </div>
                <div className="eight wide column app-right">
                    <Details />
                </div>
            </div>
        );
    }
}

export default App;