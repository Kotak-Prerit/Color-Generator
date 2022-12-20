const capturecolor = () => {

    const randomNum = Math.floor(Math.random() * 16777215);
    const randomHex = "#" + randomNum.toString(16);
    document.body.style.background = randomHex;
    document.body.style.backgroundImage = "url('img/main-bg.png')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("HexCode").innerText = randomHex;

    navigator.clipboard.writeText(randomHex);

}

document.getElementById("btn").addEventListener(
    "click", capturecolor
)

function alert(){
    document.getElementById("copy").style.opacity = 100;
}

capturecolor();