import React,{ Component} from 'react';
 
const MyContext = React.createContext();

class MyProvider extends Component{
    state = {
        stage: 1,
        players: [],
        result: '',
    }

    tryAgain = () => {
        this.setState({stage:1})
    }

    addPlayerHandler = (name) => {
        this.setState((previousState, props) => ({
            players: [
                ...previousState.players,
                name
            ]
        }))
    }

    removePlayerHandler = (index) => {
        let newPlayers = this.state.players;
        newPlayers.splice(index,1);
        this.setState({players: newPlayers});
    }

    getResultHandler = () => {
        this.state.result = this.state.players[Math.floor(Math.random() * this.state.players.length)];
        this.setState({stage:2})
    }

    resetStateHandler = () => {
        this.setState({
            stage: 1,
            players: [],
            result: ''
        })
        
    }

    render(){
        return (
            <> 
                <MyContext.Provider
                    value={{
                        state: this.state,
                        addPlayer: this.addPlayerHandler,
                        removePlayer: this.removePlayerHandler,
                        getLoser: this.getResultHandler,
                        tryAgain: this.tryAgain,
                        startOver: this.resetStateHandler
                    }}
                >
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
            
    } 

}
 export {
     MyContext, 
     MyProvider
 }