/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: kongle (https://sketchfab.com/minecraftnorge)
license: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
source: https://sketchfab.com/3d-models/venus-b306aaadbf2b4fcea1afa2db5ed75b4f
title: Venus
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/venus.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.moon} />
      </group>
    </group>
  )
}

useGLTF.preload('/venus.glb')
