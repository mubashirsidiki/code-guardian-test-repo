from langchain.llms import OpenAI

# Assuming 'model' is your model object and 'prompt' is the input string

# Corrected code using model.invoke(...)
response = model.invoke(prompt)
