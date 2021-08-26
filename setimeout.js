
// console.log('Hilmi');
// setTimeout(()=>{
//     alert('Mikrofon')
//     console.log('Settimeout');
// },2000);
// console.log('Sarioglu')

// ----------------------------

// const slowTask = () => {
//     let i = 0;
//     do {
//       i++;
//     } while (i < 500_000_000);
//     return "task is completed.";
//   };

// -----------------------------
  
//   console.log("¯\\_(ツ)_/¯");
//   console.time("bir");
//   // setTimeout
//   console.log("hello1");
//   console.timeLog("bir");
//   slowTask();
//   setTimeout(() => {
//     console.log("Settimeout");
//     console.timeEnd("bir");
//   }, 1000);
//   console.log("hello2");
//   console.timeLog("bir");
//   console.log("hello3");
//   console.timeLog("bir");

// -------------------------

// const showTime = () => {
//     const timeLabel = document.querySelector("p");
//     const time = new Date();
  
//     timeLabel.innerHTML = time.toLocaleTimeString();
//   };
//   setInterval(() => {
//     showTime();
//   }, 1000);

// -------------------------------

// let counter = 0;
// const id = setInterval(function () {
//   const timeLabel = document.querySelector("p");
//   // console.log(timeLabel);
//   const time = new Date();
//   timeLabel.innerHTML = time.toLocaleTimeString();
//   counter++;
//   if (counter == 5) {
//     timeLabel.innerHTML = "Merhaba";
//     clearInterval(id);
//     // console.log("timeLabel :>> ", timeLabel);
//   }
// }, 1000);
// console.log("id :>> ", id);

// ---------------------------------
// const slowTask = () => {
//     let i = 0;
//     do {
//       i++;
//     } while (i < 900_000_000);
//     return "task is completed.";
//   };
  
//   console.time();
//   console.log("hello");
//   console.timeLog();
//   // slowTask();
//   console.log("ara 1");
//   console.timeLog();
//   // slowTask();
//   console.log("son");
  
//   console.timeEnd();

// -----------------------------

/** promise */

// const myPromise = new Promise((resolve, reject) => {
//     console.log("myPromise started");
//     let condition = true;
//     if (condition) {
//       resolve("işlem tamam");
//     }
//     reject(Error("gerçekleşmedi"));
//   });
//   console.log("merhaba");
//   myPromise
//     .then((msg) => {
//       console.log(msg);
//     })
//     .catch((msg) => {
//       console.log(msg);
//     });
//   console.log("gule gule");

// -------------------------------------------

function myFunction() {
    const submitBackground = document.querySelector("#submit");
    submitBackground.style.backgroundColor = "green";
  let counter = 0;
  const id = setInterval(function () {
    const timeLabel = document.querySelector("p");
    const sec = document.querySelector(".seconds");
    // console.log(timeLabel);
    const time = new Date();
    timeLabel.innerHTML = counter +1 ;
    counter++;
    if (counter == document.querySelector("#seconds").value ) {
      timeLabel.innerHTML = document.querySelector("#seconds").value ;
      clearInterval(id);
      // console.log("timeLabel :>> ", timeLabel);
    }
  }, 1000);
}

