import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {getMyFriends, getRecommendedUsers,sendFriendRequest,acceptFriendRequest,getFriendRequests,getOutgoingFriendReqs,removeFriendRequest,removeFriend,} from "../controller/user.controller.js";

const router = express.Router();

// apply auth middleware to all routes
router.use(protectRoute);

router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends);

router.post("/friend-request/:id",sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests",getFriendRequests);

router.get("/outgoing-friend-requests",getOutgoingFriendReqs);

router.delete("/remove-friend/:friendId",removeFriend);

router.delete("/remove-friend-request/:userId", removeFriendRequest);




export default router;