const schedule = require("node-schedule");
const axios = require("axios");

const getEvents = async () => {
  const {data :events} = await axios.get(`http://localhost:2244/event`);
    
 return RunFunction(events);
};
function RunFunction(events) {
  events.forEach((e) => {
    let ans = e.text;
    console.log('ans:', ans)
    const date = new Date(e.datetime);
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
