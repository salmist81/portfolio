    const submitInterval = document.getElementById("button");

    submitInterval.addEventListener("click", (e) =>{
        e.preventDefault();

        //get the value of input element
        const addMinutes = document.getElementById("minutes").value;
        console.log(addMinutes);
        const addSeconds = document.getElementById("seconds").value;

        //clear the input value once entered and clicked
        document.getElementById("minutes").value = "";
        document.getElementById("seconds").value = "";


        //display time from 'addMinutes'
        const addTimer = document.getElementById("displayIntervals");
       
        //create a paragraph to display time interval
        let p = document.createElement('p');
        let div = document.createElement('div');

        //create a button once there's at least 1 interval
        let startButton = document.createElement('button');
        startButton.textContent = "Start";
        startButton.addEventListener("click", (e) => countDownTimer(e))
        p.textContent = `${addMinutes} : ${addSeconds} Interval 1`;

        div.append(p);
        div.appendChild(startButton);
        addTimer.appendChild(div);
    })

    function countDownTimer(e) {
        e.preventDefault();
        console.log("I'm counting!");
    }