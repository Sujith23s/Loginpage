const fs = require("fs");
const path = require("path");
//change

exports.getUser = (email) => {
    const bufferData = fs.readFileSync(path.join(__dirname, "..", "data", "Users.json"));
    const jsonData = JSON.parse(bufferData);
    //console.log(jsonData);
    const filteredUser = jsonData.filter((user) => {
        //console.log(user.email, email);
        //console.log(user.email == email)
        return user.email == email;
    })
    //console.log(filteredUser);

    if(filteredUser.length > 0){
          
        return filteredUser[0];
    }else{
        return null;
     }
}