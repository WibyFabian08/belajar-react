import React, {createContext} from 'react';

// context
export const RootContext = createContext();
const Provider = RootContext.Provider;

// provider
const GlobalProvider = (Children) => {
    return(
        class ParentComp extends React.Component {
            state = {
                totalOrder: 0
            }
        
            dispatch = (action) => {
                if(action.type === 'PLUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                } 
        
                if(action.type === 'MINUS_ORDER') {
                    if(this.state.totalOrder > 0) {
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                    }
                } 
            }

            render() {
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props}></Children>
                    </Provider>
                )
            }
        }
    )

}

export default GlobalProvider;

// consumer
const Consumer = RootContext.Consumer;

export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends React.Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value}></Children>
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}