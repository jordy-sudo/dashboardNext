import { CartCounter } from "@/app/components/shopping-cart"

export const metadata={
  title:'Counter page',
  description:'un simple contador'
}

const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos del Carrito</span>
      <CartCounter value={10}/>
    </div>
  )
}

export default CounterPage