import React from 'react';

const Rooms = () => {
  return (<div className='h-100'>
  <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover '
          src='https://www.teacherhorizons.com/static/mediav2/schools/6555/images/847754_main.png'
          alt='/'
        />
        <img
        className='row-span-2 object-cover '
          src='https://www.teacherhorizons.com/static/mediav2/schools/6555/images/847757_main.png'
          alt='/'
        />
        <img
        className='object-cover '
          src='https://www.teacherhorizons.com/static/mediav2/schools/6555/images/847752_main.png'
          alt='/'
        />
      </div>
    </div>
  </div>
  
  );
};

export default Rooms;