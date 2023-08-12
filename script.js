
document.getElementById("btn").addEventListener("click", () => {
    let boy = document.getElementById("mname").value;
    let girl = document.getElementById("fname").value;
    
    if (boy == "" || girl == "") {
        setTimeout(() => {
            document.getElementById("error").style.display = "none"
        }, 2000);
        document.getElementById("error").style.display = "block"
    } else {
        start(boy, girl);
    };
    
})

function start(boy, girl) {

    // Converting to lower case to compare both letter easly
    let bSmall = boy.toLowerCase();
    let gSmall = girl.toLowerCase();

    // Store number of mathched letter
    let match = 0;

    // Selectors
    let Status = ["Love", "Affair", "Friend", "Married", "Dusman"];
    let dummy = []

    // To get how many letters are same
    Array.from(bSmall).forEach((item) => {
        for (let j = 0; j < gSmall.length; j++) {
            if (item == gSmall[j]) {
                match++
                break
            };
        };
    });

    // We need to minus this number to length of both name 'lenght - nX2'
    // Get how many letters are not same in both name
    let left = (boy.length + girl.length) - match * 2

    // It run four times
    for (let index = 1; index <= 4; index++) {

        // It will add array untile if firnd undefined
        while (dummy[left - 1] == undefined) {
            dummy = dummy.concat(Status)
        }
        console.log(dummy);

        let selector = dummy[left - 1]
        console.log(selector);
        dummy = []

        removeElement(selector)
    }

    function removeElement(selector) {
        let index = Status.indexOf(selector);
        Status.splice(index, 1);
    }

    console.log(Status);

    document.getElementById("result").style.display = "block";
    document.getElementById("relation").innerHTML = `Relationship between ${document.getElementById("mname").value} and
     ${document.getElementById("fname").value} is ${Status[0]}`
}