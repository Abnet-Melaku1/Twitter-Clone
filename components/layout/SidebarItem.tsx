import useCurrentUser from "@/hooks/useCurrentUser"
import useLoginModal from "@/hooks/useLoginModal"
import { useRouter } from "next/router"
import { useCallback } from "react"
import { IconType } from "react-icons"
import { BsDot } from "react-icons/bs"
import { useTheme } from "next-themes"
interface SidebarItemProps {
  label: string
  href?: string
  icon: IconType
  onClick?: () => void
  auth?: boolean
  alert?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
  alert,
}) => {
  const { theme } = useTheme()
  const { data: currentUser } = useCurrentUser()
  const router = useRouter()
  const loginModal = useLoginModal()
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick()
    }
    if (auth && !currentUser) {
      loginModal.onOpen()
    } else if (href) {
      router.push(href)
    }
  }, [onClick, auth, currentUser, href, loginModal, router])
  return (
    <div onClick={handleClick} className='flex flex-row items-center'>
      <div className='relative rounded-full h-14 w-14 flex items-center justify-center p-4 dark:hover:bg-slate-300 hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer lg:hidden '>
        <Icon size={28} color={theme == "dark" ? "white" : "black"} />
        {alert ? (
          <BsDot className='text-sky-500 absolute -top-4 left-0' size={70} />
        ) : null}
      </div>
      <div
        className=' relative hidden lg:flex flex-row items-center rounded-full dark:hover:bg-slate-300 hover:bg-slate-500  hover:bg-opacity-10 cursor-pointer gap-4 p-4
      '>
        <Icon size={24} color={theme == "dark" ? "white" : "black"} />
        <p className='dark:text-white text-black text-xl'>{label}</p>
        {alert ? (
          <BsDot className='text-sky-500 absolute -top-4 left-0' size={70} />
        ) : null}
      </div>
    </div>
  )
}
export default SidebarItem
