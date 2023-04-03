const splitBtn = document.getElementById("splitBtn");
splitBtn.addEventListener("click", split);


function split() {
    // Accessing values of the container
    let number = document.getElementById("number").value;
    let splits = document.getElementById("splits").value;
    let container = document.getElementById("container");

    // Initialising div to nill
    container.innerHTML = "";

    // Checking edge cases
    if (!Number.isInteger(Number(number)) || !Number.isInteger(Number(splits))) {
        document.getElementById("invalid").innerHTML = "Enter integer value only.";
        return;
    }


        let num = parseInt(number);
        let parts = parseInt(splits);
        document.getElementById("invalid").innerHTML = "";

        if (num <=0) {
                document.getElementById("invalid").innerHTML = "Number can not be negative.";
                return;
        }

        if (parts > num) {
                document.getElementById("invalid").innerHTML = "Splits can't be greater than number";
                return;
        }
        
        if (splits <= 0) {
                document.getElementById("invalid").innerHTML = "Splits should not be negative.";
                return;
        }
    
    let rem = num;
    for (let i = 0; i < splits; i++) {
        const amount = Math.ceil(rem / (splits - i));
        const div = document.createElement("div");
        div.classList.add("split");
        div.style.backgroundColor = getRandomColor();
        div.style.flex = amount;
        div.innerHTML = amount;
        container.appendChild(div);
        rem -= amount;
    }


}

const getRandomColor = () => {
    const hexDigits = "0123456789ABCDEF";
    const hexArray = Array.from({ length: 6 }, () => hexDigits[Math.floor(Math.random() * 16)]);
    return "#" + hexArray.join("");
  };
  