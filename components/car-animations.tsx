"use client"

import { useEffect, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Canvas } from "@react-three/fiber"
import { Box, Sphere } from "@react-three/drei"
import * as THREE from "three"

// Individual car component with animation logic
function AnimatedCar({
  position,
  speed,
  lane,
  carType,
  color,
}: {
  position: [number, number, number]
  speed: number
  lane: number
  carType: string
  color: string
}) {
  const meshRef = useRef<THREE.Group>(null)
  const [currentX, setCurrentX] = useState(position[0])

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Move car from right to left
      setCurrentX((prev) => {
        const newX = prev - speed * delta * 60
        // Reset position when car goes off screen
        if (newX < -20) {
          return 25 + Math.random() * 10
        }
        return newX
      })

      meshRef.current.position.x = currentX
      meshRef.current.position.y = position[1]
      meshRef.current.position.z = position[2] + lane * 2
    }
  })

  return (
    <group ref={meshRef} position={[currentX, position[1], position[2] + lane * 2]}>
      {/* Car Body */}
      <Box args={[2, 0.8, 4]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Box>

      {/* Car Roof */}
      <Box args={[1.6, 0.6, 2]} position={[0, 1, -0.2]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Box>

      {/* Wheels */}
      <Sphere args={[0.3]} position={[-0.8, -0.2, 1.2]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Sphere>
      <Sphere args={[0.3]} position={[0.8, -0.2, 1.2]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Sphere>
      <Sphere args={[0.3]} position={[-0.8, -0.2, -1.2]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Sphere>
      <Sphere args={[0.3]} position={[0.8, -0.2, -1.2]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Sphere>

      {/* Neon Glow Effect */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 5]} />
        <meshBasicMaterial color="#00bfff" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  )
}

// Scene setup component
function CarScene() {
  const [cars, setCars] = useState<
    Array<{
      id: number
      position: [number, number, number]
      speed: number
      lane: number
      carType: string
      color: string
    }>
  >([])

  const carTypes = ["Bugatti", "Challenger", "BMW", "Supra"]
  const carColors = ["#ff0000", "#0066cc", "#ffffff", "#ffaa00", "#00ff00"]

  useEffect(() => {
    // Initialize cars with random properties
    const initialCars = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      position: [15 + i * 8, -2, -10] as [number, number, number],
      speed: 0.5 + Math.random() * 0.8, // Random speed between 0.5-1.3
      lane: Math.floor(Math.random() * 3), // 0, 1, or 2 (front, middle, back)
      carType: carTypes[Math.floor(Math.random() * carTypes.length)],
      color: carColors[Math.floor(Math.random() * carColors.length)],
    }))
    setCars(initialCars)
  }, [])

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />

      {/* Directional light */}
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#00bfff" />

      {/* Point light for neon effect */}
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#00bfff" distance={20} />

      {/* Render cars */}
      {cars.map((car) => (
        <AnimatedCar
          key={car.id}
          position={car.position}
          speed={car.speed}
          lane={car.lane}
          carType={car.carType}
          color={car.color}
        />
      ))}
    </>
  )
}

// Main component that provides the Canvas
export function CarAnimations({ className }: { className?: string }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: 1 }}>
      <Canvas
        camera={{
          position: [0, 2, 10],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        style={{
          background: "transparent",
          width: "100%",
          height: "100%",
        }}
      >
        <CarScene />
      </Canvas>
    </div>
  )
}
