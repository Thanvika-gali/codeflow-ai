

const SAMPLE = [
  {
    id: 1,
    title: "AI Code Completion",
    desc: "Context-aware suggestions and snippets while you type.",
  },
  {
    id: 2,
    title: "Automated Testing",
    desc: "Generate and run tests automatically with one click.",
  },
  {
    id: 3,
    title: "Smart Debugging",
    desc: "AI-guided diagnostics to find issues faster.",
  },
  {
    id: 4,
    title: "Live Previews",
    desc: "Instant visual feedback for your UI changes.",
  },
  {
    id: 5,
    title: "Collaboration",
    desc: "Share workspaces and comment in real time.",
  },
];

const SNIPPETS = {
  1: `// AI completion suggests the rest
function greet(name) {
  return 'Hello, ' + name
}
// Suggestion: add null-checks, formatters...`,
  2: `// Automated test example
import { render } from '@testing-library/react'
test('renders button', () => {
  const { getByText } = render(<button>Run</button>)
  expect(getByText('Run')).toBeTruthy()
})`,
  3: `// Smart debug hint
// Possible null pointer in MyComponent -> check props.data before access`,
  4: `// Live preview snapshot
<Header title="Welcome" />
// edits appear instantly in preview`,
  5: `// Collaboration
// Share this link to invite teammates: https://codeflow.app/s/abc123`,
};

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Features</h2>

        <div className="space-y-12">
          {SAMPLE.map((f) => (
            <div
              key={f.id}
              className={`flex flex-col md:flex-row items-center gap-6 py-6 md:py-8 ${
                f.id % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold">{f.title}</h3>
                <p className="mt-3 text-gray-300 max-w-xl">{f.desc}</p>

                <div className="mt-4 flex items-center gap-3">
                  <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white btn-transition">Try it</button>
                  <button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white border border-white/8">Docs</button>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative z-10 w-full bg-white/5 dark:bg-gray-200/10 backdrop-blur-xl rounded-2xl p-0 shadow-2xl border border-white/10 dark:border-gray-300/20 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-sm text-gray-300">{f.title}</span>
                  </div>

                  <div className="p-4 bg-slate-900 text-sm md:text-base font-mono text-green-300 max-h-72 overflow-auto">
                    <pre className="whitespace-pre-wrap">{SNIPPETS[f.id]}</pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}