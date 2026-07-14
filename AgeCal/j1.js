let form = document.querySelector("form");

form.addEventListener('submit', () => {
    if (event) event.preventDefault();


    let resultBox = document.querySelector("#resultBox");
    let resultEn = document.querySelector("#resultEn");

    let d = document.querySelector("#birthDay").value;
    let m = document.querySelector("#birthMonth").value;
    let y = document.querySelector("#birthYear").value;
    let inputDates = new Date();
    let Year = inputDates.getFullYear();
    if (y < Year) {
        let inputDate = new Date(y, m - 1, d);

        console.log(inputDates.getFullYear());
        let nowDate = new Date();
        let totalDay = '';
        let month = '';

        let years = nowDate.getFullYear() - inputDate.getFullYear(); //for year cal
        let months = nowDate.getMonth() - inputDate.getMonth(); //for months
        console.log(months);

        let days = nowDate.getDate() - inputDate.getDate(); //for day

        if (days < 0) { //for calculate Day (if -value)
            months--;
            console.log(months);
            day = new Date(0, nowDate.getMonth(), 0).getDate();
            totalDay = days + day;
        } else {
            totalDay = days;
        }


        if (months < 0) {
            years--;
            console.log(months);
            month = months + 12;
        } else {
            console.log(months);
            month = months;
        }


        resultEN.innerText = "Your age is " + years + " years, " + month + " months, " + totalDay + " days";

        // Result Box ကို လှလှပပ ပေါ်လာအောင် လုပ်ပေးတာ
        resultBox.style.display = "block";

    }else{
        alert("This Years is Not Correct")
    }
});

function showRandomQuote() {
    const quotes = [{
            text: "The secret of getting ahead is getting started.",
            author: "— Mark Twain"
        },
        {
            text: "It always seems impossible until it's done.",
            author: "— Nelson Mandela"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "— Steve Jobs"
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "— Theodore Roosevelt"
        },
        {
            text: "Your time is limited, so don't waste it living someone else's life.",
            author: "— Steve Jobs"
        }
    ];

    // Array ထဲကနေ random တစ်ပုဒ် ရွေးမယ်
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomIndex];

    // HTML elements တွေကို လှမ်းယူမယ်
    let quoteBox = document.getElementById("quoteBox");
    let quoteText = document.getElementById("quoteText");
    let quoteAuthor = document.getElementById("quoteAuthor");

    // စာသားတွေ အစားထိုးထည့်မယ် (Double quote ချိတ်နည်း သုံးထားတယ်)
    quoteText.innerText = '"' + selectedQuote.text + '"';
    quoteAuthor.innerText = selectedQuote.author;

    // စာသားအကွက်ကိုပါ အသက်တွက်ချက်မှုနဲ့အတူ တစ်ခါတည်း ပွင့်လာအောင် လုပ်မယ်
    quoteBox.style.display = "block";
}