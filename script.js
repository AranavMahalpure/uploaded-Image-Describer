const droparea=document.getElementById("drop-area");

 const inputfile = document.getElementById("input-file");
const imageview=document.getElementById("image-view");

inputfile.addEventListener("change",uploadimage);
function uploadimage(){
    var imageUrl = URL.createObjectURL(inputfile.files[0]);
   
    imageview.style.backgroundImage=`url(${imageUrl})`;
   imageview.textContent =" ";
   imageview.style.border= 0;
}
