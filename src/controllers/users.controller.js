const { usersDataRepository } = require("../repositorys/user.data.repository");
const { v4: uuidv4 } = require('uuid');

class usersController{

    getAllUsers(request, response){
        return response.json(usersDataRepository.usersData);
    }

    getUserById(request,response){

        let resultJson = [];

        const { id } = request.params;

        const getAllUsersJsonList = usersDataRepository.usersData;
        
        resultJson = getAllUsersJsonList.filter((item) =>item.id == id);

        return response.json(resultJson);
    }

    putNewUser(request,response){
         
        const { name } = request.body;

        const newUser = {
            id: uuidv4(),
            name,
            date_created: new Date().toISOString(),
            image_link: 'https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg'
        }

        usersDataRepository.usersData.push(newUser);
        
        return response.json(newUser);
    }

    deleteUser(request, response) {
        const { id } = request.params;
    
        const index = usersDataRepository.usersData.findIndex(item => item.id === id);
    
        if (index === -1) {
          return response.status(404).json({ error: 'User not found' });
        }
    
        usersDataRepository.usersData.splice(index, 1);
    
        return response.json({ message: 'User deleted successfully' });
      }
    
      patchUser(request, response) {
        const { id } = request.params;
        const { name } = request.body;
    
        const user = usersDataRepository.usersData.find(item => item.id === id);
    
        if (!user) {
          return response.status(404).json({ error: 'User not found' });
        }
    
        user.name = name || user.name;
    
        return response.json(user);
      }

}

const userscontroller = new usersController

module.exports = { userscontroller };