import Nav from "./Nav";
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <Nav />
            <div id="home">
                <h1>Thank you for using Steam! Your feedback is very important for us. Please help us improve by answering our Survey Form. Click on the button below to start:</h1>
                <br /><br />
                <Link to="/forms">
                    <button>Start Survey</button>
                </Link>
            </div>
        </div>
    )
}