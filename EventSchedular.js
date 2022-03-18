const schedule = require("node-schedule");
const axios = require("axios");

const getEvents = async () => {
  const {data :events} = await axios.get(`https://eventsschedular.herokuapp.com/event`);
    
 return RunFunction(events);
};
function RunFunction(events) {
  events.forEach((e) => {
    let ans = e.text;
    const date = new Date(e.datetime);
    console.log("This will run at :",date)
    const scheduletime = schedule.scheduleJob(date, () => {      
      setTimeout(() => {
        let reverseword = ans.split("").reverse().join("");
        ans = reverseword;
        console.log(ans);
      }, ans.length * 1000);
      scheduletime.cancel();
    });
  });
}
getEvents();
