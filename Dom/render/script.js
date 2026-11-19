let arr = [
  {
    name: "Ritik",
    age: 24,
    imageUrl:
      "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
  },
  {
    name: "Suyash",
    age: 24,
    imageUrl:
      "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
  },
  {
    name: "Ravi",
    age: 24,
    imageUrl:
      "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
  },
  {
    name: "Vedant",
    age: 24,
    imageUrl:
      "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
  },
];

let main = document.querySelector("main");

arr.forEach((val) => {
  main.innerHTML += `<div class="user-card">
            <div class="img">
                <img src="${val.imageUrl}"
                    alt="">
            </div>

            <div class="text">
                <h1>${val.name}</h1>
            </div>

            <div class="btns">
                <button id="edit">Edit</button>
                <button>Del</button>
            </div>

        </div>`;
});
