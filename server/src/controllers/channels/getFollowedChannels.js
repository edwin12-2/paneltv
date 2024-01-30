import User from "../../models/User.js";

export const getFollowedChannels = async (req, res) => {
    try {
        const { userID } = req.user;

        const { followedChannels } = await User.findById(userID, { 
            followedChannels: 1,
        });

        return res.status(200).json({
            followedChannels,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send("' Error occurred when fetching followed channels");
    }
};