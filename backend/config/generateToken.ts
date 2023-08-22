import jwt from "jsonwebtoken";

console.log(process.env.monogo_pass);

let secret = String(process.env.JWT_SECRET);

const generateToken = (id: string) => {
  return jwt.sign({ id }, secret, {
    expiresIn: "30d",
  });
};

// modle.exports = generateToken;
export default generateToken;
