import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()

  const { qq } = router.query
  console.log(9,router)

  return(
    <div>
       <div>Post: {JSON.stringify(qq)}</div>
    </div>
  )
}

export default Post