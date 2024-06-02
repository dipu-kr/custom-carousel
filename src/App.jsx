import './App.css'
import Carousel from './components/Carousel'
import healthproductimg from "./assets/healthproductimg.png"
import healthspecialistcardimg from "./assets/healthspecialistcardimg.png"

function App() {
  const data = [
    {
      id:1,
      url:healthproductimg,
      title:'Image-1'
    },
    {
      id:2,
      url:healthspecialistcardimg,
      title:'Image-2'
    },
    {
      id:3,
      url:healthproductimg,
      title:'Image-3'
    },
    {
      id:4,
      url:healthspecialistcardimg,
      title:'Image-4'
    },
    {
      id:1,
      url:healthproductimg,
      title:'Image-1'
    },
    {
      id:2,
      url:healthspecialistcardimg,
      title:'Image-2'
    },
    {
      id:3,
      url:healthproductimg,
      title:'Image-3'
    },
    {
      id:4,
      url:healthspecialistcardimg,
      title:'Image-4'
    },
  ]

  return (
    <div className='main'>
     <Carousel images={data}/>
    </div>
  )
}

export default App
