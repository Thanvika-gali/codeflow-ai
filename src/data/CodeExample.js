

export const codeExample = {
    "App.jsx": `
    import { useState } from "react";
    import { CodeFlow } from "codeflow/ai";

    function App(){
    const [code, setCode] = useState("");

    const handleAICompletion = async () => {
        const suggestion = await CodeFlow.Completion(code);
        setCode(suggestion);
        };

        return (
        <div className="app">
        <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion})
            />
        </div>
        );
        }
        `,

        "Hero.jsx": `
    import { useState } from "react";
    import { CodeFlow } from "codeflow/ai";

    function App(){
    const [code, setCode] = useState("");

    const handleAICompletion = async () => {
        const suggestion = await CodeFlow.Completion(code);
        setCode(suggestion);
        };
        
        return (
        <div className="app">
        <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion})
            />
        </div>
        );
        }
        `,

        "Navbar.jsx": `
    import { useState } from "react";
    import { CodeFlow } from "codeflow/ai";

    function App(){
    const [code, setCode] = useState("");

    const handleAICompletion = async () => {
        const suggestion = await CodeFlow.Completion(code);
        setCode(suggestion);
        };
        
        return (
        <div className="app">
        <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion})
            />
        </div>
        );
        }
        `
};