class Carousel {
    constructor(input){
        this.element = input;
        this.leftButton = this.element.querySelector(".left-button");
        this.rightButton = this.element.querySelector(".right-button");
        console.log(this.element);
        console.log(this.rightButton);
        console.log(this.leftButton);
        this.count = 0;
        this.images = this.element.querySelectorAll("img");
        this.images[0].style.display = "block";

        this.leftButton.addEventListener('click', () => this.moveLeft());
        this.rightButton.addEventListener('click', () => this.moveRight());
    }

    moveLeft(){
        this.images[this.count].style.display = "none";
        if (this.count === 0){
            this.count = 3;
        }
        else{
            --this.count;
        }
        this.images[this.count].style.display = "block";
    }

    moveRight(){
        this.images[this.count].style.display = "none";
        if (this.count === 3){
            this.count = 0;
        }
        else{
            ++this.count;
        }
        this.images[this.count].style.display = "block";
    }
}

let carousel = document.querySelector(".carousel");

let carouselObject = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/