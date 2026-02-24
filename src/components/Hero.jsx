import { ChevronDown, Play, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12">

      {/* mouse-following glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(96,165,250,0.12), transparent 35%)`,
          mixBlendMode: "screen",
        }}
      />

      {/* permanent glowing blobs (top-left / bottom-right) */}
      <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-20 -right-16 w-96 h-96 rounded-full bg-cyan-400/8 blur-3xl animate-pulse z-0" />

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight fade-up">
            Code Faster. Build
            <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Better.</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto lg:mx-0 fade-up delay-200">
            Accelerate your development workflow with intelligent code completion, automated testing, and smart debugging. Ship production-ready code 10x faster.
          </p>

          <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 fade-up delay-350">
            <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md btn-transition">
              <Play className="w-4 h-4" />
              Start Coding Free
            </button>
            <button className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-md border border-white/10 btn-transition">
              Watch Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Floating code card with sample code (enlarged) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative z-20 w-full max-w-2xl bg-white/5 backdrop-blur-xl rounded-2xl p-0 shadow-2xl border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-gray-300">CodeFlow AI</span>
            </div>

            <div className="p-4 grid grid-cols-1 gap-4">
              <div className="bg-slate-900 rounded-md p-4 text-sm font-mono text-green-300 overflow-auto max-h-72">
                <pre className="whitespace-pre-wrap">{`import Button from './Button'

export default function App(){
  return (
    <div>
      <Button onClick={() => console.log('clicked')}>Run</Button>
    </div>
  )
}`}</pre>
              </div>

              {/* small file tabs + toolbar */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <div className="px-3 py-1 bg-white/6 rounded-md text-xs">App.jsx</div>
                  <div className="px-3 py-1 bg-white/6 rounded-md text-xs">Header.jsx</div>
                  <div className="px-3 py-1 bg-white/6 rounded-md text-xs">utils.js</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 rounded-md bg-white/6 text-sm">Run</button>
                  <button className="px-3 py-1 rounded-md bg-blue-500 text-white">Test</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* stats removed per request */}
    </section>
  );
}
