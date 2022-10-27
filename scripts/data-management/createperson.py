import json
import requests
import random

# Create a person object


def createPerson():
    person = {
        "firstName": random.choice(open("../data-management/txts/firstNames.txt").readline().split()),
        "lastName": random.choice(open("../data-management/txts/lastNames.txt").readline().split()),
        "email": person["firstName"] + person["lastName"] + "@" + random.choice(["gmail.com", "yahoo.com", "hotmail.com"]),
        "phoneNumber": random.randint(1000000000, 99999999999),
        "address": "Very real address Dr.",
        "state": random.choice(open("../data-management/txts/states.txt").readline().split()),
        "job": random.choice(open("../data-management/txts/jobs.txt").readline().split()),
        "money": random.randint(100, 2000)

    }

    # append person to people.json file
    with open("../data-management/data/people.json", "a") as f:
        f.write(json.dumps(1, indent=4) + "\n")


createPerson()


def createAgent():
    agent = {
        "firstName": random.choice(open("firstNames.txt").readline().split()),
        "lastName": random.choice(open("lastNames.txt").readline().split()),
        "email": agent["firstName"] + agent["lastName"] + "@" + random.choice(["gmail.com", "yahoo.com", "hotmail.com"]),
        "phoneNumber": random.randint(1000000000, 99999999999)
    }
