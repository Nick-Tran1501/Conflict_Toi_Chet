/* eslint-disable jsx-a11y/anchor-is-valid */


function ListItem(props){
    return  (
        <li className="nav-item">
            <a className="flex-sm-fill text-sm-center nav-link active" href="#">{props.detail}</a>
        </li>
    )
}

function NavBar(){
    return (
        <div>
            <nav className="navbar fixed navbar-dark bg-primary text-white" id= "myNavBar">
               
                    <ul className="nav nav-pills nav-fill flex-column flex-sm-row">
                        <ListItem
                            detail = "Home"
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

                
            </nav>  
        </div>
    )
}
export default NavBar