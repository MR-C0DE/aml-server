import AuthUtils from "../configuration/auth.js";

class LoginController {
  static connect(request, response) {
    const user = {
      id: 1,
    };

    response.send(AuthUtils.generateToken(user));
  }
}

export { LoginController };
