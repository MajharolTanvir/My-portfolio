import React from 'react';
import img from '../../img/DSC_3583.JPG'

const Home = () => {
    return (
        <div className='flex py-28 justify-center'>
            <div className='px-20 py-auto'>
                <h3 className='text-3xl pt-5'>I am MAJHARUL TANVIR</h3>
                <p className='text-justify pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam cupiditate impedit exercitationem quaerat, cumque molestiae beatae inventore, voluptates consectetur voluptas esse asperiores vitae dignissimos necessitatibus tempore reiciendis quas! Praesentium consequuntur repellat incidunt, numquam soluta ratione laboriosam voluptatem obcaecati exercitationem voluptate corporis laborum dignissimos voluptatibus aperiam sit, animi veniam nulla! Recusandae magni illum adipisci quaerat praesentium pariatur, ipsam, saepe quasi quos nisi sed facere, laboriosam officiis sunt  vitae esse cupiditate neque laudantium repellendus sit possimus mollitia. Amet!</p>
            </div>
            <div className='px-20'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;