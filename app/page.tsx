"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  Zap,
  Cpu,
  Cog,
  Rocket,
  Brain,
  Eye,
  Wrench,
  Code,
  Lightbulb,
  GraduationCap,
  Clock,
  X,
} from "lucide-react"

const committees = [
  {
    name: "TechSpot Committee",
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-blue-500",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    name: "Content Editor Committee",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-500",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    name: "Digital Committee",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-yellow-500",
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Technical Committee",
    icon: <Cog className="w-6 h-6" />,
    color: "bg-green-500",
    gradient: "from-green-400 to-green-600",
  },
  {
    name: "Publicity Committee",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-orange-500",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    name: "Creative Committee",
    icon: <Code className="w-6 h-6" />,
    color: "bg-indigo-500",
    gradient: "from-indigo-400 to-indigo-600",
  },
  {
    name: "NSS Committee",
    icon: <Eye className="w-6 h-6" />,
    color: "bg-cyan-500",
    gradient: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Discipline Committee",
    icon: <Wrench className="w-6 h-6" />,
    color: "bg-red-500",
    gradient: "from-red-400 to-red-600",
  },
  {
    name: "Sports Committee",
    icon: <Rocket className="w-6 h-6" />,
    color: "bg-pink-500",
    gradient: "from-pink-400 to-pink-600",
  },
  {
    name: "Event Committee",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-teal-500",
    gradient: "from-teal-400 to-teal-600",
  }
]

const admins = [
  { name: "Mr. Shivam Naredi", position: "President", photo: "WhatsApp Image 2025-07-31 at 15.59.08_f1968f1c.jpg" },
  { name: "Ms. Ruchi jaiswal", position: "Vice President", photo: "IMG_20250731_152752.jpg" },
  { name: "Ms. Anjali Sonekar", position: "Secretary", photo:"Snapchat-1930806880 - Anjali Sonekar.jpg" },
  { name: "Ms. Mrunmayi Somalkar", position: "Joint-Secretary", photo: "Photo from Mrunmayi - MRUNMAYI SOMALKAR.jpg" },
  { name: "Mr. Prathamesh Ratnaparkhi", position: "Treasurer", photo: "WhatsApp Image 2025-07-31 at 21.35.46_ea884399.jpg" },
    { name: "Mr. Piyush Kolte", position: "Joint-Treasurer", photo: "20240924_094947 - Piyush Kolte.jpg" },
  { name: "Ms. Tanvi Sanghani", position: "Spokesperson", photo: "Snapchat-1297857382~2 - Tanvi Sanghani.jpg" },
    { name: "Mr. Rushang Chandekar", position: "Student Co-ordinator", photo: "WhatsApp Image 2025-07-31 at 16.00.06_46491d2c.jpg" },
]

// Custom hook for scroll animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible] as const
}

