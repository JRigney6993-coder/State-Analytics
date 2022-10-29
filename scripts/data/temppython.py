import json
import requests

url = "https://trader-calendar.p.rapidapi.com/api/calendar"

payload = {"country": "USA"}
headers = {
    "content-type": "application/json",
    "X-RapidAPI-Key": "b1f88a03acmsh24d3e29a6c03e16p11bc1bjsnd15dbe1e1dcd",
    "X-RapidAPI-Host": "trader-calendar.p.rapidapi.com"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.__dict__)
with open("scripts/data/test.json") as file:
    testData = json.loads(file)
    json.dump(response.__dict__, testData)


with open("scripts/data/statedata.json") as file:
    statedata = json.load(file)
    for stateName in statedata:
        json.dump()
