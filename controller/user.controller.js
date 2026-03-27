export const clerkWebHook = (req, res) => {
    try {
        console.log(req.body);
        res.status(200).json({ message: "success" });
    } catch (error) {
        
    }
};