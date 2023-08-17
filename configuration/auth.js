import jwt from "jsonwebtoken";

class AuthUtils {
  static generateToken(user) {
    const payload = {
      ...user
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
  }

  static authenticateToken(request, response, next) {
    const authHeader = request.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
      return response.sendStatus(401);
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
          console.log('log: ',user);
        return response.sendStatus(403);
      }
      console.log('Utilisateur: ',user);
      request.user = user;
      next();
    });
  }

  static authorizeRole(role) {
    return (request, response, next) => {
      if (request.user && request.user.role === role) {
        next();
      } else {
        response.sendStatus(403);
      }
    };
  }
}

export default AuthUtils;