import express from "express"
import ClubsCtrl from "./clubs.controller.js"

const router = express.Router()

router.route("/clubs").get(ClubsCtrl.apiGetClubs)

export default router