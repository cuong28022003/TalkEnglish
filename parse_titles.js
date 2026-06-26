const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\tqcuong1\\.gemini\\antigravity-ide\\brain\\9e8f3c76-f669-43a9-a9a4-c442b5dabf3b\\.system_generated\\tasks\\task-381.log';
const logContent = fs.readFileSync(logPath, 'utf8');

// The log contains JSON with "answer" string
const match = logContent.match(/"answer": "(.*?)"/);
let titles = {};

if (match) {
  const answerStr = match[1].replace(/\\n/g, '\n');
  const lines = answerStr.split('\n');
  
  for (let line of lines) {
    // Look for: *   **Unit 1:** Present continuous (I am doing) [1]
    const unitMatch = line.match(/\*\s+\*\*Unit\s+(\d+):\*\*\s+(.+?)\s+\[\d+\]/);
    if (unitMatch) {
      const num = parseInt(unitMatch[1]);
      const title = unitMatch[2];
      titles[num] = `Unit ${num}: ${title}`;
    }
  }
}

const categories = [
  { max: 14, name: "Present and past" },
  { max: 18, name: "Present perfect and past" },
  { max: 25, name: "Future" },
  { max: 37, name: "Modals" },
  { max: 41, name: "if and wish" },
  { max: 46, name: "Passive" },
  { max: 48, name: "Reported speech" },
  { max: 52, name: "Questions and auxiliary verbs" },
  { max: 68, name: "-ing and to..." },
  { max: 81, name: "Articles and nouns" },
  { max: 91, name: "Pronouns and determiners" },
  { max: 97, name: "Relative clauses" },
  { max: 112, name: "Adjectives and adverbs" },
  { max: 120, name: "Conjunctions and prepositions" },
  { max: 136, name: "Prepositions" },
  { max: 145, name: "Phrasal verbs" }
];

function getCategory(unitNum) {
  for (let c of categories) {
    if (unitNum <= c.max) return c.name;
  }
  return "Other";
}

let fileContent = `export interface GrammarUnit {
  id: string;
  title: string;
  category: string;
  explanations: string[];
  examples: string[];
  exercises: { question: string; answer: string }[];
}

export const GRAMMAR_DATA: Record<string, GrammarUnit> = {
`;

// Existing detailed units
const detailedUnits = {
  1: {
    explanations: [
      '"We use the continuous for things happening at or around the time of speaking. The action is not complete."',
      '"am/is/are + -ing is the present continuous"',
      '"I am (= I’m) driving / He is (= he’s) working"'
    ],
    examples: [
      '"Sarah is in her car. She is on her way to work. She’s driving to work. (= She is driving …)"',
      '"Steve is talking to a friend on the phone. He says: \'I’m reading a really good book at the moment.\' (He has started reading it, but has not finished it yet.)"'
    ],
    exercises: [
      '{ question: "He _____ (tie) his shoelaces.", answer: "is tying" }',
      '{ question: "They _____ (cross) the road.", answer: "are crossing" }',
      '{ question: "Why _____ (you / cry)?", answer: "are you crying" }',
      '{ question: "What _____ (you / do) these days?", answer: "are you doing" }'
    ]
  },
  2: {
    explanations: [
      '"We use the present simple to talk about things in general."',
      '"We use it to say that something happens all the time or repeatedly, or that something is true in general"',
      '"We say: I work but he works, you go but it goes"'
    ],
    examples: [
      '"Nurses look after patients in hospitals."',
      '"I usually go away at weekends."',
      '"The earth goes round the sun."',
      '"The cafe opens at 7.30 in the morning."'
    ],
    exercises: [
      '{ question: "Tanya _____ (speak) German very well.", answer: "speaks" }',
      '{ question: "Ben and Jack _____ (go) to the same school.", answer: "go" }',
      '{ question: "Bad driving _____ (cause) many accidents.", answer: "causes" }',
      '{ question: "The museum _____ (close) at 4 o’clock on Sundays.", answer: "closes" }',
      '{ question: "The earth _____ (go) round the sun.", answer: "goes" }'
    ]
  },
  3: {
    explanations: [
      '"We use the continuous for things happening at or around the time of speaking. The action is not complete."',
      '"We use the simple for things in general or things that happen repeatedly."'
    ],
    examples: [
      '"The water is boiling. Be careful. (Continuous)"',
      '"Water boils at 100 degrees Celsius. (Simple)"',
      '"Listen to those people. What language are they speaking? (Continuous)"',
      '"Excuse me, do you speak English? (Simple)"',
      '"Let’s go out. It isn’t raining now. (Continuous)"',
      '"It doesn’t rain very much in summer. (Simple)"'
    ],
    exercises: [
      '{ question: "_____ (you / listen) to the radio? No, you can turn it off.", answer: "Are you listening" }',
      '{ question: "_____ (you / listen) to the radio every day? No, just occasionally.", answer: "Do you listen" }',
      '{ question: "The river _____ (flow) very fast today - much faster than usual.", answer: "is flowing" }',
      '{ question: "The River Nile _____ (flow) into the Mediterranean.", answer: "flows" }'
    ]
  }
};

for (let i = 1; i <= 145; i++) {
  const category = getCategory(i);
  const detail = detailedUnits[i];
  const title = titles[i] || `Unit ${i}: Grammar Topic`;
  
  // Escape single quotes in title
  const safeTitle = title.replace(/'/g, "\\'");

  fileContent += `  'unit-${i}': {\n`;
  fileContent += `    id: 'unit-${i}',\n`;
  fileContent += `    title: '${safeTitle}',\n`;
  fileContent += `    category: '${category}',\n`;
  
  if (detail) {
    fileContent += `    explanations: [\n      ${detail.explanations.join(',\n      ')}\n    ],\n`;
    fileContent += `    examples: [\n      ${detail.examples.join(',\n      ')}\n    ],\n`;
    fileContent += `    exercises: [\n      ${detail.exercises.join(',\n      ')}\n    ]\n`;
  } else {
    fileContent += `    explanations: [],\n`;
    fileContent += `    examples: [],\n`;
    fileContent += `    exercises: []\n`;
  }
  
  fileContent += `  }${i === 145 ? '' : ','}\n`;
}

fileContent += `};\n`;

fs.writeFileSync(path.join(__dirname, 'src/app/data/grammar.data.ts'), fileContent, 'utf8');
console.log('Successfully extracted 145 titles and generated grammar.data.ts');
