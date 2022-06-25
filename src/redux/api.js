import axios from 'axios';

const baseUrl = process.env.BASE_URL || 'http://localhost:3001/'
// const baseUrl = 'https://hubeventsapp.herokuapp.com/'

const routes = {
  events: baseUrl + "events/",
  users: baseUrl + "users/",
}

export const eventsApi = {
  getEvents: () => axios.get(routes.events),
  addEvent: (event) => axios.post(routes.events, event),
  removeEvent: (id) => axios.post(routes.events + 'remove', {id}),
}

export const usersApi = {
  login: (name) => axios.post(routes.users + 'login', {name}),
  signup: (name) => axios.post(routes.users + 'signup', {name, points:0}),
  addPoint: (name) => axios.post(routes.users + 'addPoint', {name}),
  deductPoints: (name, points) => axios.post(routes.users + 'deductPoints', {name, points}),
  getUsers: () => axios.get(routes.users),
}


