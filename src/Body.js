import Coalition from "./Coalition";
import Quick from "./Quick";
import Blackhole from "./Blackhole";
import Badge from "./Badge";

function Body({ userInfo, coalition }) {
    return (
        <div>
            <Coalition coalition={coalition} />
            <Quick coalition={coalition} />
            <Badge userInfo={userInfo} />
        </div>
    );
}

export default Body;