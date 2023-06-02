const time = () => {
    var showdate = new Date()
    var displaytodaysdate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear()
    var displayTime = showdate.getHours()+'/'+showdate.getMinutes()+'/'+showdate.getSeconds();
    return(
        <div className="flex justify-center items-center max-w-screen-xl bg-slate-600">
            <div className="flex flex-col text-white p-10">
                <h1>
                Date : {displaytodaysdate}
                </h1>
                <h1>
                Time : {displayTime}
                </h1> 
            </div>
        </div>
    )
}
export default time