"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useState } from "react";

const defaultProps = {
  theme: themes.vsDark,
};

const codeSnippet = `// Welcome to my Portfolio! 🚀
import { NextDeveloper } from 'lanmimilan';
import { AIExpertise } from '@/skills';

function createAmazingWebsite() {
  const mySkills = {
    webDev: ["Next.js", "React", "TS"],
    passion: ["Building web apps", "⛷️", "🍿"]
  };


  return {
    message: "Let's work together!",
    services: ["Web Apps"],
    contact: "Scroll down to connect →"
  };
};`;

// Comment

export default function CodeTyping() {
  const [displayedLines, setDisplayedLines] = useState<string[]>(
    Array(codeSnippet.split("\n").length).fill(""),
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [cursorPosition, setCursorPosition] = useState(0);
  const lines = codeSnippet.split("\n");

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const currentText = lines[currentLine];
    const timeout = setTimeout(() => {
      if (cursorPosition < currentText.length) {
        setDisplayedLines((prev) =>
          prev.map((line, i) =>
            i === currentLine ? currentText.slice(0, cursorPosition + 1) : line,
          ),
        );
        setCursorPosition(cursorPosition + 1);
      } else {
        setCurrentLine(currentLine + 1);
        setCursorPosition(0);
      }
    }, Math.random() * 25);

    return () => clearTimeout(timeout);
  }, [currentLine, cursorPosition, lines]);

  return (
    // <BorderTrailCard1>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-muted w-full overflow-hidden border-b bg-black p-4 font-mono text-xs shadow-lg max-[400px]:text-[0.6rem] sm:text-sm dark:bg-black/40"
    >
      {/* Fake MacOS Window Buttons */}
      <div className="mb-3 flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* Code Highlighting Section */}
      <div className="space-y-1 text-left text-gray-300">
        <AnimatePresence>
          <Highlight
            {...defaultProps}
            code={displayedLines.join("\n")}
            language="tsx"
          >
            {({ tokens, getLineProps, getTokenProps }) => (
              <>
                {tokens.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    {...getLineProps({ line })}
                    className="flex"
                  >
                    <span className="mr-4 w-6 text-right opacity-50 select-none">
                      {i + 1}
                    </span>
                    <span
                      className="relative flex-1"
                      style={{
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        paddingLeft: `${
                          line[0]?.content?.match(/^\s*/)?.[0]?.length ||
                          0 * 0.6
                        }em`,
                        textIndent: `-${
                          line[0]?.content?.match(/^\s*/)?.[0]?.length ||
                          0 * 0.6
                        }em`,
                      }}
                    >
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                      {i === currentLine && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 1, 0] }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1,
                            times: [0, 0.2, 0.8, 1],
                          }}
                          className="absolute inline-block h-[1.2em] w-[2px] bg-white"
                          style={{
                            left: `${cursorPosition * 0.6}em`,
                            top: 0,
                          }}
                        />
                      )}
                    </span>
                  </motion.div>
                ))}
              </>
            )}
          </Highlight>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
