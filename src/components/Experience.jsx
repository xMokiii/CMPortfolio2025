import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";
// import { Poisson } from "./Poisson";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <ScrollControls pages={4} damping={0.25}>
        <Overlay />
        <Office />
        {/* <Poisson /> */}
      </ScrollControls>
    </>
  );
};
