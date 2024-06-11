
import ManageAccount from "../components/Admin/ManageAccount";
import Navitem from "../components/Admin/Navitem";

export default function Account() {
    return (
        <>
            <body className="g-sidenav-show  bg-gray-100">
                <Navitem />
                <ManageAccount/>

            </body>
        </>
    )
}