// Animated Robot Component
function AnimatedRobot() {
  return (
    <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
      {/* Robot Body */}
      <div className="relative">
        <svg
          width="240"
          height="240"
          viewBox="0 0 200 200"
          className="animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          {/* Robot Head */}
          <rect x="60" y="20" width="80" height="60" rx="10" fill="url(#robotGradient)" className="animate-pulse" />

          {/* Robot Eyes */}
          <circle cx="80" cy="45" r="8" fill="#00ffff" className="animate-ping" style={{ animationDuration: "2s" }} />
          <circle
            cx="120"
            cy="45"
            r="8"
            fill="#00ffff"
            className="animate-ping"
            style={{ animationDuration: "2s", animationDelay: "0.5s" }}
          />

          {/* Robot Body */}
          <rect x="50" y="80" width="100" height="80" rx="15" fill="url(#robotGradient)" />

          {/* Robot Arms */}
          <rect
            x="20"
            y="90"
            width="30"
            height="15"
            rx="7"
            fill="url(#robotGradient)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <rect
            x="150"
            y="90"
            width="30"
            height="15"
            rx="7"
            fill="url(#robotGradient)"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Robot Legs */}
          <rect x="70" y="160" width="20" height="30" rx="10" fill="url(#robotGradient)" />
          <rect x="110" y="160" width="20" height="30" rx="10" fill="url(#robotGradient)" />

          {/* Chest Panel */}
          <rect x="75" y="100" width="50" height="40" rx="5" fill="#1e293b" stroke="#00ffff" strokeWidth="2" />

          {/* Chest Lights */}
          <circle cx="85" cy="115" r="3" fill="#00ffff" className="animate-pulse" />
          <circle cx="100" cy="115" r="3" fill="#00ffff" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
          <circle cx="115" cy="115" r="3" fill="#00ffff" className="animate-pulse" style={{ animationDelay: "0.6s" }} />

          {/* Antenna */}
          <line x1="100" y1="20" x2="100" y2="10" stroke="#00ffff" strokeWidth="3" />
          <circle cx="100" cy="8" r="4" fill="#00ffff" className="animate-ping" />

          <defs>
            <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Elements around robot */}
      <div className="absolute inset-0">
        <div
          className="absolute top-4 left-4 w-4 h-4 bg-cyan-400 rounded-full animate-ping"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-12 left-8 w-2 h-2 bg-purple-400 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-4 right-12 w-3 h-3 bg-green-400 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </div>
  )
}

