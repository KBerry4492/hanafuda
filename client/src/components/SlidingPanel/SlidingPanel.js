import React, { Component } from 'react';
import { render } from 'react-dom';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';


class SlidingPanel extends Component {
    // constructor(props) {
        // super(props);
        state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        };
    // }
 
    render() {
        return (
        <div>
            <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                    Open chat on left</button>
            <button onClick={() => this.setState({ isPaneOpen: true })}>Open chat on right</button>
            <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={ this.state.isPaneOpen }
                title='Game Chat!'
                subtitle='Optional subtitle.'
                width='300px'
                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                } }>
                <div>User A: You're going down!<br />
                     User B: Hey, that's my line.</div>
                <br />
                <img src='img.png' />
            </SlidingPane>
            <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title='Game Chat!'
                from='left'
                width='300px'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <div>User A: Hey.<br />
                     User B: You're going down!
                </div>
            </SlidingPane>
        </div>
        )
    }
}

export { SlidingPanel };
 
// render(<App />, document.getElementById('app'));
