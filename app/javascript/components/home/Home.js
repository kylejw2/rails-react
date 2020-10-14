import React, { useState } from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';

const Home = () => {

    const [courseModules, setCourseModules] = useState([
        { id: 1, title: '1. Finding Peace During Turbulent Times.', description: 'lorem ipsum', active: false },
        { id: 2, title: '2. God Wants You to Pray.', description: 'lorem ipsum', active: false },
        { id: 3, title: '3. Choosing to Believe in God.', description: 'lorem ipsum', active: false },
        { id: 4, title: '4. Why Do Bad Things Happen to Good People?', description: 'lorem ipsum', active: false }
    ])

    const handleVideoChange = (item, event) => {
        event.preventDefault();
        const index = courseModules.findIndex(ele => ele.id === item);
        const active = courseModules[index].active;
        const newObj = {...courseModules[index], active: !active};
        let updatedCourseModules = [...courseModules];
        updatedCourseModules = updatedCourseModules.map(ele => { return {...ele, active: false} });
        updatedCourseModules.splice(index, 1, newObj);
        setCourseModules(updatedCourseModules);
    }

    return (
        <main>
            <Jumbotron />
            <Table handleVideoChange={handleVideoChange} course_modules={courseModules}/>
        </main>
        
    )
}

export default Home;