import CartWidget from "./CartWidget"

function NavBar(){
    return(
        <header className=" bg-teal-600 md:flex px-4 flexitems-center mb-0 gap-16">
            <img src="/compuwork_icon_bg.svg" alt="img" className="mr-auto my-0.5 h-16 md:mr-0"/>
            <nav className="md:mr-auto md:flex md:gap-4 font-bold text-2xl pt-4">
                <a href="#">Perifericos</a>
                <a href="#">Comunicaciones</a>
                <a href="#">Electricos</a>
            </nav>
            <div>
                <CartWidget/>
            </div>
       </header> 
    )
}

export default NavBar

