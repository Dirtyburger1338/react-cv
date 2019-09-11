import React, { useState, createContext } from 'react';

export const ProgramContext = createContext();

export const ProgramProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'cmd',
            id: 'cmd',
            icon: 'cmd-ico',
            active: false
        },
        {
            name: 'notepad',
            id: 'notepad',
            icon: 'notepad-ico',
            active: false
        },
        {
            name: 'browser',
            id: 'browser',
            icon: 'browser-ico',
            active: false
        }
    ]);
    return (
        <ProgramContext.Provider value={[movies]}>
            {props.children}}
        </ProgramContext.Provider>
    )


}