import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl">
            <button className="px-3 py-2 rounded-xl" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
            <button className="px-3 py-2 rounded-xl" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
            <button className="px-3 py-2 rounded-xl" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
            <button className="px-3 py-2 rounded-xl" style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>
            <button className="px-3 py-2 rounded-xl" style={{backgroundColor:"olive"}} onClick={()=>{setColor("olive")}}>Olive</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
