const imgList = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const img = document.getElementById('img');
const color_pallet = document.getElementById("color-pallets");

img.addEventListener('load', function () {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches();

    color_pallet.innerHTML = "";


    document.getElementById("wrapper").
        style.
        backgroundColor =
        `${swatches['DarkVibrant'].getHex()}`;
    var btn = document.querySelectorAll("button");
    btn.forEach(element => {
        element.style.color = `${swatches['LightVibrant'].getHex()}`;
    });
    for (var swatch in swatches) {
        color_pallet.innerHTML +=
            `<div class="color-pallet">
            <div class="color" style="background-color: ${swatches[swatch].getHex()} ;">
            </div>
            <div>
                <h3>${swatch}</h3>
                <h4>${swatches[swatch].getHex()}</h4>
            </div>
        </div>`;
    }
    /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */
});
let cnt = 0;


function prevImg() {
    //get prev
    if (cnt <= 0) {
        cnt = imgList.length - 1;
    }
    else {
        cnt--;
    }
    img.setAttribute("src", imgList[cnt]);
}

function nextImg() {
    //get next
    if (cnt >= imgList.length - 1) {
        cnt = 0;
    }
    else {
        cnt++;
    }
    img.setAttribute("src", imgList[cnt]);
}

const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener('click', prevImg);

next.addEventListener('click', nextImg);
document.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key == "ArrowRight") {
        nextImg();
    }
    else if (event.key == "ArrowLeft") {
        prevImg();
    }
});


