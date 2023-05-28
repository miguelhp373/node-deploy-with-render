const { v4: uuidv4 } = require('uuid');

const usersDataRepository = {
  usersData: [
    {
      id: uuidv4(),
      name: 'John Doe',
      date_created: new Date().toISOString(),
      image_link: 'https://source.unsplash.com/random/200x200/?person',
    },
    {
      id: uuidv4(),
      name: 'Jane Smith',
      date_created: new Date().toISOString(),
      image_link: 'https://source.unsplash.com/random/200x200/?face',
    },
    {
      id: uuidv4(),
      name: 'Michael Johnson',
      date_created: new Date().toISOString(),
      image_link: 'https://source.unsplash.com/random/200x200/?profile',
    },
    {
      id: uuidv4(),
      name: 'Emily Brown',
      date_created: new Date().toISOString(),
      image_link: 'https://source.unsplash.com/random/200x200/?woman',
    },
    {
      id: uuidv4(),
      name: 'Daniel Davis',
      date_created: new Date().toISOString(),
      image_link: 'https://source.unsplash.com/random/200x200/?man',
    },
    {
      id: uuidv4(),
      name: 'Olivia Wilson',
      date_created: new Date().toISOString(),
      image_link: 'https://source.unsplash.com/random/200x200/?girl',
    },
  ],
};

module.exports = { usersDataRepository }
