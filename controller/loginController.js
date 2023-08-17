import AuthUtils from "../configuration/auth.js";

class LoginController {
  static connect(request, response) {
    const user = {
      id: 1,
    };

    const res = AuthUtils.generateToken(user)
    response.status(201).json({token: res});
  }
}

export { LoginController };
