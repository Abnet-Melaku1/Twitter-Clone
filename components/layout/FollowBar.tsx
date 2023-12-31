import useUsers from "@/hooks/useUsers"
import Avatar from "../Avatar"

const FollowBar = () => {
  const { data: users = [] } = useUsers()
  console.log(users)
  if (users.length === 0) {
    return null
  }
  return (
    <div className='hidden lg:block px-6 py-4'>
      <div className='dark:bg-neutral-800 bg-neutral-200 rounded-xl p-4'>
        <h2 className='dark:text-white text-black text-xl font-semibold'>
          Who to follow
        </h2>
        <div className='flex flex-col gap-6 mt-4'>
          {users?.map((user: Record<string, any>) => (
            <div key={user?.id} className='flex flex-row gap-4'>
              <Avatar userId={user?.id} />
              <div className='flex flex-col'>
                <p className='dark:text-white text-black font-semibold text-sm'>
                  {user?.name}
                </p>
                <p className='text-neutral-400 text-sm'>@{user?.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default FollowBar
