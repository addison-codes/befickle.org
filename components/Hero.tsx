import React from 'react'


const Hero = ({image, cover, home}: {image:string, cover:string, home:boolean}) => {
  const heroImage = {
    backgroundImage: `url(${image})`,
  }
  const coverImage = {
    backgroundImage: `url(${cover})`
  }
  return (
    <div style={heroImage} className={`bg-opacity-5 bg-cover -mt-48 mix-blend-screen h-screen brightness-50`}>
      <div style={coverImage} className={`mix-blend-screen bg-cover h-screen`}></div>
    </div>
  )
}


export default Hero