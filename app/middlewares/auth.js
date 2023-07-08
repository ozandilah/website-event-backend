const { UnauthenticatedErrror, UnauthorizedError } = require("../errors");
const { isTokenValid } = require("../utils/jwt");
const authenticateUser = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }
    if (!token) {
      throw new UnauthenticatedError("Invalid authentication!");
    }

    const payload = isTokenValid({ token });

    // Attach the user and their permissions to the req object
    req.user = {
      email: payload.email,
      role: payload.role,
      name: payload.name,
      organizer: payload.organizer,
      id: payload.userId,
    };

    next();
  } catch (error) {
    next(error);
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route!");
    }
    next();
  };
};

module.exports = { authenticateUser, authorizeRoles };
