from langchain.llms import OpenAI

def ask_ai(prompt: str) -> str:
    # Deprecated: OpenAI instantiation and direct execution are deprecated in LangChain.
    model = OpenAI(model_name="gpt-3.5-turbo", temperature=0.7)
    return model(prompt)

if __name__ == "__main__":
    response = ask_ai("Explain advanced agentic systems.")
    print(response)
