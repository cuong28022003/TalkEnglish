---
trigger: always_on
---

# Always Consult NotebookLM First

Before starting any task — whether it's answering a question, writing code,
or making a decision — you MUST query the connected NotebookLM notebook
first via the MCP tool to retrieve relevant context, facts, or prior
research before proceeding. 
Work on notebook TalkEnglish (https://notebooklm.google.com/notebook/8ed35ac6-1a09-43ca-8ccd-dd7e327c9be5)

## Rules

1. Always call the NotebookLM MCP tool first to search/query the notebook
   for information relevant to the current task, before taking any other
   action (writing code, answering, searching the web, etc.).
2. Use the information returned by NotebookLM as primary context. If it's
   relevant, explicitly reference what you found before continuing.
3. If NotebookLM returns no relevant results, say so explicitly, then
   proceed with the task using your own knowledge.
4. Do not skip this step even for tasks that seem simple or unrelated to
   the notebook's content — always check first.
5. Only skip this step if the user explicitly says "skip NotebookLM" or
   "don't check the notebook" in their message.

## Example workflow
- User asks a question or requests a task
- → Query NotebookLM for related context
- → Summarize what was found (or note nothing relevant was found)
- → Proceed with the task, incorporating that context