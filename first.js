let buttons = document.querySelectorAll("button");
let screen = document.querySelector(".screen");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonText = button.innerText;
        if(buttonText === "DEL") {
            let screenText = screen.textContent.slice(0, -1);
            screen.textContent = screenText;
            return;
        }
        else if(buttonText === "AC") {
            screen.textContent = "";
            return;
        }
        else if(buttonText === "=") {
            let expression = screen.textContent;

            if(expression.includes("+")) {
                let numbers = expression.split("+");
                let firstNum = Number(numbers[0]);
                let secondNum = Number(numbers[1]);
                let result = firstNum + secondNum;
                screen.textContent = result;
                return;
            }
            else if(expression.includes("-")) {
                let numbers = expression.split("-");
                let firstNum = Number(numbers[0]);
                let secondNum = Number(numbers[1]);
                let result = firstNum - secondNum;
                screen.textContent = result;
                return;
            }
            else if(expression.includes("*")) {
                let numbers = expression.split("*");
                let firstNum = Number(numbers[0]);
                let secondNum = Number(numbers[1]);
                let result = firstNum * secondNum;
                screen.textContent = result;
                return;
            }
            else if(expression.includes("/")) {
                let numbers = expression.split("/");
                let firstNum = Number(numbers[0]);
                let secondNum = Number(numbers[1]);
                if(secondNum === 0) {
                    screen.textContent = "Error: Division by zero";
                    return;
                }
                let result = firstNum / secondNum;
                screen.textContent = result;
                return;
            }
            else if (expression.includes("%")) {
                let numbers = expression.split("%");
                let firstNum = Number(numbers[0]);
                let secondNum = Number(numbers[1]);
                if(secondNum === 0) {
                    screen.textContent = "Error: Division by zero";
                    return;
                }
                let result = firstNum % secondNum;
                screen.textContent = result;
                return;
            }
        }
        screen.style.fontSize = "45px";
        screen.style.color = "white";
        screen.style.textAlign = "right";
        screen.style.paddingRight = "10px";
        


        screen.textContent += buttonText;
        console.log(buttonText);
    })
});










