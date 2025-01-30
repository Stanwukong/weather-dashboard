import { TbLoader2 } from "react-icons/tb"

const Loading = () => {
  return (
    <div className="h-[60vh] w-full flex justify-center items-center">
      <span className="transiton-all duration-300 ease-in-out text-black animate-spin">
        <TbLoader2 size={35}/> 
      </span>
    </div>
  )
}

export default Loading