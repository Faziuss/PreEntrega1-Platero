import LogoImg from "../assets/logo residence.png"

const Logo = () => {
    return (
        <a href="/">
           <img src={LogoImg} alt="" className="w-40"/>
        </a>
    )
}

export default Logo;