import React, { useState } from 'react';

const Home = () => {

    const [courseModules, setCourseModules] = useState([
        { id: 1, title: '1. Setting up a new Rails app with React.', description: 'lorem ipsum', active: false },
        { id: 2, title: '2. Adding React to an existing Rails app.', description: 'lorem ipsum', active: false },
        { id: 3, title: '3. Building a "Hello World" app.', description: 'lorem ipsum', active: false },
        { id: 4, title: '4. Adding React Router Dom to your app.', description: 'lorem ipsum', active: false }
    ])

    return (
        <ul>
            {
                courseModules.map(course => <li><p>{course.title}</p><p>{course.description}</p></li>)
            }
        </ul>
    )
}

export default Home;