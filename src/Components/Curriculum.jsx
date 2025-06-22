import React from 'react'

const Curriculum = () => {
    return (
        <div className="bg-[#0B1221] py-16 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-center text-4xl font-bold text-[#f1f5f9] mb-10">
                    এই কোর্সে তুমি কী শিখবে?
                </h1>
                <p className="text-[#E5E7EB] max-w-2xl mx-auto">
                    CodeBangla এর ডাইনামিক বুটকেম্পটি MERN স্ট্যাকের প্রারম্ভিক থেকে শুরু করে সম্পূর্ণ দক্ষতা অর্জন পর্যন্ত তোমাকে নিয়ে যাবে। একসাথে মজবুত ভিত্তি গড়ে, শেখার যাত্রাকে করে তুলবে সহজ, মজার ও ফলপ্রসূ।
                </p>
            </div>

            {/* Curriculum Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Module Group 1 */}
                <div className="bg-[#1A2036] rounded-lg p-6 border border-[#1E3A8A]/50">
                    <h3 className="text-xl font-bold text-[#07A8ED] mb-4">Foundational Modules</h3>
                    <ul className="space-y-3">
                        <li className="text-[#E5E7EB]">Module -1: Welcome Video</li>
                        <li className="text-[#E5E7EB]">Module 0: Orientation</li>
                        <li className="text-[#E5E7EB]">Module 1: Learn HTML</li>
                        <li className="text-[#E5E7EB]">Module 2: Learn CSS</li>
                        <li className="text-[#E5E7EB]">Module 3: Git & GitHub</li>
                        <li className="text-[#E5E7EB]">Module 4: More HTML</li>
                    </ul>
                </div>

                {/* Module Group 2 */}
                <div className="bg-[#1A2036] rounded-lg p-6 border border-[#1E3A8A]/50">
                    <h3 className="text-xl font-bold text-[#07A8ED] mb-4">Core Development</h3>
                    <ul className="space-y-3">
                        <li className="text-[#E5E7EB]">Module 5: Portfolio Website</li>
                        <li className="text-[#E5E7EB]">Module 6: Flower Shop</li>
                        <li className="text-[#E5E7EB]">Module 7: Responsive Layout</li>
                        <li className="text-[#E5E7EB]">Module 8: Advanced Layout</li>
                        <li className="text-[#E5E7EB]">Module 9: Landing Page</li>
                        <li className="text-[#E5E7EB]">Module 10: Image Optimization</li>
                    </ul>
                </div>

                {/* Module Group 3 */}
                <div className="bg-[#1A2036] rounded-lg p-6 border border-[#1E3A8A]/50">
                    <h3 className="text-xl font-bold text-[#07A8ED] mb-4">Advanced Topics</h3>
                    <ul className="space-y-3">
                        <li className="text-[#E5E7EB]">Module 16: JavaScript Intro</li>
                        <li className="text-[#E5E7EB]">Module 24: DOM Tour</li>
                        <li className="text-[#E5E7EB]">Module 38: React Core</li>
                        <li className="text-[#E5E7EB]">Module 54: Node & Express</li>
                        <li className="text-[#E5E7EB]">Module 64: Final Project</li>
                        <li className="text-[#E5E7EB]">Module 73: Next.js</li>
                    </ul>
                </div>
            </div>

          
        </div>
    )
}

export default Curriculum