import { useRouter } from "next/router"
import { BsTwitter } from "react-icons/bs"
import { useTheme } from "next-themes"
const SidebarLogo = () => {
  const { theme } = useTheme()
  const router = useRouter()
  return (
    <div
      onClick={() => router.push("/")}
      className='rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition'>
      <BsTwitter size={28} color={theme == "dark" ? "white" : "black"} />
    </div>
  )
}
export default SidebarLogo
