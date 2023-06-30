import MobileSlider from '@/components/MobileSlider'
import SliderPage from '@/components/SliderPage'
import { AiOutlineSearch } from 'react-icons/ai'
import { handleSearch } from './action';

export default function Home() {

  return (
    <>
      <form className="flex flex-1 mt-10 justify-end items-center lg:mx-10 mx-2" action={handleSearch}>
        <input className='border-2 border-gray-300 bg-white h-12 px-5 lg:w-[50vw] w-[80vw] pr-16 flex rounded-xl text-sm focus:outline-none' type="search" name="search" placeholder="Search for any mobile..." />
        <button type="submit" className="absolute mx-2 text-xl bg-blue-800 p-2 rounded-xl text-white flex">
          <AiOutlineSearch />
        </button>
      </form>
      <MobileSlider />
      <SliderPage />
    </>
  )
}
