import http from "../http-common";

class ClubCultureDataService {
  getAll(page = 0) {
    return http.get(`clubs?page=${page}`);
  }

  get(id) {
    return http.get(`club?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`clubs?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return http.post("/clubs/review", data);
  }

  updateReview(data) {
    return http.put("/clubs/review", data);
  }

  deleteReview(id) {
    return http.delete(`/clubs/review?id=${id}`);
  }

  getCities(id) {
    return http.get(`cities`);
  }
}

export default new ClubCultureDataService();
