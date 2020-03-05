import React, { useEffect, useContext} from 'react'
import { MyContext } from '../../context'
function PerfilCoach({history}) {
    const context = useContext(MyContext)
    useEffect(() => { 
        if (!context.state.isLogged) return history.push('/login')
  })
    return (
        <div>
            
        </div>
    )
}

export default PerfilCoach
