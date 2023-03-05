let users = [];

export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`);

  res.send(users);
};
