const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "<p class='hhe'>Yayyyyyyyyyyyyyyyyyyyyyyy</p> <br/> <p class='hhe'>Come to Vanchaa's job at 5:00 PM</p>"
  gif.src =
    "https://media.giphy.com/media/SjxtmBS267NOU/giphy.gif";
	removeButtons();
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

removeButtons = () => {
	yesBtn.style.display = 'none';
	noBtn.style.display = 'none';
}