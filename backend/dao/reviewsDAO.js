import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let reviews

export default class ReviewsDAO{
    static async injectDB(conn){
        if(reviews){
            return
        }
        try{
            reviews = await conn.db(process.env.CLUBCULTURE_NS).collection("reviews")

        }catch (e) {
            console.error(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async addReview(clubId, review, overallscore, lineupscore, atmospherescore, soundsystemscore, pricesscore, user, date){
        try{
            const reviewDoc = {
                username: user.name,
                user_id: user._id,
                date: date,
                text: review,
                overallscore: overallscore,
                lineupscore: lineupscore,
                atmospherescore: atmospherescore,
                soundsystemscore: soundsystemscore,
                pricesscore: pricesscore,
                club_id: ObjectId(clubId)}
            
            return await reviews.insertOne(reviewDoc)
        }catch(e){
            console.error(`Unable to post review: ${e}`)
            return {error: e}
        }


    }

    static async updateReview(reviewId, userId, text, overallscore, lineupscore, atmospherescore, soundsystemscore, pricesscore,date){
        try{
            const updateResponse = await reviews.updateOne(
                { user_id: userId, _id: ObjectId(reviewId) },
                { $set: { 
                    date: date,
                    text: text,
                    overallscore: overallscore,
                    lineupscore: lineupscore,
                    atmospherescore: atmospherescore,
                    soundsystemscore: soundsystemscore,
                    pricesscore: pricesscore
                } }
            )
            return updateResponse

        } catch(e){
            console.error(`Unable to update review: ${e}`)
            return {error: e}
        }
    }

    static async deleteReview(reviewId, userId){
        try{
            const deleteResponse = await reviews.deleteOne({
                _id: ObjectId(reviewId),
                user_id: userId,
            })

            return deleteResponse
        } catch (e){
            console.error(`unable to delete review: ${e}`)
            return {error: e}
        }
    }

}