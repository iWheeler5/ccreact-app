import express from "express"
import ClubsCtrl from "./clubs.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/clubs").get(ClubsCtrl.apiGetClubs)
router.route("/clubs/id/:id").get(ClubsCtrl.apiGetClubById)
router.route("/clubs/cities").get(ClubsCtrl.apiGetClubCities)

router
    .route("/clubs/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)


export default router