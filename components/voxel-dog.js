import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()

  // ← Use a root‑relative URL so it works both locally and on Netlify
  const urlDogGLB = '/cat.glb'

  const handleWindowResize = useCallback(() => {
    const renderer = refRenderer.current
    const container = refContainer.current
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const container = refContainer.current
    if (!container) return

    const scW = container.clientWidth
    const scH = container.clientHeight

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(scW, scH)
    renderer.outputEncoding = THREE.sRGBEncoding
    container.appendChild(renderer.domElement)
    refRenderer.current = renderer

    // Scene & Camera
    const scene = new THREE.Scene()
    const target = new THREE.Vector3(-0.5, 1.2, 0)
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
    const scale = scH * 0.005 + 4.8
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    // Light
    const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
    scene.add(ambientLight)

     // Directional light to cast shadows
    const dirLight = new THREE.DirectionalLight(0xffffff, 3.0)
    dirLight.position.set(0, 20, 0)
    dirLight.castShadow = true
    // optional: tweak shadow resolution
    dirLight.shadow.mapSize.width  = 1024
    dirLight.shadow.mapSize.height = 1024
    dirLight.shadow.camera.near    = 0.5
    dirLight.shadow.camera.far     = 100
    scene.add(dirLight)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.target = target

    // Load Model
    loadGLTFModel(scene, urlDogGLB, {
      receiveShadow: true,
      castShadow: true,
      scale: 2.8     
    }).then(obj => {
      // Uniform scale (if you already set that)
      // ← Here’s the translation:
      obj.position.set( 0, 1, 0 )  
      // moves the model +1 on X, +0.5 on Y, and –2 on Z
    
      animate()
      setLoading(false)
    }).catch(err => {
      console.error('Failed to load model:', err)
    })

    let req = null
    let frame = 0
    const animate = () => {
      req = requestAnimationFrame(animate)

      frame = frame <= 100 ? frame + 1 : frame

      if (frame <= 100) {
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

        camera.position.y = 7
        camera.position.x =
          p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z =
          p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      } else {
        controls.update()
      }

      renderer.render(scene, camera)
    }

    return () => {
      cancelAnimationFrame(req)
      renderer.domElement.remove()
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <DogContainer ref={refContainer}>
      {loading && <DogSpinner />}
    </DogContainer>
  )
}

export default VoxelDog
