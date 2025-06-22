'use client'
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const WhatYouLearn = () => {
    const mountRef = useRef(null);
    const technologies = [
        { name: "HTML", textColor: "text-[#E44D26]", bgColor: "bg-[#251216]" },
        { name: "CSS", textColor: "text-[#264DE4]", bgColor: "bg-[#071234]" },
        { name: "Tailwind", textColor: "text-[#38BDF8]", bgColor: "bg-[#0F172A]" },
        { name: "JavaScript", textColor: "text-[#F7DF1E]", bgColor: "bg-[#251216]" },
        { name: "React", textColor: "text-[#61DAFB]", bgColor: "bg-[#022336]" },
        { name: "Firebase", textColor: "text-[#FFCA28]", bgColor: "bg-[#261612]" },
        { name: "Node JS", textColor: "text-[#68A063]", bgColor: "bg-[#141F10]" },
        { name: "Express JS", textColor: "text-[#000000]", bgColor: "bg-[#F5F5F5]" },
        { name: "MongoDB", textColor: "text-[#47A248]", bgColor: "bg-[#0C2916]" }
    ];

    useEffect(() => {
        // Three.js setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setClearColor(0x0B1221, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.zIndex = '0';
        mountRef.current.appendChild(renderer.domElement);

        // Create a floating geometry
        const geometry = new THREE.IcosahedronGeometry(2, 1);
        const material = new THREE.MeshPhongMaterial({
            color: 0x07A8ED,
            emissive: 0x07A8ED,
            emissiveIntensity: 0.2,
            shininess: 100,
            transparent: true,
            opacity: 0.7,
            wireframe: true
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0x07A8ED, 0.5);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Position camera
        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#0B1221] overflow-hidden">
            {/* Three.js container */}
            <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-center text-4xl font-bold text-[#f1f5f9] mb-10">

                    এই কোর্সে তুমি কী শিখবে?
                </h1>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`${tech.textColor} ${tech.bgColor} px-4 py-3 text-lg md:text-xl rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#07A8ED]/20 relative z-10`}
                        >
                            {tech.name}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default WhatYouLearn;