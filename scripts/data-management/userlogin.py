import secrets,bcrypt
import token
from createperson import createAgent

def hashedPassword(password):
    return bcrypt.hashpw(password, bcrypt.gensalt())

# Mid end can call this when they add a new agent.
def createUser(firstName, lastName, accessLevel, password):
    """Creates a user with the given username and password,
    and generates a user token for the user/encrypts password."""
    if len(password) >= 14:
        token = secrets.token_urlsafe(16)
        hashed = hashedPassword(password)
        check = createAgent(firstName, lastName, hashed, accessLevel, token)
    
    # returns will tell if the user had a password longer than 14 characters or a possible error occured with saving data.
        return check
    else:
        return False

createUser("jake", "Test", 2, b"nnfiesfuise3832")