// Schedule Modal Component
function ScheduleModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl border border-slate-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-cyan-400">Event Schedule</h3>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Event Details */}
          <div className="mb-8 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="font-semibold">Augest 02, 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Time</p>
                  <p className="font-semibold">02:00 PM - 4:30 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Venue</p>
                  <p className="font-semibold">CSE Department (VS204)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Timeline */}
          <div className="space-y-4">
            {[
              // { time: "10:00 AM", event: "Registration & Welcome", venue: "Main Lobby" },
              { time: "02.00 PM", event: "Welcoming the Guests and Introducing Them", venue:"CSE Department (VS210)" },
              { time: "02:05 PM", event: "Lightning of the Lamp", venue: "CSE Department (VS210)" },
    
              { time: "02:10 PM", event: "Felicitation of Guests", venue: "CSE Department (VS210)" },
              { time: "02:15 PM", event: "Speech by Dr. Supriya Sawwashere (HOD of CSE Dept.)", venue: "CSE Department (VS210)" },
               { time: "02:30 PM", event: "Speech by Dipali Ma'am ", venue: "CSE Department (VS210)" },
                 { time: "02:35 PM", event: "President Badge", venue: "CSE Department (VS210)" },
              { time: "02:45 PM", event: "President's Speech", venue: "CSE Department (VS210)" },
               { time: "03:00 PM", event: "Badges Ceremony", venue: "CSE Department (VS210)" },
               { time: "03:30 PM", event: "Fun Activity", venue: "CSE Department (VS210)" },
               
             { time: "04:00 PM", event: "Award Ceremony", venue: "CSE Department (VS210)" },
             { time: "04:10 PM", event: "Magazine Display", venue: "CSE Department (VS210)" },
                { time: "04:15 PM", event: "Website Display", venue: "CSE Department (VS210)" },
                   
                      { time: "04:25 PM", event: "Vote of Thanks by vice President", venue: "CSE Department (VS210)" },
                          { time: "04:30 PM", event: "National Anthem", venue: "CSE Department (VS210)" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-slate-900/30 rounded-lg">
                <div className="w-20 text-cyan-400 font-semibold text-sm">{item.time}</div>
                <div className="flex-1">
                  <p className="font-semibold">{item.event}</p>
                  <p className="text-sm text-gray-400">{item.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SchologammaInstallation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [showSchedule, setShowSchedule] = useState(false)

  const [heroRef, heroVisible] = useScrollAnimation()
  const [aboutRef, aboutVisible] = useScrollAnimation()
  const [committeesRef, committeesVisible] = useScrollAnimation()
  const [adminsRef, adminsVisible] = useScrollAnimation()
  const [eventRef, eventVisible] = useScrollAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="10" cy="10" r="2" fill="currentColor" />
                <circle cx="90" cy="10" r="2" fill="currentColor" />
                <circle cx="10" cy="90" r="2" fill="currentColor" />
                <circle cx="90" cy="90" r="2" fill="currentColor" />
                <path d="M10 50h80M50 10v80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

{/* Floating Particles - Fixed */}
{[...Array(30)].map((_, i) => (
  <div
    key={i}
    className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
    style={{
      left: `${(i * 3.33) % 100}%`,     // ✅ Deterministic positioning
      top: `${(i * 2.5) % 100}%`,       // ✅ Deterministic positioning
      animationDelay: `${i * 0.1}s`,    // ✅ Staggered animation
    }}
  />
))}


        {/* Interactive Glow */}
        <div
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 backdrop-blur-sm bg-slate-900/50">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">SCHOLOGAMMA</span>
              <p className="text-sm text-cyan-400">CSE Department Forum</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#committees" className="hover:text-cyan-400 transition-colors">
              Committees
            </a>
            <a href="#admins" className="hover:text-cyan-400 transition-colors">
              Admins
            </a>
            <a href="#event" className="hover:text-cyan-400 transition-colors">
              Event Details
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div
          ref={heroRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-400/30 text-lg px-4 py-2">
                🎓 Installation Ceremony 2025
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  SCHOLOGAMMA
                </span>
                <br />
                <span className="text-white">Installation</span>
                <br />
                <span className="text-cyan-400">Ceremony</span>
              </h1>

              <div className="mb-8">
                <p className="text-xl md:text-2xl text-gray-300 mb-4">CSE Department Forum</p>
                <p className="text-lg text-gray-400 max-w-2xl">
                  {/* {" "} */}
                  {/* <span className="text-cyan-400 font-semibold">robotics theme</span>  */}
      
                <span className="text-cyan-400 font-semibold">  Schologamma Installation Ceremony</span> - a proud moment to welcome our new leaders, celebrate teamwork, and ignite a new wave of innovation and creativity in our forum.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  onClick={() => setShowSchedule(true)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all"
                >
                  View Schedule
                </Button>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">10</div>
                  <div className="text-sm text-gray-300">Committees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">2025</div>
                  <div className="text-sm text-gray-300">Forum</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">CSE</div>
                  <div className="text-sm text-gray-300">Department</div>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Robot */}
            <div className="flex justify-center lg:justify-end">
              <div
                className={`transform transition-all duration-1000 delay-500 ${
                  heroVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 translate-x-10 rotate-12"
                }`}
              >
                <AnimatedRobot />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-20 bg-slate-800/50">
        <div
          ref={aboutRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About the <span className="text-cyan-400">Installation Ceremony</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
         <i>The Schologamma Installation Ceremony is a celebration of leadership, collaboration, and fresh beginnings. It marks the official introduction of our newly elected committee members who are ready to take charge, drive innovation, and build a stronger, more connected forum. Through this ceremony, we honor the spirit of responsibility and set the tone for the exciting initiatives. It’s not just a transition — it’s the start of a shared vision and a united journey.</i>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-6 h-6 text-white" />,
                title: "Innovation",
                description:
                  "Fueling ideas, embracing change — Schologamma thrives on innovation that inspires action.",
                gradient: "from-cyan-400 to-blue-500",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Leadership",
                description:
                  "Leadership is not a position, it's a responsibility — and our team is ready to lead with passion and purpose.",
                gradient: "from-purple-400 to-pink-500",
              },
              {
                icon: <Brain className="w-6 h-6 text-white" />,
                title: "Learning",
                description:
                  "Every step forward begins with learning — empowering minds, expanding horizons at Schologamma.",
                gradient: "from-green-400 to-blue-500",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-500 group transform hover:scale-105 ${
                  aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section id="committees" className="relative z-10 px-6 py-20">
        <div
          ref={committeesRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            committeesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-cyan-400">10 Committees</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our committees are the backbone of Schologamma — a team of passionate minds working together to innovate, organize, and inspire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {committees.map((committee, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700 hover:border-cyan-400/50 transition-all duration-500 group hover:scale-105 transform backdrop-blur-sm ${
                  committeesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-6 text-center relative overflow-hidden">
                  {/* Background Gradient Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${committee.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${committee.gradient} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    {committee.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors relative z-10">
                    {committee.name}
                  </h3>

                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400/30 rounded-full group-hover:bg-cyan-400 transition-colors" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400/30 rounded-full group-hover:bg-blue-400 transition-colors" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOLOGAMMA Admins Section */}
      <section id="admins" className="relative z-10 px-6 py-20 bg-slate-800/50">
        <div
          ref={adminsRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            adminsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SCHOLOGAMMA <span className="text-cyan-400">Admins</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated leaders who drive innovation and excellence in our CSE Department Forum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admins.map((admin, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700 hover:border-cyan-400/50 transition-all duration-500 group hover:scale-105 transform ${
                  adminsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    {/* Photo */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors">
                        <img
                          src={admin.photo || "/placeholder.svg"}
                          alt={admin.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Name and Position */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {admin.name}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium">{admin.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event" className="relative z-10 px-6 py-20">
        <div
          ref={eventRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            eventVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Event <span className="text-cyan-400">Details</span>
            </h2>
            <p className="text-lg text-gray-300">
             Mark your calendars for this inspiring celebration of emerging leaders, bold decisions, and the spirit of growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Calendar className="w-6 h-6 text-white" />,
                  title: "Date & Time",
                  description: "Augest 02, 2025 | 02:00 PM - 4:30 PM",
                  gradient: "from-cyan-400 to-blue-500",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-white" />,
                  title: "Venue",
                  description: "CSE Department (VS210)",
                  gradient: "from-purple-400 to-pink-500",
                },
                {
                  icon: <Users className="w-6 h-6 text-white" />,
                  title: "Attendees",
                  description: "Admins, Heads, Co-heads, Members & Faculties ",
                  gradient: "from-green-400 to-blue-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 transform transition-all duration-500 ${
                    eventVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 transform transition-all duration-1000 ${
                eventVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">Event Highlights</h3>
              <ul className="space-y-4">
                {[
                  "Forum Installation Ceremony",
                  "Committee Presentations",
                  "Leadership Oath & Speeches",
                  " Vision & Roadmap Presentation",
                  "Moments of Gratitude",
                  "Future Forward",
                  "Networking Sessions",
                 
                  "Photo Sessions & Memories",
                ].map((highlight, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div
                      className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    ></div>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900 border-t border-slate-800 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-lg font-bold">SCHOLOGAMMA Forum</span>
                  <p className="text-sm text-cyan-400">CSE Department</p>
                </div>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of computer science engineers and tech innovators.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-cyan-400 transition-colors">
                    About Event
                  </a>
                </li>
                <li>
                  <a href="#committees" className="hover:text-cyan-400 transition-colors">
                    Our Committees
                  </a>
                </li>
                <li>
                  <a href="#admins" className="hover:text-cyan-400 transition-colors">
                    Forum Admins
                  </a>
                </li>
                <li>
                  <a href="#event" className="hover:text-cyan-400 transition-colors">
                    Event Details
                  </a>
                </li>
              </ul>
            </div>

            {/* <div>
              <h4 className="text-lg font-bold mb-4 text-cyan-400">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: schologamma@cse.college.edu</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: CSE Department, College Campus</p>
              </div>
            </div> */}
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SCHOLOGAMMA Forum - CSE Department. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Schedule Modal */}
      <ScheduleModal isOpen={showSchedule} onClose={() => setShowSchedule(false)} />
    </div>
  )
}
