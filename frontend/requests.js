import axios from 'axios'


//note : retrieve requests fetch an array with only one element, not an entire array. common pitfall
export const fetcher = (url) =>
{
    return axios
    .get(url)
    .then((res) => res.data);
}

export const creator = (url, { arg }) =>
{
    return axios
    .post(url, JSON.stringify(arg) ,{ headers: { "Content-Type" : "application/json"} })
    .then((res) => res.data);
}

export const updater = (url, { arg }) =>
{
    console.log(arg)
    return axios
    .put(`${url}${arg.id}/`, JSON.stringify(arg) ,{ headers: { "Content-Type" : "application/json"} })
    .then((res) => res.data);
}