import React from "react";
import SkillSingleSkillBox from "./SkillSingleSkillBox";

const aiMlSkillsData = [
  {
    languageName: "Python",
    link: "/images/skills/python.png",
  },
  {
    languageName: "Multi-Agent Systems",
    link: "/images/skills/multi-agent-systems.png",
  },
  {
    languageName: "RAG",
    link: "/images/skills/rag.png",
  },
  {
    languageName: "Vector Search",
    link: "/images/skills/vector-search.png",
  },
  {
    languageName: "MCP",
    link: "/images/skills/mcp.svg",
  },
  {
    languageName: "Function Calling",
    link: "/images/skills/function-calling.png",
  },
  {
    languageName: "LangChain",
    link: "/images/skills/langchain.svg",
  },
  {
    languageName: "OpenAI",
    link: "/images/skills/openai.png",
  },
  {
    languageName: "Prompt Engineering",
    link: "/images/skills/prompt-engineering.png",
  },
  {
    languageName: "LLM Evaluation",
    link: "/images/skills/llm-evaluation.png",
  },
  {
    languageName: "Hugging Face",
    link: "/images/skills/hugging-face.svg",
  },
  {
    languageName: "Flask",
    link: "/images/skills/flask.png",
  },
  {
    languageName: "Scikit learn",
    link: "/images/skills/scikit-learn.svg",
  },
  {
    languageName: "Ollama",
    link: "/images/skills/ollama.svg",
  },
  {
    languageName: "Llama 3.2",
    link: "/images/skills/llama-3-2.jpg",
  },
  {
    languageName: "Rasa",
    link: "/images/skills/rasa.webp",
  },
  {
    languageName: "UIPath Studio",
    link: "/images/skills/uipath-studio.png",
  },
];
function SkillAiMl() {
  return (
    <div className="flex flex-col  bg-[rgba(0,0,22,0.4)] rounded-2xl">
      {/* <div
        className="border-[#2B2B2B] border-[1.5px]  w-min rounded-3xl px-5 py-2 font-medium"
        onClick={() => {}}
      > */}
      <p className="text-sm text-center mx-5 my-3 font-semibold font-inter-sans text-nowrap pl-1.5 text-[#ffb703]">
        AI ML
      </p>
      {/* </div> */}
      {/* listing of skills */}
      <div className=" bg-opacity-50 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center place-items-center">
          {aiMlSkillsData.map((data, index) => {
            return (
              <SkillSingleSkillBox
                key={index}
                linkForLanguageLogo={data.link}
                programmingLanguage={data.languageName}
              />
            );
          })}
          {/* <SkillSingleSkillBox />
          <SkillSingleSkillBox />
          <SkillSingleSkillBox />
          <SkillSingleSkillBox />
          <SkillSingleSkillBox /> */}
        </div>
      </div>
    </div>
  );
}

export default SkillAiMl;
