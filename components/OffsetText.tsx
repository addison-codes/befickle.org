import { motion } from "framer-motion"

const OffsetText = ({children, title, inverse, white, id}: {children:any, title:string, inverse?:boolean, white?:boolean, id?:string}) => {

  if (inverse) {
    return (
      <motion.div
      initial={{
        y:200,
        opacity: 0,
        scale: 1.2
      }}
      whileInView={{
        y:0,
        opacity: 1,
        scale: 1
      }}
      viewport={{ once: true}}
      transition={{
        duration: .5
      }}
      id={id}
      className={`container flex flex-row-reverse flex-wrap gap-20 p-10 mx-auto ${white ?'text-white' : 'text-black'}`}>
        <h1 className={`text-3xl font-bold text-right uppercase break-words align-text-top justify-self-center`}>{title}</h1>
        <p className='w-2/3 text-right md:mt-8'>{children}</p>
      </motion.div>
    ) 
    } else {
      return (
        <motion.div
        initial={{
          y:200,
          opacity: 0,
          scale: 1.2
        }}
        whileInView={{
          y:0,
          opacity: 1,
          scale: 1
        }}
        viewport={{ once: true}}
        transition={{
          duration: .5
        }}
        id={id}
        className={`container flex flex-wrap gap-20 p-10 mx-auto ${white ?'text-white' : 'text-black'}`}>
          <h1 className='text-3xl font-bold uppercase align-text-top '>{title}</h1>
          <p className='w-2/3 md:mt-8'>{children}</p>
        </motion.div>
      )
    }

  
}

export default OffsetText
