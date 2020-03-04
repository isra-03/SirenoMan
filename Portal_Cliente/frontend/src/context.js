 
import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services'

export const MyContext = createContext()

class MyProvider extends Component {
    state = {
        formSignup: {
          name: '',
          email: '',
          password: ''
        },
        formLogin: {
          email: '',
          password: ''
        },
        formProgram: {
          tipo:"",
          lugar:"",
          capacidad:"",
          costoClase:""
        },
        formBooking: {
          programa:"",
          cantidad:"",
          horario:"",
          dia:""
        },
        allPrograms: null,
        allBookings: null,
        feed: false,
        isLogged: false,
        loggedUser: null,
        isOpen: false,
        userBookings:null
        }
        

        //async componentDidMount() {
        //  const { data } = await SERVICE
        //  this.setState({ })
        //}
        handleChange=(e,obj)=> {
          const {
            name,
            value
          } = e.target
          let Obj = this.state[obj]
          Obj[name] = value
          this.setState({ Obj })
        }
        

      handleSignupInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
          ...prevState,
          formSignup: {
            ...prevState.formSignup,
            [name]: value
          }
        }))
      }
    
      handleLoginInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
          ...prevState,
          formLogin: {
            ...prevState.formLogin,
            [name]: value
          }
        }))
      }
      handleLogout = async () => {
        await AUTH_SERVICE.logOut()
        this.props.history.push('/')
        this.setState({
          loggedUser: null,
          isLogged: false
        })
      }
      handleSignupSubmit = e => {
        e.preventDefault()
        const { name, email, password } = this.state.formSignup
        AUTH_SERVICE.signup({ name, email, password })
          .then(({ data }) => {
            this.setState(prevState => ({
              ...prevState,
              formSignup: {
                name: '',
                email: '',
                password: ''
              }
            }))
            alert('Cuenta creada')
            this.props.history.push('/login')
          })
          .catch(() => {
            alert('No se logró crear la cuenta')
          })
      }
      handleLoginSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state.formLogin
        AUTH_SERVICE.login({ email, password })
          .then(async ({ data }) => { 
            console.log("context",data.user._id)
            const {bookings}= await AUTH_SERVICE.traeBookings(data.user._id)
            this.setState(prevState => ({
              ...prevState,
              formLogin: {
                email: '',
                password: ''
              },
              loggedUser: data.user,
              isLogged: true,
              userBookings:bookings.data.bookings,
              feed:true
            }))
            console.log(this.state.userBookings)
            this.props.history.push('/booking')
          })
          .catch(() => {
            alert('Error')
          })
      }

      createBooking = async (e) => {
        e.preventDefault()
        const form= this.state.formBooking
        //alert(form)
        console.log(form);
        
        return await AUTH_SERVICE.createBooking(form)
          .then((data ) => { 
            console.log("regresa a context")
            console.log(data);
            
            //this.props.history.push('/booking')
          })
          .catch(() => {
            alert('Error')
          })
      }

     async componentDidMount() {
       const data = await AUTH_SERVICE.feedAll()
       this.setState({
         feed: true,
         allPrograms: data.programs,
         allBookings: data.bookings,
       })
      }
      render() {
        const {
          state,
          handleSignupInput,
          handleSignupSubmit,
          handleLoginInput,
          handleLoginSubmit,
          handleChange,
          createBooking
        } = this
        return (
          <MyContext.Provider
            value={{
              state,
              handleSignupInput,
              handleSignupSubmit,
              handleLoginInput,
              handleLoginSubmit,
              handleChange,
              createBooking
            }}
          >
            {this.props.children}
          </MyContext.Provider>
        )
      }
}


export default withRouter(MyProvider)