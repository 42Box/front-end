import Coalition from "./Coalition";
import Quick from "./Quick";
import Blackhole from "./Blackhole";
import Badge from "./Badge";
import Age from "./Age"
function Body({ userInfo, coalition }) {
    return (
        <div>
            <Coalition coalition={coalition} />
            <Quick coalition={coalition} />
            <Badge userInfo={userInfo} />
            <Age userInfo={userInfo} />
        </div>
    );
}

export default Body;