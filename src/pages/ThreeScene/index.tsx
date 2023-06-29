import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls'

export function ThreeScene() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const handleMouseDown = () => {
      setIsMouseDown(true)
    }

    const handleMouseUp = () => {
      setIsMouseDown(false)
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseDown) {
        const { movementX, movementY } = event
        const rotationSpeed = 0.005
        if (sceneRef.current) {
          const camera = sceneRef.current.camera
          camera.rotation.y -= movementX * rotationSpeed
          camera.rotation.x -= movementY * rotationSpeed
        }
      }
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMouseDown])

  useEffect(() => {
    if (sceneRef.current) {
      // 创建场景
      const scene = new THREE.Scene()

      // 创建相机
      const camera = new THREE.PerspectiveCamera(
        75, // 视角
        window.innerWidth / window.innerHeight, // 宽高比
        0.1, // 近截面
        1000, // 远截面
      )
      camera.position.z = 5
      sceneRef.current.camera = camera

      // 创建渲染器
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      sceneRef.current.appendChild(renderer.domElement)

      // 添加一个立方体
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      // 添加 OrbitControls 控件
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true

      // 添加 TrackballControls 控件
      const trackballControls = new TrackballControls(camera, renderer.domElement)
      trackballControls.rotateSpeed = 2.0

      // 添加 FlyControls 控件
      const flyControls = new FlyControls(camera, renderer.domElement)
      flyControls.movementSpeed = 10
      flyControls.rollSpeed = Math.PI / 24

      // 添加 FirstPersonControls 控件
      const firstPersonControls = new FirstPersonControls(camera, renderer.domElement)
      // firstPersonControls.lookSpeed = 0.4; // 鼠标移动速度
      // firstPersonControls.movementSpeed = 20; //相机移动速度
      // firstPersonControls.lookVertical = true; //开启垂直
      // firstPersonControls.constrainVertical = true; // 固定垂直
      // firstPersonControls.verticalMin = 1.0;
      // firstPersonControls.verticalMax = 2.0;
      // firstPersonControls.lon = -150; //默认在x轴的角度
      // firstPersonControls.lat = 120; //默认在y轴的角度
      // 动画循环
      const animate = () => {
        requestAnimationFrame(animate)
        const clock = new THREE.Clock()

        // 更新相机控制器状态
        controls.update()
        trackballControls.update()
        // firstPersonControls.update(clock.getDelta());
        flyControls.update(1)

        // 旋转立方体
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        // 渲染场景
        renderer.render(scene, camera)
      }

      animate()

      // 窗口大小变化时更新渲染器的尺寸
      const handleWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener('resize', handleWindowResize)

      // 清理函数
      return () => {
        window.removeEventListener('resize', handleWindowResize)
        if (sceneRef.current) {
          sceneRef.current.removeChild(renderer.domElement)
        }
      }
    }
  }, [])

  return <div ref={sceneRef} />
}

export default ThreeScene
