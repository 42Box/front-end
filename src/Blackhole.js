function Blackhole ( {userInfo} ) {
    return (
        <div>
            { userInfo !== undefined
            ? <div>{userInfo.data_erasure_date}</div>
            : null
            }
        </div>
    );
}

export default Blackhole;