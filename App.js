// Data's in Araay->
const reviews = [
    {
        id:1,
        name: "Andrew",
        job: "Front-End Web Developer",
        img: "https://avatars2.githubusercontent.com/u/498852?s=400&v=4",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quisquam nobis aliquam, alias perferendis a nesciunt distinctio mollitia fuga. Necessitatibus? 1",
    },
    {
        id:2,
        name: "Chris Evans",
        job: "CEO",
        img: "http://juliengdt.github.io/content/images/2015/05/jlngdt_rounded.png",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quisquam nobis aliquam, alias perferendis a nesciunt distinctio mollitia fuga. Necessitatibus? 2",
    },
    {
        id:3,
        name: "Robert",
        job: "Finance",
        img: "https://socialfiremedia.com/wp-content/uploads/2016/01/Matt-Davidson-Social-Fire-Media.png",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quisquam nobis aliquam, alias perferendis a nesciunt distinctio mollitia fuga. Necessitatibus? 3",
    },
    {
        id:4,
        name: "Angelina Jones",
        job: "UX Designer",
        img: "https://www.pass4surekey.com/images/user-3.png",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quisquam nobis aliquam, alias perferendis a nesciunt distinctio mollitia fuga. Necessitatibus? 4",
    },
]

// selecting items-->
const imgs = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");

// Set starting item-->To access array 0-2
let currentitem = 0;

// load initial Html or item-->If current screen Loaded, func will get executed.

window.addEventListener("DOMContentLoaded" , function() {
    showperson(currentitem);
})

// show person based on item-->

function showperson(person) {
    const array = reviews[person];
    imgs.src = array.img;
    author.textContent = array.name;
    job.textContent = array.job;
    info.textContent = array.info;
}

// show next person
// review.length = 4 , 4-1= 3 (last item)

nextbtn.addEventListener("click", ()=> {
    currentitem++;
    if (currentitem > reviews.length - 1) {
        currentitem = 0;
    }
    showperson(currentitem);
})

// show prev person

prevbtn.addEventListener("click", ()=> {
    currentitem--;
    if (currentitem < 0) {
        currentitem = reviews.length - 1;
    }
    showperson(currentitem);
})