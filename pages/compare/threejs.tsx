import ThreeKnight from "@components/models/knight";
import { OrbitControls } from "@react-three/drei";
import { ARCanvas } from "@react-three/xr";
import type { NextPage } from "next";

const Threejs_Demo: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <ARCanvas>
        <OrbitControls />
        <ThreeKnight />
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <axesHelper args={[5]} />
      </ARCanvas>
    </div>
  );
};

export default Threejs_Demo;
