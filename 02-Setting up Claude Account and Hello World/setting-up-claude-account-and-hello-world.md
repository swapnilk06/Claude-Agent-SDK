# Setting up Claude Account and Hello World

### Learn about

- Setup [claude](https://platform.claude.com/) account
- Add credits on it
- Build API key
- Running Hello World program

### Start

- Add some credits
- Manage -> API Keys
  -> Create an API Key (for interacting with account)

#### Agent SDK Overview

- [Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)
  - https://code.claude.com/docs/en/agent-sdk/quickstart

Quickstart --> How to do a Quickstart?

- Agent SDK also available for python

### Install SDK

-> 1] `npm init`
-> 2] Change --> `"type": "module"` inside _package.json_
-> 3] `npm install @anthropic-ai/claude-agent-sdk`
-> 4] Create env. variable & paster API ket here

#### Hello world

- `01-hello-world/main.ts`

- run -> `node 01-hello-world/main.ts`

---

#### Any issue occur check

- `claude --version`
- `npx @anthropic-ai/claude-code --version`

- `main.ts`
```ts
import { query } from "@anthropic-ai/claude-agent-sdk"; // entry point to start SDK

// loop on query & they give response
const response = query({
  prompt: "Hey, How are you? My name is Swapnil Kathale",
});

// iterate on response & print that
async function main() {
  for await (const message of response) { 
    if (message.type === 'result' && message.subtype === 'success') {
      console.log(`>`, message.result);
      
    }
  }
}

main();

```

### Revision of working
- 1) import query
- 2) fire query
- 3) when query run something known as --> **agent loop**
- 4) agent what do? 
	- bohot sari chezzo ka analysis karta hai (kya intent hai apka, muje kya karna hai) 
- 5) agar msg ka type *result* hai aur voh ek *success hai* --> toh mere ko final output de do

