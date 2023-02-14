//varible decration
let prevBtn = document.getElementsByClassName('prev_btn');
let nextBtn = document.getElementsByClassName('next_btn');
let index = 1;
let myInterval;

//here we create the array of image so we can achive some more functionality and we can more image 
const imgArray = [
    { 
        path: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260" 
    },
    { 
        path: "https://images.pexels.com/photos/6667307/pexels-photo-6667307.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    { 
        path: "https://images.pexels.com/photos/7777002/pexels-photo-7777002.jpeg?auto=compress&cs=tinysrgb&w=1600"
     },
    { 
        path: "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1600"
     },
    { 
        path: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600"
     },
    { 
        path: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
     },
    { 
        path: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1600"
     },
    { 
        path: "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&w=1600" 
    },
    { 
        path: "https://images.pexels.com/photos/1475248/pexels-photo-1475248.jpeg?auto=compress&cs=tinysrgb&w=1600"
     },
    { 
        path: "https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=1600"
     },
    { 
        path: "https://images.pexels.com/photos/695196/pexels-photo-695196.jpeg?auto=compress&cs=tinysrgb&w=1600" 
    },
    { 
        path: "https://images.pexels.com/photos/2236674/pexels-photo-2236674.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
]
// set the default image 
image.src = imgArray[0].path;
p.innerHTML = `Current Index is ${index}`;

//this is function is called when the user click on previous button
const prevClick = () => {
    index--;

    if (index < 1) {
        alert("No Previous Images...");
    }
    else {

        image.src = imgArray[index - 1].path;
        p.innerHTML = `Current Index is ${index}`
    }
}

//this funciton is called when the user click on Next Button
const nextClick = () => {
    index++;
    if (index <= imgArray.length) {
        image.src = imgArray[index - 1].path;
        p.innerHTML = `Current Index is ${index}`
    }
    else {
        alert("No More Images...")
    }
}

//sideshow function
const slideShow = () => {
    ;
    myInterval = setInterval(() => {
        if (index <= imgArray.length) {
            nextBtn[0].click();
        }
    }, (slideshow.value) * 1000)
    //here we are multiple the value by 1000 for making it 1 second
}

const exitshow = () => {
    clearInterval(myInterval);
}
prevBtn[0].addEventListener('click', prevClick);
nextBtn[0].addEventListener('click', nextClick);
startBtn.addEventListener('click', slideShow);
stopBtn.addEventListener('click', exitshow);
