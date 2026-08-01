const result=document.getElementById("result");
const openLink=document.getElementById("openLink");

function showResult(text){

result.innerHTML=text;

if(text.startsWith("http")){
openLink.style.display="block";
openLink.href=text;
}else{
openLink.style.display="none";
}

}

document.getElementById("cameraBtn").onclick=()=>{

const scanner=new Html5Qrcode("reader");

scanner.start(
{facingMode:"environment"},
{fps:10,qrbox:250},
(decoded)=>{
showResult(decoded);
scanner.stop();
}
);

};

document.getElementById("file").addEventListener("change",e=>{

const file=e.target.files[0];

if(!file) return;

const scanner=new Html5Qrcode("reader");

scanner.scanFile(file,true)
.then(showResult)
.catch(()=>{

result.innerHTML="QR tidak ditemukan.";

});

});