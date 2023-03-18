import React from 'react';


function getTitleName(titles, id){
    var tname = "NO_NAME";
    titles.forEach((title) => {
        if (title.id === id){
            tname = title.name;
        }
    });
    return tname;
}

function formatTime(timeString) {
    const date = new Date(timeString);
    const year = date.getFullYear();
    const month = String((date.getMonth() + 1)).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const weekday = ['Sun', 'Mon', 'Tue', 'Wen', 'Thr', 'Fri', 'Sat'][date.getDay()];
    return `${year}${month}${day}(${weekday})`;
  }
  

function getAge(userInfo){
    var listage = [];
    listage.push([userInfo.cursus_users[0].created_at, "BEGIN IN 42 Lapicine"]); 
    listage.push([userInfo.cursus_users[1].created_at, "BEGIN 42 BORNTOBECODE"]);
     
    userInfo.projects_users.forEach((project) => {
        if (!project.project.name.includes("Piscine"))
            listage.push([project.updated_at, project.project.name + " End"]);
    });

    userInfo.titles_users.forEach((t) => {
        listage.push([t.updated_at, getTitleName(userInfo.titles, t.title_id).replace("%login","[" + userInfo.login +"]") + " obtained"]);
    });

    listage.sort();
    listage.forEach((project) =>{
        project[0] = formatTime(new Date(project[0]));
    });
    return listage;
}

function Age({ userInfo }) {
    return (
        <div>
            {userInfo !== undefined
                ? <div>{getAge(userInfo).map((item, index) => (<li key={index}> {item[0].toString()} : {item[1]}</li>))}</div>
                : null
            }
        </div>
    );
}

export default Age;