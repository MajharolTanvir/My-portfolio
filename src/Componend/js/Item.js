import React from 'react';

const item = (props) => {
    const { img, name, company } = props.card
    return (
        <div className='border border-sky-500 p-4 text-center my-10'>
            <img src={img} alt="" />
            <h5 className='py-3 text-xl'>Name: {name}</h5>
            <p className='text-lg'>Company: {company}</p>
            <button className='py-2 border-2 m-4'>Explore now</button>
        </div>
    );
};

export default item;