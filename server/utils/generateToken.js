import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

 return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      secure: true, // ✅ required on HTTPS
      sameSite: "None", // ✅ must be "None" for cross-site
      maxAge: 7 * 24 * 60 * 60 * 1000, // Optional: cookie expiry (7 days here)
    })
    .json({
      success: true,
      message,
      user,
    });
};
