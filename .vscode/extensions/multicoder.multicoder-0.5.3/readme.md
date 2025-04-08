# Multicoder Agent

![](https://multicoder.dev/resources/readme/process.png)

Extends **GitHub Copilot Chat** with a structured approach for writing better code

-   Asks clarifying questions to understand requirements
-   Thinks deeply to design a solution
-   Recursively breaks tasks into a step-by-step plan
-   Implements the plan in interactive or autonomous mode

The extension operates as a _chat participant_ add-on to GitHub Copilot Chat. Type @ in the chat input and select **@multicoder** from the participants list.

## Why you should use this extension

Getting good results from LLM code generation requires telling the model exactly what you need. Starting with a detailed prompt that specifies all requirements takes significant time and effort, which is why many developers skip this crucial step.

Multicoder Agent simplifies this process - start with a basic request and let the agent gather all necessary details to create a comprehensive requirements specification. You can then edit the draft or guide the agent on needed improvements.

Next, the agent designs the solution and lets you review and adjust it until it matches your vision. After the planning phase, once you're satisfied with the plan, you can let the agent write all the code.

## How it works

Multicoder Agent requires the **GitHub Copilot Chat** extension (free plan supported). By default, it uses LLMs provided by Copilot, but you can bypass the built-in models and use your own keys to send requests directly to core providers (OpenAI, Anthropic - BYOK). Forward your request to Multicoder Agent by selecting **@multicoder** from the Copilot chat participants list.

## Configuration

The extension works out of the box using Copilot models. Open the settings page with the /options command:

```
@multicoder /options
```

## Feedback

This extension is in early development. Please raise an issue if something doesn't work as expected:

-   [https://github.com/multicoder-ai/vscode-release/issues](https://github.com/multicoder-ai/vscode-release/issues)

Questions or suggestions? Visit:

-   [https://github.com/multicoder-ai/vscode-release/discussions](https://github.com/multicoder-ai/vscode-release/discussions)

## Download

The extension is available on VSCode Marketplace -

-   [Download VS Code extension](https://marketplace.visualstudio.com/items?itemName=multicoder.multicoder)
