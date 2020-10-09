import React, { useState } from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';

const Home = () => {

    const [courseModules, setCourseModules] = useState([
        { id: 1, title: '1. Setting up a new Rails app with React.', description: 'lorem ipsum', active: false },
        { id: 2, title: '2. Adding React to an existing Rails app.', description: 'lorem ipsum', active: false },
        { id: 3, title: '3. Building a "Hello World" app.', description: 'lorem ipsum', active: false },
        { id: 4, title: '4. Adding React Router Dom to your app.', description: 'lorem ipsum', active: false }
    ])

    return (
        <main>
            <Jumbotron />
            <Table />
        </main>
        
    )
}

export default Home;