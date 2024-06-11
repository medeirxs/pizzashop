import { Outlet } from 'react-router-dom'
import { PizzaIcon } from 'lucide-react'

export function AuthLayout(){
  return(
    <div className='flex min-h-screen'>
      <div className='flex flex-col items-center justify-center mx-auto px-auto gap-10'>
        <div className='flex items-center gap-2 text-3xl font-medium text-foreground'>
          <PizzaIcon className='h-9 w-9'/>
          pizza.shop
        </div>
      
        <div className='flex justify-center items-center'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}