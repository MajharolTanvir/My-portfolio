import React from 'react';
import img from '../../img/DSC_3583.JPG'

const Home = () => {
    return (
        <div className='lg:flex py-20 justify-center items-center'>
            <div className='p-5 md:order-2 rounded-lg border-4 border-sky-600 m-10'>
                <img className='rounded-lg' src={img} alt="" />
            </div>
            <div className='px-9 py-7 border-4 rounded-xl border-sky-600 md:order-1'>
                <h3 className='text-3xl py-4'>My name is MAJHARUL TANVIR.</h3>
                <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam cupiditate impedit exercitationem quaerat, cumque molestiae beatae inventore, voluptates consectetur voluptas esse asperiores vitae dignissimos necessitatibus tempore reiciendis quas! Praesentium consequuntur repellat incidunt, numquam soluta ratione laboriosam voluptatem obcaecati exercitationem voluptate corporis laborum dignissimos voluptatibus aperiam sit, animi veniam nulla! Recusandae magni illum adipisci quaerat praesentium pariatur, ipsam, saepe quasi quos nisi sed facere, laboriosam officiis sunt  vitae esse cupiditate neque laudantium repellendus sit possimus mollitia. Amet!</p>
            </div> 
        </div>
    );
};

export default Home;