import pandas as pd
import json

# Read the provided CSV file
df = pd.read_csv('C:\\Users\\Carlos Andres\\Downloads\\1_A_catalogo_geotiff.csv', sep=None, engine='python') # sep=None guesses the separator
json_str = df.to_json(orient='records', force_ascii=False, indent=4)
print(json_str[:1000]) # print first 1000 chars to check
with open('json_query.json', 'w', encoding='utf-8') as f:
    f.write(json_str)