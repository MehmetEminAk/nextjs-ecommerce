import React from 'react';


const Context = React.createContext();

export const ContextProvider = () => {

    state = {
        users : [
            {
                id : 1,
                name : "Mehmet",
            },
            {
                id : 2,
                name : "Ahmet",
            },
            {
                id : 3,
                name : "Ali",
            },
            {
                id : 4,
                name : "Ayşe",
            },
            {
                id : 5,
                name : "Fatma",
            },
            {
                id : 6,
                name : "Recep",
            },
        
            
        ],
    }

  return (
    <Context.Provider value={this.state}>

    </Context.Provider>
  )
}

const ContextConsumer = Context.Consumer;
export default ContextConsumer;
