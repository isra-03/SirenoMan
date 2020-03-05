import axios from 'axios'


const baseURL = 'https://sirenoman.herokuapp.com'

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
  logOut:async()=>{
    return await MY_SERVICE.get('/logout')
  },
//  uploadPhoto: async photo => {
//    return await MY_SERVICE.post('/upload', photo)
//  }
feedAll: async()=>{
  const programs = await MY_SERVICE.get('/programa') 
  const bookings = await MY_SERVICE.get('/reservacion')   
  return {programs:programs.data.programs,bookings:bookings.data.bookings}
},
createBooking: async (form) => {
  const booking = await MY_SERVICE.post ('/reservacion/add', form)
  return {booking}
},
traeBookings:async (id)=>{
  const bookings= await MY_SERVICE.post(`/reservacion/reservaciones/${id}`)
  return {bookings:bookings}
},
feedBooking: async()=>{
  const bookings = await MY_SERVICE.get('/reservacion')  
 
 return {bookings:bookings.data.bookings}
},

}

export default AUTH_SERVICE

