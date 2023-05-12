player_1_res = Math.floor(Math.random() * 6) + 1;
player_2_res = Math.floor(Math.random() * 6) + 1;

player_1_img = "images/dice_" + player_1_res + ".jpg";
player_2_img = "images/dice_" + player_2_res + ".jpg";

document.querySelector(".img-p1").setAttribute("src", player_1_img);
document.querySelector(".img-p2").setAttribute("src", player_2_img);

if (player_1_res > player_2_res) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
  document.querySelector(".p1_w").classList.add("p1_won");
} else if (player_1_res < player_2_res) {
  document.querySelector("h1").textContent = "Player 2 Wsins!";
  document.querySelector(".p2_w").classList.add("p2_won");
} else {
  document.querySelector("h1").textContent = "Draw!";
  document.querySelector(".draw").classList.add("drawn");
}
