let sw = document.getElementById('sw')
let ss = document.getElementById('ss')
let ps = document.getElementById('ps')
let rs = document.getElementById('rs')
let milliseconds = 0, seconds=0, minutes=0, hours=0;
let timeRef;


ss.addEventListener('click',function(){
    timeRef = setInterval(updateTime,10)
})

function updateTime(){
    milliseconds = milliseconds + 10
    if(milliseconds==1000){
        seconds=seconds+1
        milliseconds=0
        if(seconds==60){
            minutes+=1
            seconds=0
            if(minutes==60){
                hours+=1
                minutes=0
            }
        }
    }
    let h, m, s, ms
    if(hours<10){
        h = '0' + hours
    }else{
        h = hours
    }
    if(minutes<60){
        m='0'+minutes
    }else{
        m= minutes
    }
    if(seconds<60){
        s='0'+seconds
    }else{
        s=seconds
    }
    if(milliseconds<10){
        ms = '0'+milliseconds
    }else if(milliseconds<100){
        ms = '00' + milliseconds
    }
    else{
        ms = milliseconds
    }
    sw.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}

ps.addEventListener('click', function(){
    clearInterval(timeRef)
})

rs.addEventListener('click',function(){
    sw.innerHTML = '00 : 00 : 00 : 00'
})

/*let milliseconds = 0, seconds = 0, minutes = 0, hours = 0
let timeRef;
var ss = document.getElementById('ss')
var sw = document.getElementById('sw')

var check = false
ss.addEventListener('click',function(){
    if (check){
        ss.innerText = 'Start'
        clearInterval(timeRef)
       
    }
    else{
        ss.innerText = 'Stop'
        timeRef = setInterval(updateTime,10)
    }
    check = !check
})

//for running time
function updateTime(){
    milliseconds = milliseconds + 10
    if(milliseconds==1000){
        seconds = seconds + 1
        milliseconds = 0;
        if(seconds==60){
            minutes = minutes + 1
            seconds = 0;
            if(minutes==0){
                hours = hours + 1
                minutes = 0
            }
        }
    }
    let h, m, s, ms;
    if(hours<10){
        h = '0' + hours
    }else{
        h = hours
    }

    if(minutes<60){
        m = '0' + minutes
    }else{
        m = minutes
    }

    if(seconds<60){
        s = '0' + seconds
    }else{
        s = seconds
    }

    if(milliseconds<10){
        ms = '0' + milliseconds
    }else if(milliseconds<100){
        ms = '00' + milliseconds
    }else{
        ms = milliseconds
    }
    sw.innerText = `${h} : ${m} : ${s} : ${ms}`
}

//for restart

var rs = document.getElementById('rs')
var sw = document.getElementById('sw')

rs.addEventListener('click',function(){
    clearInterval(timeRef)
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    sw.innerText = '00 : 00 : 00 : 00'
})
*/


/*This is for counter*/ 

var btn1 = document.getElementById('counterIncrement')

btn1.addEventListener('click', update1)
    let count = 0
    function update1(){
        count++
        let element1 = document.getElementById('counter')
        element1.innerText = `Counter: ${count}`
    }

var btn2 = document.getElementById('counterDecrement')

btn2.addEventListener('click', update2)


function update2(){
    count--
    let element2 = document.getElementById('counter')
    element2.innerText = `Counter: ${count}`
}



