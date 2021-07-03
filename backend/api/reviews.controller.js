import ReviewsDAO from "../dao/reviewsDAO.js"

export default class ReviewsController{
    static async apiPostReview(req, res, next){
        try{
            const clubId = req.body.club_id
            const review = req.body.text
            const overallscore = req.body.overallscore
            const lineupscore = req.body.lineupscore
            const atmospherescore = req.body.atmospherescore
            const soundsystemscore = req.body.soundsystemscore
            const pricesscore = req.body.pricesscore
            const userInfo = {
                name: req.body.username,
                _id: req.body.user_id
            }
            const date = new Date()

            const ReviewResponse = await ReviewsDAO.addReview(
                clubId,
                review,
                overallscore,
                lineupscore,
                atmospherescore,
                soundsystemscore,
                pricesscore,
                userInfo,
                date
            )
            res.json({ status: "success"})
        }
        catch(e){
            res.status(500).json({error:e.message})
        }
    }

    static async apiUpdateReview(req, res, next){
        try{
            const reviewId = req.body.review_id
            const text = req.body.text
            const overallscore = req.body.overallscore
            const lineupscore = req.body.lineupscore
            const atmospherescore = req.body.atmospherescore
            const soundsystemscore = req.body.soundsystemscore
            const pricesscore = req.body.pricesscore
            const date = new Date()

            const reviewResponse = await ReviewsDAO.updateReview(
                reviewId,
                req.body.user_id,
                text,
                overallscore,
                lineupscore,
                atmospherescore,
                soundsystemscore,
                pricesscore,
                date,

            )
            

            var {error} = reviewResponse
            if (error) {
                res.status(400).json({error})
            }

            if (reviewResponse.modifiedCount === 0){
                throw new Error(
                    "unable to update review - user may not be original poster",
                )
            }
            
            res.json({status: "success"})

        }catch(e){
            res.status(500).json({error: e.message})
        }
    }

    static async apiDeleteReview(req, res, next){
        try{
            const reviewId = req.query.id
            const userId = req.body.user_id
            console.log(reviewId)
            
            const reviewResponse = await ReviewsDAO.deleteReview(
                reviewId,
                userId
            )

            res.json({status: "success"})
        }   
        catch(e){
            res.status(500).json({error: e.message})
        }   

    }
}