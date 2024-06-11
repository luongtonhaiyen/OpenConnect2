
import Navitem from "../components/Admin/Navitem";
import Main from "../components/Admin/Main";



export default function DashBoard() {
    return (
        <>
            <body className="g-sidenav-show  bg-gray-100">
                <Navitem />
                <Main />
            </body>
        </>
    )
}

