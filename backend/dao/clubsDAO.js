import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let clubs

export default class clubsDAO{
    static async injectDB(conn){
        if(clubs){
            return
        }
        try{
            clubs = await conn.db(process.env.CLUBCULTURE_NS).collection("clubs")
        }catch(e){
            console.error(
                `Unable to establish a collection handle in clubsDAO: ${e}`,
            )
        }
    }

    static async getClubs({
        filters = null,
        page = 0,
        clubsPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if("name" in filters){
                query = {$text: {$search: filters["name"]}}
            }else if("postcode" in filters){
                query = {"address.postcode": {$eq: filters["postcode"]}}
            }else if("city" in filters){
                query = {"address.city": {$eq: filters["city"]}}
            }
        }

        let cursor

        try{
            cursor = await clubs.find(query)
        } catch(e){
            console.error(`unable to issue find command, ${e}`)
            return {clubsList: [], totalNumCulbs: 0}
        }

        const displayCursor = cursor.limit(clubsPerPage).skip(clubsPerPage * page)

        try{
            const clubsList = await displayCursor.toArray()
            //const clubsList = await displayCursor.ToArray()
            const totalNumClubs = await clubs.countDocuments(query)
            
            return {clubsList, totalNumClubs}
        }catch (e){
            console.error(`Unable to convert cursor to array or problem counting documents, \n${e}`)
            return {clubsList: [], totalNumCulbs: 0}
        }
    }
} 