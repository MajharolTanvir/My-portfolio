import React, { useEffect, useState } from 'react';
import Item from '../js/Item'

const Project = () => {
    const [items, setItems] = useState([])
    const [items2, setItems2] = useState([])

    useEffect(() => {
        fetch('psd.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    useEffect(() => {
        fetch('react.json')
            .then(res => res.json())
            .then(data => setItems2(data))
    }, [])
    return (
        <div>
            <div>
                <h3 className='mt-12 text-4xl border-4 p-1 text-center'>PSD PROJECT</h3>
                <div className='grid sm:grid-cols-3 gap-10 mb-20'>
                    {
                        items.map(card2 => <Item
                            key={card2.id}
                            card={card2}
                        ></Item>)
                    }
                </div>
            </div>
            <div>
                <h3 className='mt-12 text-4xl border-4 p-1 text-center'>REACT PROJECT</h3>
                <div className='grid grid-cols-4 gap-10 mb-20'>
                    {
                        items2.map(card => <Item
                            key={card.id}
                            card={card}
                        ></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;