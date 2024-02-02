let img = document.querySelector("img");
let generatorImgBtn = document.querySelector("#btn1");
let clearImgBtn = document.querySelector("#btn2");

let url = "https://dog.ceo/api/breeds/image/random";

async function getImages() {
  try {
    let res = await axios.get(url);
    console.log(res);
    return res.data.message;
  } catch (e) {
    return "Something Went wrong";
  }
}

generatorImgBtn.addEventListener("click", async () => {
  let src = await getImages();
  img.setAttribute("src", src);
});

clearImgBtn.addEventListener("click", () => {
  img.setAttribute("src", "/");
});
