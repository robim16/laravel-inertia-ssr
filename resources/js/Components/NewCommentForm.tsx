import { Feature } from "@/types"


export default function NewCommentForm({feature}: {feature:Feature}) {
  return (
    <form onSubmit={createComment}>
      <label className="sr-only">Your Comment</label>
    </form>
  )
}

