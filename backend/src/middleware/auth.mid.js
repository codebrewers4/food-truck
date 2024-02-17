// Import the default export from 'jsonwebtoken' as this module seems to be CommonJS
import jwt from 'jsonwebtoken';
import { UNAUTHORIZED } from '../constants/httpStatus.js';

export default (req, res, next) => {
  const token = req.headers.access_token;

  // Check if token exists and handle authentication failure
  if (!token) {
    return res.status(UNAUTHORIZED).json({ message: 'Unauthorized: Missing access token' });
  }

  try {
    // Verify the token with the default export from 'jsonwebtoken'
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded payload to the request object
    next(); // Allow authenticated request to proceed
  } catch (error) {
    // Handle token validation errors gracefully
    res.status(UNAUTHORIZED).json({ message: 'Unauthorized: Invalid token' });
  }
};
