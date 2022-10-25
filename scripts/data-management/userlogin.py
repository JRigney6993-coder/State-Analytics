import secrets,bcrypt,keyring

# https://stackoverflow.com/questions/7014953/i-need-to-securely-store-a-username-and-password-in-python-what-are-my-options

def hashedPassword(password):
    return bcrypt.hashpw(password, bcrypt.gensalt())

def createUser(username, password):
    """Creates a user with the given username and password,
    and generates a user token for the user."""
    if len(password) >= 7:
        token = secrets.token_urlsafe(16)
        #salt = bcrypt.gensalt()
        #hashed = bcrypt.hashpw(b"password", salt)
        hashed = hashedPassword(password)
        keyring.set_password("accounts", username, hashed)
        keyring.set_password("accounts", hashed, token)
        return True
    else:
        return False

def deleteUser(username):
    keyring.delete_password("accounts", username)

def checkPassword(username, password):
    """Checks if password is correct then returns the 
    token to be used for user authentication."""
    hashed = hashedPassword(password)
    if bcrypt.checkpw(keyring.get_password("accounts", username), hash) == hashed:
        return keyring.get_password("accounts", password)
    else:
        return False

#deleteUser("coolUsername")
#createUser("test123", "test123")
print(checkPassword("test123", u'test123'))