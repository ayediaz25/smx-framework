console.log("SMX Commercial Dashboard");

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-4px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});