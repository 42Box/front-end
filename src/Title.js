
function getTitleName(titles, id){
    var tname = "NO_NAME";
    titles.forEach((title) => {
        if (title.id === id){
            tname = title.name;
        }
    });
    return tname;
}

function getNowTitle(userInfo){
    var uname = userInfo.login;
    userInfo.titles_users.forEach((t) => {
        if (t.selected === true){
            uname =  getTitleName(userInfo.titles, t.title_id).replace("%login",userInfo.login);
        }
    })
    return uname;
}


function Title({ userInfo }) {
    return (
        <div>
            {userInfo !== undefined
                ? <div>{getNowTitle(userInfo)}</div>
                : null
            }
        </div>
    );
}

export default Title;