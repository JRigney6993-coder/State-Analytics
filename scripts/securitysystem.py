from cryptography.fernet import Fernet

key = open("scripts/data-management/data/pass.key", "rb").read()
slogan = "Hello!! Welcome to AIM!!".encode()
a = Fernet(key)
coded_slogan = a.encrypt(slogan)
print(coded_slogan)