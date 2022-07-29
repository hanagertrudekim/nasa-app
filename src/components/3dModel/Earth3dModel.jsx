/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Thomas Kole (https://sketchfab.com/ThomasKole)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/planet-earth-alt-drag-to-change-lighting-47ad713999284fbdb9153a6e74feda86
title: Planet Earth (Alt-Drag to change Lighting)
*/

import React, { useRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, Canvas } from 'react-three-fiber'

function Model(props) {

  const { nodes, materials } = useGLTF('/earth.glb')
  const earthRef = useRef();
  
  useFrame(()=>{
    earthRef.current.rotation.y -= -0.003
  })

  return (
        <group {...props} dispose={null} ref={earthRef}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Sphere_1.geometry} material={materials['Material.004']} />
            <group scale={1.02}>
              <mesh geometry={nodes.Sphere001_1.geometry} material={materials['Material.005']} />
            </group>
          </group>
        </group>
  )
}

useGLTF.preload('/earth.glb')

export const Earth3dModel = () => {
  return (
    <>
    <Canvas camera={{fov: 10, position: [0, 10, 15]}} style={{background: "transeparent"}}>
      <Suspense>
        <ambientLight intensity={1} />
        <Model />
      </Suspense>
    </Canvas>
  </>
  )
}
