import express from "express"
import ClubsCtrl from "./clubs.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/clubs").get(ClubsCtrl.apiGetClubs)

router
    .route("/clubs/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)


export default router