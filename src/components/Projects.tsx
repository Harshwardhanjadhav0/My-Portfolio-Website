import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo } from 'phosphor-react';
import Lottie from 'lottie-react';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
const projectsRef = useRef<HTMLDivElement>(null);
const containerRef = useRef<HTMLDivElement>(null);
const orb1Ref = useRef<HTMLDivElement>(null);
const orb2Ref = useRef<HTMLDivElement>(null);
const orb3Ref = useRef<HTMLDivElement>(null);
const orb4Ref = useRef<HTMLDivElement>(null);
const orb5Ref = useRef<HTMLDivElement>(null);
const orb6Ref = useRef<HTMLDivElement>(null);
const orb7Ref = useRef<HTMLDivElement>(null);
const orb8Ref = useRef<HTMLDivElement>(null);
const astronautRef = useRef<HTMLDivElement>(null);
const [astronautData, setAstronautData] = useState(null);

const projects = [
{
id: 1,
title: "AWS Infrastructure Automation",
description: "Scalable cloud infrastructure with Terraform and AWS services",
image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800",
tech: ["AWS", "Terraform", "Docker", "Kubernetes"]
},
{
id: 2,
title: "CI/CD Pipeline Platform",
description: "Automated deployment pipeline with monitoring and rollback",
image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
tech: ["Jenkins", "Docker", "AWS", "Git"]
},
{
id: 3,
title: "Microservices Architecture",
description: "Containerized microservices with service mesh",
image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
tech: ["Kubernetes", "Docker", "Istio", "Prometheus"]
},
{
id: 4,
title: "Monitoring & Observability",
description: "Comprehensive monitoring solution with alerts",
image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
tech: ["Grafana", "Prometheus", "ELK Stack", "AWS"]
}
];

useEffect(() => {
// Load astronaut animation
fetch('./astronaut.json')
.then(response => response.json())
.then(data => setAstronautData(data))
.catch(error => console.log('Astronaut animation loading failed:', error));

const ctx = gsap.context(() => {
  // Title animation
  gsap.fromTo(".projects-title",
    { y: 50, opacity: 0, filter: "blur(10px)" },
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // Cards stagger animation
  gsap.fromTo(".project-card",
    { y: 60, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // Enhanced floating orbs animations
  gsap.to(orb1Ref.current, {
    y: -35,
    x: 25,
    rotation: 180,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(orb2Ref.current, {
    y: -45,
    x: -30,
    rotation: -180,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1
  });

  gsap.to(orb3Ref.current, {
    y: -30,
    x: 35,
    rotation: 360,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 2
  });

  gsap.to(orb4Ref.current, {
    y: -50,
    x: -40,
    rotation: 270,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5
  });

  gsap.to(orb5Ref.current, {
    y: -25,
    x: 45,
    rotation: -270,
    duration: 4.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 3.5
  });

  gsap.to(orb6Ref.current, {
    y: -35,
    x: -25,
    rotation: 180,
    duration: 5.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1.5
  });

  gsap.to(orb7Ref.current, {
    y: -40,
    x: 20,
    rotation: -90,
    duration: 4.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 2.5
  });

  gsap.to(orb8Ref.current, {
    y: -30,
    x: -35,
    rotation: 270,
    duration: 6.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 4
  });

  // Very slow astronaut floating animation
  if (astronautRef.current) {
    // Start from a specific position instead of 0,0
    gsap.set(astronautRef.current, { x: window.innerWidth * 0.3, y: -80, rotation: 5 });
    
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: false });
    
    // Create a perfect loop where the last position matches the first
    tl.to(astronautRef.current, {
      x: window.innerWidth * 0.5,
      y: -60,
      rotation: 10,
      duration: 45,
      ease: "none"
    })
    .to(astronautRef.current, {
      x: window.innerWidth * 0.7,
      y: -40,
      rotation: -5,
      duration: 50,
      ease: "none"
    })
    .to(astronautRef.current, {
      x: window.innerWidth * 0.5,
      y: -20,
      rotation: 8,
      duration: 48,
      ease: "none"
    })
    .to(astronautRef.current, {
      x: window.innerWidth * 0.3,
      y: -80,
      rotation: 5,
      duration: 52,
      ease: "none"
    });
  }

}, projectsRef);

return () => ctx.revert();

}, []);

return (
<section ref={projectsRef} className="py-20 bg-gray-900 relative overflow-hidden">
{/* Floating Astronaut Animation - Full Page Coverage */}
<div ref={astronautRef} className="fixed inset-0 pointer-events-none z-[1] opacity-60">
{astronautData && (
<Lottie
animationData={astronautData}
loop={true}
autoplay={true}
style={{ width: '500px', height: '500px' }}
speed={0.1}
rendererSettings={{
preserveAspectRatio: 'xMidYMid meet',
clearCanvas: false,
progressiveLoad: false,
hideOnTransparent: false,
devicePixelRatio: window.devicePixelRatio || 1
}}
/>
)}
</div>
{/* Floating Orbs */}
<div ref={orb1Ref} className="absolute top-32 left-16 w-4 h-4 bg-blue-500 rounded-full blur-sm opacity-60 shadow-lg shadow-blue-500/50" />
<div ref={orb2Ref} className="absolute top-64 right-24 w-3 h-3 bg-purple-500 rounded-full blur-sm opacity-50 shadow-lg shadow-purple-500/50" />
<div ref={orb3Ref} className="absolute bottom-40 left-1/3 w-5 h-5 bg-cyan-400 rounded-full blur-sm opacity-70 shadow-lg shadow-cyan-400/50" />
<div ref={orb4Ref} className="absolute top-1/2 right-1/5 w-6 h-6 bg-pink-500 rounded-full blur-sm opacity-55 shadow-lg shadow-pink-500/50" />
<div ref={orb5Ref} className="absolute bottom-20 right-1/3 w-3 h-3 bg-green-400 rounded-full blur-sm opacity-65 shadow-lg shadow-green-400/50" />
<div ref={orb6Ref} className="absolute top-20 left-1/5 w-4 h-4 bg-orange-500 rounded-full blur-sm opacity-60 shadow-lg shadow-orange-500/50" />
<div ref={orb7Ref} className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-teal-400 rounded-full blur-sm opacity-65 shadow-lg shadow-teal-400/50" />
<div ref={orb8Ref} className="absolute top-3/4 right-1/6 w-3 h-3 bg-rose-500 rounded-full blur-sm opacity-55 shadow-lg shadow-rose-500/50" />

  {/* Additional ambient particles */}
  <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-pulse" />
  <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-50 animate-ping" />
  <div className="absolute top-3/4 left-1/6 w-3 h-3 bg-indigo-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }} />

  <div className="max-w-7xl mx-auto px-6 relative z-20">
    <h2 className="projects-title text-4xl md:text-5xl font-light text-white text-center mb-16">
      Featured{' '}
      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Projects
      </span>
    </h2>

    <div ref={containerRef} className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          </div>

          <div className="p-4 space-y-3">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                <GithubLogo size={18} weight="light" />
                <span className="text-sm">View Code</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

);
};

export default Projects;