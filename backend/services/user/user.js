const addLocalUser = (User) => (body) => {
  return User.create({
    nameFirst: body.nameFirst,
    nameLast: body.nameLast,
    nameMiddle: body.nameMiddle,
    email: body.email,
    password: body.password,
    source: "local",
  });
};

const getUserByEmail =
  (User) =>
  async ({ email }) => {
    return await User.findOne({ email });
  };

module.exports = (User) => {
  return {
    addLocalUser: addLocalUser(User),
    getUserByEmail: getUserByEmail(User),
  };
};
