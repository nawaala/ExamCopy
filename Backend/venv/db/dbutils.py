import uuid

#generates a unique user id
def generateUuid():
    return uuid.uuid4().hex