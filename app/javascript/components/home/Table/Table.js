import React from 'react';
import Item from './Item';
import ActiveItem from './ActiveItem';

const Table = (props) => {

    const items = props.course_modules;

    const getItems = () => {
        return items.map(item => {
            return item.active ?
                <ActiveItem key={item.id} handleVideoChange={props.handleVideoChange} id={item.id} title={item.title} description={item.description} /> :
                <Item key={item.id} handleVideoChange={props.handleVideoChange} id={item.id} title={item.title} description={item.description} />
        })
    }

    return (
        <div className='pt-5 pb-5'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='pt-4 pb-4'>Finding Hope and Comfort - Videos</h2>
                </div>
            </div>
            { getItems() }
        </div>
    )
}

export default Table;