import requests

URL = "https://rickandmortyapi.com/api/character"

response = requests.get(URL)
character_list = response.json().get("results")


print(f"character: {character_list[0].get('name')}")

for x in range(0, 5):
    print(character_list[x].get("name"))