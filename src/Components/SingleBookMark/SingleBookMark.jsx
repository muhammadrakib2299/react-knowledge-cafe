
function SingleBookMark({bookmark}) {
    const {title} = bookmark;
  return (
    <div className="bg-stone-100 p-4 my-4 rounded-xl">
        <h3 className='text-2xl'>{title}</h3>
    </div>
  )
}


export default SingleBookMark
