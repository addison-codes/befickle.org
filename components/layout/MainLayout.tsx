import Nav from "../Nav"
import Footer from "../Footer"


const MainLayout = ({ children, landing, black }: {children:any, landing?:boolean, black?:boolean}) => {
  return (
    <div>
      {landing ? <Nav home /> : <Nav />}
      <main className={`mx-auto ${black ? 'bg-black' : ''}`}>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout