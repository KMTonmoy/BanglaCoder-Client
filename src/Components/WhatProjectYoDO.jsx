'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiFirebase, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si'

const WhatProjectYoDO = () => {
    const projects = [
        {
            title: "Dragon News",
            description: "A complete news portal with authentication, categories, and author dashboard. Readers can browse news while authors can publish and manage content.",
            image: "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fhome2%2Ficons%2Fprojects%2Fimage%20(3).png&w=1920&q=75", // Replace with your image path
            technologies: [
                { name: "React", icon: <FaReact className="text-blue-400" /> },
                { name: "React Router", icon: <FaReact className="text-pink-500" /> },
                { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> }
            ]
        },
        {
            title: "Espresso Emporium",
            description: "An e-commerce platform for coffee enthusiasts with product catalog, shopping cart, and user reviews system.",
            image: "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fhome2%2Ficons%2Fprojects%2Fimage%20(4).png&w=1920&q=75", // Replace with your image path
            technologies: [
                { name: "React", icon: <FaReact className="text-blue-400" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express", icon: <SiExpress className="text-gray-400" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
            ]
        }
    ]

    return (
        <div className="bg-[#0B1221] py-16 px-4 sm:px-6 lg:px-8">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl font-bold text-[#f1f5f9] mb-12"
            >
                তুমি যেসব প্রজেক্ট করবে
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-[#1A2036] rounded-xl overflow-hidden border border-[#1E3A8A]/50 shadow-lg"
                    >
                        {/* Project Image */}
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-[#07A8ED] mb-3">{project.title}</h2>
                            <p className="text-[#E5E7EB] mb-4">{project.description}</p>

                            {/* Technologies Used */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-[#E5E7EB]/80 mb-2">Technologies Used:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="flex items-center gap-1 px-3 py-1 bg-[#0B1221] rounded-full text-sm"
                                        >
                                            {tech.icon}
                                            <span className="text-[#E5E7EB]">{tech.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* View Project Button */}
                            <button className="flex items-center gap-2 text-[#07A8ED] hover:text-[#0B8CC4] transition-colors">
                                View Project <FiArrowRight />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default WhatProjectYoDO