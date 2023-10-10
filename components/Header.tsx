import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useCallback } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useTheme } from "next-themes"
import { MdNightlight } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
interface HeaderProps {
  label: string
  showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter()
  const handleBack = useCallback(() => {
    router.back()
  }, [router])
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div className='border-b-[1-x] dark:border-neutral-800 border-neutral-400 p-5 relative'>
      <div className='flex flex-row items-center gap-2'>
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color={theme == "dark" ? "white" : "black"}
            size={20}
            className='cursor-pointer hover:opacity-70 transition'
          />
        )}

        <h1 className='dark:text-white text-black text-xl font-semibold'>
          {label}
        </h1>
        <div
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          className='cursor-pointer absolute right-3'>
          {theme == "light" ? (
            <MdNightlight fontSize={22} />
          ) : (
            <BsFillSunFill color='white' fontSize={22} />
          )}
        </div>
      </div>
    </div>
  )
}
export default dynamic(() => Promise.resolve(Header), { ssr: false })
