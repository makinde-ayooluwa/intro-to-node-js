import { Users } from "../models/userModel.js";

const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(400).json({
                message: "All fields are important"
            });
        }
        const existing = await Users.findOne({ email: email.toLowerCase() });
        if (!existing) {
            const user = await Users.create({
                email: email.toLowerCase(),
                fullname: fullname,
                password: password,
                details: [
                    details
                ]
            });
            res.status(200).json({
                message: "User registered successfully",
                user:
                    { _id: user._id, email: user.email, fullname: user.fullname, password: user.password }
            });
        } else {
            res.status(400).json({ message: "User exists before" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error });
        console.log(error);
    }
}
export { registerUser };