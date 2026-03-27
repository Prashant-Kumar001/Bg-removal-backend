import { Webhook } from "svix";
import User from "../models/user.model.js";
export const clerkWebHook = async (req, res) => {
  try {
    const wh = new Webhook(process.env.SIGNIN_SECRET);
    await wh.verify(req.body, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;
    switch (type) {
      case "user.created":
        const newUser = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          LastName: data.last_name,
          photo: data.image_url,
        };
        await User.create(newUser);
        res.status(200).json({ message: "success" });
        break;
      case "user.updated":
        const updateUser = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          LastName: data.last_name,
          photo: data.image_url,
        };
        await User.findOneAndUpdate({ clerkId: data.id }, updateUser);
        res.status(200).json({ message: "success" });
        break;
      case "user.deleted":
        await User.findOneAndDelete({ clerkId: data.id });
        res.status(200).json({ message: "success" });
        break;
      default:
        res.status(404).json({ message: "not event found" });
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error", success: false });
  }
};
