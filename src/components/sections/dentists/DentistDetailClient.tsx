"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaAward } from "react-icons/fa"
import type { DentistData } from "@/data/dentists/dentists"

interface DentistDetailClientProps {
    dentist: DentistData
    relatedDentists: DentistData[]
}

export default function DentistDetailClient({ dentist, relatedDentists }: DentistDetailClientProps) {
    return (
        <>
            {/* Dentist Profile Header */}
            <div className="py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Image & Contact Info */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        {/* Dentist Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={dentist.image}
                                    alt={dentist.name}
                                    className="w-full h-auto aspect-square object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Quick Contact Info - Mobile: Full width */}
                        <div className="w-full bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 text-gray-600">
                                    <FaEnvelope className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <a href={`mailto:${dentist.email}`} className="hover:text-blue-600 break-words">
                                        {dentist.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaPhone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                    <a href={`tel:${dentist.phone}`} className="hover:text-blue-600">
                                        {dentist.phone}
                                    </a>
                                </div>
                                <div className="flex items-start gap-3 text-gray-600">
                                    <FaMapMarkerAlt className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />

                                    <div className="space-y-4">
                                        {dentist.locations.map((loc, index) => (
                                            <div key={index} className="space-y-1">
                                                <p className="font-semibold">{loc.city}</p>
                                                <p>{loc.address}</p>

                                                <div className="flex items-center gap-2 text-sm">
                                                    <FaCalendarAlt className="w-4 h-4 text-blue-500" />
                                                    <span>{loc.timing}</span>
                                                </div>

                                                {loc.mapsLink && (
                                                    <a
                                                        href={loc.mapsLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:underline text-sm"
                                                    >
                                                        View on Google Maps
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button className="mt-6 w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                Book Appointment
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Dentist Info - Mobile: Full width */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="mb-8">
                                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                                    {dentist.designation}
                                </span>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                    {dentist.name}
                                </h1>
                                <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600 mb-6">
                                    <div className="flex items-center gap-2">
                                        <FaGraduationCap className="w-5 h-5 text-blue-500" />
                                        <span className="text-sm md:text-base">{dentist.education}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaAward className="w-5 h-5 text-blue-500" />
                                        <span className="text-sm md:text-base">{dentist.experience} Experience</span>
                                    </div>
                                </div>
                            </div>

                            {/* Introduction */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mb-8 md:mb-12"
                            >
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Introduction:</h2>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    {dentist.bio}
                                </p>
                            </motion.div>

                            {/* Experience Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mb-8 md:mb-12"
                            >
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Experience:</h2>
                                <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100">
                                    <ul className="space-y-3 md:space-y-4">
                                        {dentist.specialties.map((specialty, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 text-base md:text-lg">{specialty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Achievements Section */}
                            {dentist.achievements && dentist.achievements.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="mb-8 md:mb-12"
                                >
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Achievements & Awards</h2>
                                    <div className="bg-green-50 rounded-xl p-6 md:p-8 border border-green-100">
                                        <ul className="space-y-3 md:space-y-4">
                                            {dentist.achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <FaAward className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700 text-base md:text-lg">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Related Dentists */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Meet Other Specialists</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {relatedDentists.map((relatedDentist) => (
                        <Link
                            key={relatedDentist.id}
                            href={`/dentist/${relatedDentist.id}`}
                            className="block"
                        >
                            <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-pointer h-full">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                    {relatedDentist.name}
                                </h3>
                                <p className="text-blue-600 mb-2 md:mb-3 font-medium text-sm md:text-base">
                                    {relatedDentist.designation}
                                </p>
                                <p className="text-gray-600 text-xs md:text-sm">
                                    {relatedDentist.experience} experience • {relatedDentist.education}
                                </p>
                                <div className="mt-3 md:mt-4 text-blue-600 font-medium flex items-center gap-2 text-sm md:text-base">
                                    View Profile
                                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </>
    )
}
