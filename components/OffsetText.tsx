const OffsetText = ({children, title, inverse}: {children:any, title:string, inverse?:boolean}) => {

  if (inverse) {
    return (
      <div className="container flex flex-row-reverse flex-wrap gap-20 p-10 mx-auto text-black">
        <h1 className='text-3xl font-bold text-right uppercase break-words align-text-top justify-self-center'>{title}</h1>
        <p className='w-2/3 md:mt-8'>{children}</p>
      </div>
    ) 
    } else {
      return (
        <div className="container flex flex-wrap gap-20 p-10 mx-auto text-black">
          <h1 className='text-3xl font-bold uppercase align-text-top '>{title}</h1>
          <p className='w-2/3 md:mt-8'>{children}</p>
        </div>
      )
    }

  
}

export default OffsetText