import { useRouter } from "next/router"
import { FaFeather } from "react-icons/fa"

const SidebarTweetButton = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.push("/")}>
      <div className='mt-6 p-6 lg:hidden rounded-full w-14 h-14 flex items-center justify-center bg-sky-500 hover:bg-opacity-10 transition cursor-pointer'>
        <FaFeather size={24} color='white' />
      </div>
      <div className='hidden lg:block px-4 py-2 mt-6 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition'>
        <p className='text-center font-semibold text-white text-[20px]'>
          Tweet
        </p>
      </div>
    </div>
  )
}

export default SidebarTweetButton
