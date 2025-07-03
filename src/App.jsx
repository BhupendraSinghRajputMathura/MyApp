// http://localhost:5173/
import React from 'react';
import Header from './Components/Main/Header/Header.jsx';
import Main_1 from './Components/Main/Header/Main_1.jsx';
import Main_2 from './Components/Main/Header/Main_2.jsx';

function App() {
    return(
        <>
        <header>
            <Header />
        </header>
        <main>
            <Main_1 />
            <Main_2 />
        </main>
        <footer></footer>
        </>
    )
}
export default App;
