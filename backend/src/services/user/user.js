const addLocalUser = (User) => (body) => {
  return User.create({
    nameFirst: body.nameFirst,
    nameLast: body.nameLast,
    nameMiddle: body.nameMiddle,
    email: body.email,
    password: body.password,
    dateOfBirth: body.dateOfBirth,
    phoneNumber: body.phoneNumber,
    addresses: body.addresses,
    gender: body.gender,
    source: "local",
    role: "user",
    profilePicture: `https://avatar.oxro.io/avatar.svg?fontSize=200&name=${body.nameFirst} ${body.nameLast}`,
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
