// http://localhost:5173/
import React from 'react';
import Header from './Components/Main/Header/Header.jsx';
import Main_1 from './Components/Main/Header/Main_1.jsx';
import Main_2 from './Components/Main/Header/Main_2.jsx';
import Main_3 from './Components/Main/Header/Main_3.jsx';



function App() {
    return(
        <>
        <header>
            <Header />
        </header>
        <main>
            <Main_1 />
            <Main_2 />
            <Main_3 />
        </main>
        <footer></footer>
        </>
    )
}
export default App;
