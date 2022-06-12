import { SparklesIcon } from "@heroicons/react/outline"
import Input from "./Input"

const Feed = () => {
  return (
    <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] h-screen sm:ml-[76px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect ml-auto px-0 w-9 h-9" >
          <SparklesIcon  className="h-5"/>
        </div>
      </div>
        <Input />
    </div>
  )
}

export default Feed