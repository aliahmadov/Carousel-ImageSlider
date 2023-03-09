






function Start() {

    isDragging = false;
    let images = document.getElementsByClassName('myimage');

    //let title = document.getElementById("title");
    let gallery = document.getElementById('gallery');
    isFirst = true;
    let start = 0;
    let end = 0;
    let firstimage = null;

    let distance = 0;
    let startpoint = (window.innerWidth * 0.4) / 2;
    let diff = 0;

    let sum = 0;
    for (let i = 0; i < images.length; i++) {
        let element = images[i];
        sum += element.offsetWidth;
        if (i == 0) {
            firstimage = element;
        }


        element.addEventListener('dblclick', function (event) {
            let mainIMG = document.querySelector('#big-img');
            mainIMG.src = element.src;
            var clonedElement = mainIMG.cloneNode(true); // create a deep clone of the element
            mainIMG.parentNode.replaceChild(clonedElement, mainIMG);
            clonedElement.classList.add("animate__animated", "animate__backInLeft");
        });


        element.addEventListener('mousedown', function (event) {
            isDragging = true;
            for (let k = 0; k < images.length; k++) {
                let img = images[k];
                img.classList.remove('border');
            }
            element.classList.add('border');

        });

        element.addEventListener('mousemove', function (event) {
            if (isDragging) {
                if (isFirst)
                    start = event.clientX;

                if (distance <= sum) {
                    diff = ((start - event.clientX)) - (distance);
                    // title.innerHTML = start-event.clientX;
                    firstimage.style.marginLeft = `-${diff}px`;
                    isFirst = false;
                }
            }
        });

        element.addEventListener('mouseup', function (event) {
            isFirst = true;
            isDragging = false;

            distance = Number((firstimage.style.marginLeft).toString().slice(0, -2));
            //title.innerHTML+=" "+distance;

        });


        gallery.addEventListener('mouseleave', function (event) {
            isDragging = false;
        });
    }

}


Start();

