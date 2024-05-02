from db.dbutils import generateUuid
import json

#get users from the users.json
def getUsers():
    with open (r"C:\Users\CAT0249\exam\Backend\venv\db\users.json", "r+") as file:
        return json.load(file)


#save users to the users.json
def saveUsers(newUsers):
    with open (r"C:\Users\CAT0249\exam\Backend\venv\db\users.json", "w+") as file:
        file.write(json.dumps(newUsers, indent=4))        
    
  
