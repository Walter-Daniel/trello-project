import { Button } from '@nextui-org/react';
import { IoMedalOutline } from 'react-icons/io5';

export default function MarketingPage() {
  return (
    // <Button>Hola</Button>
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <IoMedalOutline className='h-6 w-6 mr-2'/>
          No 1 task managment
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          Taskify helps team move
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-[#e6770b] to-[#ffd500] text-white px-4 p-2 rounded-md pb-4 w-fit'>
          work forward
        </div>
      </div>
      <div className='text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl mt-4'>
        Collaborate, manege projects, and reach new productivity peaks. From rises to the home office, the way your team works is unique - accomplish it all with taskify
      </div>
      <Button className='mt-6' color='secondary'>
        Get tastify for free
      </Button>
    </div>
  );
}