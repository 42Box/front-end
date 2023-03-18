import Coalition from "./Coalition";
import Quick from "./Quick";
import Blackhole from "./Blackhole";

function Body({ userInfo, coalition }) {
    return (
        <div>
            <Coalition coalition={coalition} />
            <Blackhole userInfo={userInfo} />
            <Quick />
            
        </div>
    );
}

export default Body;