import json
import requests
import random
import os
import secrets
from cryptography.fernet import Fernet

def createPerson():
    """Creates a new civilian"""
    firstName = random.choice(open("scripts/data-management/txts/firstNames.txt","r").read().split())
    lastName = random.choice(open("scripts/data-management/txts/lastNames.txt","r").read().split())
    person = {
        "firstName": firstName,
        "lastName": lastName,
        "email": firstName + lastName + "@" + random.choice(["gmail.com", "yahoo.com", "hotmail.com"]),
        "phoneNumber": random.randint(1000000000, 99999999999),
        "address": "Very real address Dr.",
        "state": random.choice(open("scripts/data-management/txts/states.txt","r").read().split()),
        "job": random.choice(open("scripts/data-management/txts/jobs.txt","r").read().split()),
        "money": random.randint(100, 2000)
    }

    # append person to people.json file
    with open("scripts/data-management/data/people.json", 'r+') as file:
            fileData = json.load(file)
            fileData["person"].append(person)
            fileData["personNum"] += 1
            file.seek(0)
            json.dump(fileData, file, indent=4)

def createAgent(firstName, lastName, password, accessLevel, token):
    """Creates a new fbi agent"""
    try:
        if accessLevel >= 4: accessLevel = 3
        password = password.decode("utf-8")
        token = Fernet(open("scripts/data-management/data/pass.key", "rb").read()).encrypt(token.encode()).decode("utf-8")
        person = {
            "firstName": firstName,
            "lastName": lastName,
            "accessLevel": accessLevel,
            "email": firstName + lastName + "@fbi.gov",
            "token": token,
            "password": password,
            "arrests": 0,
            "intelligence": float(random.randrange(100,300))/100 # Multiplies the chance that the agent solves a case.
        }

        # append person to people.json file
        with open("scripts/data-management/data/agents.json", 'r+') as file:
                fileData = json.load(file)
                fileData["agent"].append(person)
                fileData["agentNum"] += 1
                file.seek(0)
                file.truncate()
                json.dump(fileData, file, indent=4)

    # Check for error
        return True
    except:
        return False

def randomAgents(ammount):
    """Randomly creates a number of agents"""
    try:
        numAgents = int(ammount)
        for i in range(numAgents):
            createAgent(random.choice(open("scripts/data-management/txts/firstNames.txt","r").read().split()), random.choice(open("scripts/data-management/txts/lastNames.txt","r").read().split()), "E234A6#32", random.randint(1,3),secrets.token_urlsafe(16))
        return True
    except:
        return False

