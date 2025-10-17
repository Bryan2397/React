import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 class="heading" contenteditable="true" spellcheck="false">
      My Favourite Foods
    </h1>

    <div>
      <img src={img} />
      <img
        class="img"
        src="https://www.crunchtimekitchen.com/wp-content/uploads/2017/01/Real-Boneless-Wings-Featire.jpg"
      />
      <img src="https://deliciouslittlebites.com/wp-content/uploads/2021/09/Crispy-Fried-Chicken-Tenders-Recipe-Image-5.jpg" />
      <img src="https://th.bing.com/th/id/R.c5a362a252ca9547855c03e6e57947db?rik=97tI2Lo91Cn09g&pid=ImgRaw&r=0" />
    </div>
  </div>,
  document.getElementById("root")
);
