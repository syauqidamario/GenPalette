const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxNumber = 64;

const generateColorPalette = () => 
{
      container.innerHTML = ""; //clear container
      for(let i = 0; i < maxPaletteBoxNumber; i++)
      {
            //random hex color code generator
            let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
            randomHex = `#${randomHex.padStart(6, "0")}`;

            const color = document.createElement("li");
            color.classList.add("color");
            color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div> <span class="hex-value">${randomHex}</span>`;

            //add click event di elemen li untuk copy warna
            color.addEventListener("click", () => copyColor(color, randomHex));
            container.appendChild(color);
      }
}
generateColorPalette();

const copyColor = (elem, hexVal) => 
{
      const colorElement = elem.querySelector(".hex-value");
      //Copy hex value, update text ke yang di-copy
      // mengubah teks kembali menjadi hex value setelah 1 sekon
      navigator.clipboard.writeText(hexVal).then(() => {
            colorElement.innerText = "Copied";
            setTimeout(() => colorElement.innerText = hexVal, 1000);
      }).catch(()=>alert("Failed to copy color code!")); // showing alert kalau warna tidak bisa dicopy
}

refreshBtn.addEventListener("click", generateColorPalette);