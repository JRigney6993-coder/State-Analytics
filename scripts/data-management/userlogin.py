import secrets,bcrypt,json
from createperson import createAgent
from cryptography.fernet import Fernet

def hashedPassword(password):
    return bcrypt.hashpw(password, bcrypt.gensalt())

# Mid end can call this when they add a new agent.
def createUser(firstName, lastName, accessLevel, password):
    """Creates a user with the given username and password,
    and generates a user token for the user/encrypts password."""
    if len(password) >= 14:
        token = secrets.token_urlsafe(16)
        hashed = hashedPassword(bytes(password, "utf-8"))
        check = createAgent(firstName, lastName, hashed, accessLevel, token)
    
    # returns will tell if the user had a password longer than 14 characters or a possible error occured with saving data.
        return check
    else:
        return False

def loginUser(email, password):
    """Logs in a user with the given email and password, and compares their password to the one stored in the json file."""
    try:
        with open("scripts/data-management/data/agents.json", "r") as file:
            fileData = json.load(file)
            for i in range(fileData["agentNum"]):
                if fileData["agent"][i]["email"] == email:
                    storedPassword = fileData["agent"][i]["password"].encode("utf-8")
                    if bcrypt.hashpw(bytes(password, "utf-8"), storedPassword) == storedPassword:
                        token = Fernet(open("scripts/data-management/data/pass.key", "rb").read()).encrypt(token.encode()).decode("utf-8")
                        token = Fernet(open("scripts/data-management/data/pass.key", "rb").read()).decrypt()
                        decoded_slogan = b.decrypt(coded_slogan)
                        print(decoded_slogan)
                        return fileData["agent"][i]["token"]
        
    # returns false if password or email is incorrect
                else:
                    return False
    except:
        return False

print(loginUser("jakerigney@fbi.gov", "verysecurypassword"))
