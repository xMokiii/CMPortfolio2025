import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Overlay } from "./components/Overlay";
import { Office } from "./components/Office";
import { ScrollControls } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <ScrollControls pages={4} damping={0.25}>
          <Office />
          <Overlay />
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App;
