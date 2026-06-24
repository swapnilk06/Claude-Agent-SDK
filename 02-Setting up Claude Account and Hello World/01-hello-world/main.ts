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
