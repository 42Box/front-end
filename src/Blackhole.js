const getDDay = (expiry_date) => {
    const setDate = new Date(YMDFormatter(formatDate(new Date(expiry_date))));
    const now = new Date();
    const distance = setDate.getTime() - now.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    return (day - 1);
}

//“2022-03-15T12:30:00.000Z” -> 20220315로 변환
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
}

const YMDFormatter = (num) => {
    if (!num) return "";
    var formatNum = '';
    num = num.replace(/\s/gi, "");
    try {
        if (num.length == 8) {
            formatNum = num.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
        }
    } catch (e) {
        formatNum = num;
        console.log(e);
    }
    return formatNum;
}

function Blackhole({ userInfo }) {
    return (
        <div>
            {userInfo !== undefined
                ? <div>D - {getDDay(userInfo.cursus_users[1].blackholed_at)}</div>
                : null
            }
        </div>
    );
}

export default Blackhole;