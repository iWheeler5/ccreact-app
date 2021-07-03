import ClubsDAO from "../dao/clubsDAO.js"

export default class ClubsController{
    static async apiGetClubs(req, res, next){
        const clubsPerPage = req.query.clubsPerPage ? parseInt(req.query.clubsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if(req.query.postcode){
            filters.postcode = req.query.postcode
        } else if (req.query.city){
            filters.city = req.query.city
        } else if (req.query.name){
            filters.name = req.query.name
        }

        const { clubsList, totalNumClubs } = await ClubsDAO.getClubs({
            filters, 
            page, 
            clubsPerPage
        })

        let response = {
            clubs: clubsList,
            page: page,
            filters: filters,
            entries_per_page: clubsPerPage,
            total_results: totalNumClubs,
        }
        res.json(response)

    }

    static async apiGetClubById(req, res, next) {
        try{
            let id = req.params.id || {}
            let club = await ClubsDAO.getClubByID(id)
            if(!club) {
                res.status(404).json({error: "Not found"})
                return
            }
            res.json(club)

        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({error: e})
        }
    }

    static async apiGetClubCities(req, res, next){
        try{
            let cities = await ClubsDAO.getCities()
            res.json(cities)
        } catch(e){
            console.log(`api, ${e}`)
            res.status(500).json({error:e})
        }

    }
}