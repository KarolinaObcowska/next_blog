import React from 'react'
import Image from 'next/image'
const AboutMe = () => {
  return (
    <div className="lg:px-52 px-10 mt-10 mb-20 md:grid gap-6 md:grid-cols-2">
      <div className="flex flex-wrap my-10">
        <h2 className="font-mono text-pink-600 mb-4">
          What is this blog about?
        </h2>
        <p className="font-mono text-sm text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          porttitor urna vitae felis tempor, non egestas ligula mollis. Nullam
          ac risus vel lectus rutrum pretium imperdiet at nisl. Aliquam laoreet,
          nunc quis dignissim elementum, urna augue consequat dolor, ut
          efficitur elit quam nec purus. Sed fermentum nisl sagittis enim
          viverra, ac efficitur nunc malesuada. Nunc sit amet massa pulvinar,
          pretium ipsum quis, bibendum nunc
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <Image
          width={132}
          height={132}
          className="object-cover m-2 rounded-full"
          src="/avatar.jpg"
          alt="Profile image"
        />
        <h2 className="block font-mono my-8 text-pink-600">
          Hi! My name is XYZ!
        </h2>
        <h3 className="md:mx-8 font-mono text-sm text-pink-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          porttitor urna vitae felis tempor, non egestas ligula mollis. Nullam
          ac risus vel lectus rutrum pretium imperdiet at nisl.
        </h3>
      </div>
    </div>
  )
}

export default AboutMe
