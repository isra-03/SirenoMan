import axios from 'axios'

const baseURL = 'http://localhost:3000'

const MY_SERVICE = axios.create({
  baseURL,
  withCredentials: true
})

const AUTH_SERVICE = {
  signup: async data => {
    return await MY_SERVICE.post('/signup', data)
  },
  login: async data => {
    return await MY_SERVICE.post('/login', data)
  },
//  uploadPhoto: async photo => {
//    return await MY_SERVICE.post('/upload', photo)
//  }
feedAll: async()=>{
  const programs = await MY_SERVICE.get('/programa')  //users
  const bookings = await MY_SERVICE.get('/reservacion')   //clients
 //console.log(programs, bookings);
 return {programs:programs.data.programs,bookings:bookings.data.bookings}
},
}

export default AUTH_SERVICE

