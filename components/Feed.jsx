import { SparklesIcon } from "@heroicons/react/outline"
import Input from "./Input"
import Post from "./Post"



const posts = [
  {
    id:1,
    name: 'amir masoud heidary',
    userName: 'code wisha',
    userImage: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
    image: 'https://images.unsplash.com/photo-1510819786617-27916e816520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo repellat exercitationem dolor omnis. Quod tempore impedit voluptate quae mollitia laudantium repellat aliquam quisquam esse ea provident unde nemo eius, architecto illo velit obcaecati perferendis tempora reiciendis doloremque ullam! Nihil error non dignissimos. Voluptates ratione omnis voluptatum quas ut suscipit debitis assumenda eum molestias, odit perferendis eos blanditiis recusandae ducimus cumque accusamus? Blanditiis illum laborum rerum similique voluptatem voluptate perspiciatis tempore beatae quia sunt nobis repellat, veniam quisquam. Repudiandae deserunt impedit totam distinctio illo veniam voluptatibus mollitia magnam nulla expedita ea dignissimos vel non autem obcaecati, ratione maiores ab aperiam voluptate.',
    timeStamp: '2 hours ago'
  },
  {
    id:2,
    name: 'amir naghi mamole',
    userName: 'naghi ammok',
    userImage: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
    image: 'https://images.unsplash.com/photo-1510819786617-27916e816520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo repellat exercitationem dolor omnis. Quod tempore impedit voluptate quae mollitia laudantium repellat aliquam quisquam esse ea provident unde nemo eius, architecto illo velit obcaecati perferendis tempora reiciendis doloremque ullam! Nihil error non dignissimos. Voluptates ratione omnis voluptatum quas ut suscipit debitis assumenda eum molestias, odit perferendis eos blanditiis recusandae ducimus cumque accusamus? Blanditiis illum laborum rerum similique voluptatem voluptate perspiciatis tempore beatae quia sunt nobis repellat, veniam quisquam. Repudiandae deserunt impedit totam distinctio illo veniam voluptatibus mollitia magnam nulla expedita ea dignissimos vel non autem obcaecati, ratione maiores ab aperiam voluptate.',
    timeStamp: '2 days ago'
  }
]

const Feed = () => {

  const postContent = posts.map(post => (
    <Post key={post.id} post={post} />
  ))

  return (
    <div className="xl:ml-[290px] border-l border-r xl:min-w-[576px] h-screen sm:ml-[76px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect ml-auto px-0 w-9 h-9" >
          <SparklesIcon  className="h-5"/>
        </div>
      </div>
        <Input />
        {postContent}
    </div>
  )
}

export default Feed