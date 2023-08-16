import jwt from "jsonwebtoken";

class AuthUtils {
  static generateToken(user) {
    const payload = {
      id: user.id,
      // Autres données d'utilisateur que vous souhaitez stocker dans le JWT
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
  }

  static authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
      return res.sendStatus(401);
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
          console.log('log: ',user);
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  }

  static authorizeRole(role) {
    return (req, res, next) => {
      if (req.user && req.user.role === role) {
        next();
      } else {
        res.sendStatus(403);
      }
    };
  }
}

export default AuthUtils;