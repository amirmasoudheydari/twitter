import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon } from '@heroicons/react/solid'
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 fixed xl:items-start">
      {/* twitter logo */}
      <div className="hoverEffect">
        <Image
          alt="twitter"
          src="data:image/png;base64,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"
          width='50px'
          height='50px'
        ></Image>
      </div>

      {/* menu */}
      <div className="mt-4 mb-2.5 xl:items-start w-full">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Message" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* button */}
      <button className="bg-blue-400 mb-4 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

      {/* mini profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <Image
          className="rounded-full w-10 h-10"
          width='50'
          height='50'
          alt="userimage"
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" />
        <div className="leading-5 xl:ml-1 hidden xl:inline">
          <h4 className='font-bold'>sami less</h4>
          <p className='text-gray-500'>@codewidthsami</p>
        </div>
        <DotsHorizontalIcon className='w-5 xl:ml-8 hidden xl:inline' />
      </div>

    </div>
  )
}

export default Sidebar