import { useState } from 'react'
import './App.css'
import Image from './components/Image'

function App() {

  const imgData = [
    {
      img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx",
      title: "Rolls royce",
      Decription: "Rolls-Royce is a British luxury car manufacturer known for its handcrafted vehicles that emphasize elegance, sophistication, and quality.",
    },
    {
      img: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      title: "Lamborghini",
      Decription: " Lamborghini is an Italian luxury car manufacturer known for its high-performance sports cars and sleek, aggressive designs.",
    },
    {
      img: "https://www.prpnewswire.com/wp-content/uploads/2023/09/New-Sports-Car.jpg",
      title: "Bugatti",
      Decription: "Bugatti is a French luxury car manufacturer renowned for its high-performance sports cars and exceptional engineering.",
    },
    {
      img: "https://i.ytimg.com/vi/8ePEUTwBaBY/maxresdefault.jpg",
      title: "BMW",
      Decription: "BMW is a German automaker known for its luxury vehicles that emphasize performance, innovation, and driving dynamics.",
    },
    {
      img: "https://www.weddingcarsforhire.com/wp-content/uploads/2023/10/DSC_0329-scaled.jpg",
      title: "G wagon",
      Decription: "The G-Wagon, or Mercedes-Benz G-Class, is a luxury SUV known for its rugged design, off-road capability, and high-end features.",
    },
    {
      img: "https://www.audi.co.uk/content/dam/nemo/uk/models/audisport/D-Card_2col-04%20(1).webp?width=563",
      title: "Audi",
      Decription: "Audi is a German luxury car manufacturer known for its stylish design, advanced technology, and superior engineering.",
    },
    {
      img: "https://academy.education.investing.com/wp-content/uploads/2022/08/tesla-statistics.jpg",
      title: "Tesla",
      Decription: "Tesla is an American electric vehicle and clean energy company known for its innovative electric cars, and advancements in autonomous driving.",
    },
    {
      img: "https://www.v3cars.com/media/model-imgs/1673517098-lexus-lx.webp",
      title: "Lexus",
      Decription: "Lexus is a luxury vehicle division of the Japanese automaker Toyota, known for its high-quality craftsmanship, advanced technology",
    },
    {
      img: "https://imageio.forbes.com/specials-images/imageserve/61c8946284c8cdb87890a847/GT-Speed---Candy-Red---7-jpg/960x0.jpg?format=jpg&width=960",
      title: "Bentley",
      Decription: "Bentley is a British luxury automobile manufacturer known for crafting high-performance, elegantly designed vehicles.",
    },
  ]

  
  return (
    <>
      <div className='container'> 
        <h1 >Car Image Gallery</h1>
        <Image data={imgData}/>
      </div>
    </>
  )
}

export default App
