let user = {
  hobby: "Calligraphy",
  astrologicalSign: "Aries",
  occupation: "Engineer",
  firstName: "Buillaume",
  lastName: "Johns",
  location: "Netherlands",
  favoriteSport: "Hockey",

  logWelcomeUser: function logWelcomeUser(welcomeString) {
    console.log(
      welcomeString +
        ", " +
        this.firstName +
        ". Your occupation is: " +
        this.occupation
    );
  },
};

const bindLogWelcomeUser = user.logWelcomeUser.bind(user);

bindLogWelcomeUser("Welcome");
bindLogWelcomeUser("Greetings");
