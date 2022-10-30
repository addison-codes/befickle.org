import Nav from "../Nav"
import Footer from "../Footer"


const MainLayout = ({ children, landing }: {children:any, landing?:boolean}) => {
  return (
    <div>
      {landing ? <Nav home /> : <Nav />}
      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout