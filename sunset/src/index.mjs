import SunCalc from "npm:suncalc@1.9.0";

const {sunset: targetTime} = SunCalc.getTimes(new Date(), parseFloat(latitude), parseFloat(longitude))

const alarmTime = new Date(targetTime.getTime() + (parseInt(offset) * 6e4))

setLocal("sunset_hour", alarmTime.getHours())
setLocal("sunset_minute", alarmTime.getMinutes())
exit()
