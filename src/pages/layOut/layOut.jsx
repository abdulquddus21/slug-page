import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./layout.css"
function layOut({children}) {
  return (
    <div className="COLUMN">
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default layOut