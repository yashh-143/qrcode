const wrapper=document.querySelector(".wrapper"),qrInput=wrapper.querySelector(".form input"),generateBtn=wrapper.querySelector(".form button"),qrImg=wrapper.querySelector(".qr-code img");let preValue;generateBtn.addEventListener("click",()=>{let e=qrInput.value.trim();e&&preValue!==e&&(preValue=e,generateBtn.innerText="Generating QR Code...",qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${e}`,qrImg.addEventListener("load",()=>{wrapper.classList.add("active"),generateBtn.innerText="Generate QR Code"}))}),qrInput.addEventListener("keyup",()=>{qrInput.value.trim()||(wrapper.classList.remove("active"),preValue="")});