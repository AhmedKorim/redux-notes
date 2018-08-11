import React, {Component} from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from "react-redux";

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return {counter: prevState.counter + 1} })
                break;
            case 'dec':
                this.setState((prevState) => { return {counter: prevState.counter - 1} })
                break;
            case 'add':
                this.setState((prevState) => { return {counter: prevState.counter + value} })
                break;
            case 'sub':
                this.setState((prevState) => { return {counter: prevState.counter - value} })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.counter}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}/>
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubCounter(5)}/>
            </div>
        );
    }
}

// map state from the store to props for the component
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};

const mapDispatchToprops = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: (value) => dispatch({type: 'ADD', value: value}),
        onSubCounter: (value) => dispatch({type: 'SUB', value: value})
    }
}

// export default connect(null, mapDispatchToprops)(Counter);
export default connect(mapStateToProps, mapDispatchToprops)(Counter);