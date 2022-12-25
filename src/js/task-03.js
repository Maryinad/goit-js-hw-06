const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesListElem = document.querySelector(".js-gallery");

const createMarkup = (images) => {
  return images
    .map((image) => {
      return `<li class= "images-list"> 
           <img src = "${image.url} alt = "${image.alt}" width = "">
       </li>`;
    })
    .join("");
};

// const showMarkup = (images) => {
//   return (imagesListElem.innerHTML = createMarkup(images));
// };
// console.log(showMarkup(images));

imagesListElem.insertAdjacentHTML("afterbegin", createMarkup(images));
