import React from 'react';

import Header from '../layout/Header';
import List from './List';
import Details from './Details';

class App extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <div className="ui grid container app-container">
                    <div className="eight wide column app-left">
                        <List />
                    </div>
                    <div className="eight wide column app-right">
                        <Details />
                    </div>
                </div>
            </main>
        );
    }
}

export default App;