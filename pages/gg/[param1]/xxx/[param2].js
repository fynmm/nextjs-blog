import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()

  const { param1, param2 } = router.query

  return(
    <div>
       <div>Post: {param1}</div>
       <div>Post: {param2}</div>
    </div>
  )
}

export default Post