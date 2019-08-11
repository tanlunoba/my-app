
 export function formatTime(time, fmt) {
        if (time == null) {
            return;
        }
        var fmt = fmt ? fmt : 'yyyy-MM-dd';
        var time = new Date(time);
        var z = {
                M: time.getMonth() + 1, 
                d: time.getDate(), 
                h: time.getHours(),
                m: time.getMinutes(),
                s: time.getSeconds()
            };
        fmt = fmt.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
                return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2);
            });
        return fmt.replace(/(y+)/g, function(v) {
                return time.getFullYear().toString().slice(-v.length);
            });
        }