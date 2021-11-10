import axios from "axios";

export default axios.create({
    baseURL: "https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/clubculture-wbdcr/service/clubs/incoming_webhook/",
    headers: {
        "Content-type": "application/json"
    }
});