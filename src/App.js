import React from 'react';
import Navbar from "./assets/components/Navbar";
import Leftbar from "./assets/components/Leftbar";
import Main from "./assets/components/Main";
import Sidebar from "./assets/components/Sidebar";
const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 ">
                <Leftbar />
                <Main />
            </div>
            <Sidebar/>
        </div>
    );
};

export default App;
