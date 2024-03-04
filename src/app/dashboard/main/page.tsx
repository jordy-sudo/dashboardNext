import { WidgetsGrid } from "@/components"

export const metadata={
  title:'Dashboard',
  description:'SEO Title'
}

const PageMain = () => {
  return (
    <div className='txt-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Informacion General</span>
       <WidgetsGrid/>
    </div>
  )
}

export default PageMain