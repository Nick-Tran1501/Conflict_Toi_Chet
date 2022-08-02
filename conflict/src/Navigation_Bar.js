/* eslint-disable jsx-a11y/anchor-is-valid */


function ListItem(props){
    return  (
        <li className="nav-item">
            <a className="flex-sm-fill text-sm-center nav-link active" href="#">{props.detail}</a>
        </li>
    )
}

function CenterHeading(props){
    return (
        <div className="My Heading">
            <h1>
                {props.title}
            </h1>
        </div>
    )
        
    
}

function NavBarLogo(props){
    return (
        <div className="navbarImage">
            <img 
            src= {props.image}
            alt= {props.title}
            width = "50px"
           ></img>
        </div>
    )
}
function NavBar(){
    return (
        <div>
            <nav className="navbar fixed navbar-dark text-white " id= "myNavBar">
                 <ul className="nav nav-pills nav-fill flex-column flex-sm-row">
                    <ListItem
                        detail = "Hello"
                    />
                    <ListItem
                        detail = "Learn"
                    />
                    <ListItem
                        detail = "Information"
                    />
                    <ListItem
                        detail = "More"
                    />
                </ul>

                <CenterHeading
                    title = "Learning ReactJs"
                />

                <NavBarLogo
                    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    title = "Logo"
                />

               
        </nav>  
    </div>
    )
}
export default NavBar