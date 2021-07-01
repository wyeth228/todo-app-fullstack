export default {
  methods: {
    loginValid(name) {
      if (name.length < 2 || name.length > 14) {
        return false;
      }

      return /^[a-z ,.'-]+$/i.test(name);
    },
    passwordValid(password) {
      return password.length >= 5 && password.length <= 20;
    },
  },
};
