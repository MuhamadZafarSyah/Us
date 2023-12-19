const btnPlay = document.querySelector("#button .mulai");
const messege = document.querySelector(".messege-box");
const messege1 = document.querySelector(".messege-box1");
const messege2 = document.querySelector(".messege-box2");
const messege2P = document.querySelector(".messege-box2 .pesan p");
const hilang1 = document.querySelector(".hilang1");
const hilang2 = document.querySelector(".hilang2");
const nama = document.querySelectorAll(".nama h2")[0];
const nama1 = document.querySelectorAll(".nama h2")[1];
const waktu = document.getElementById("waktu");
const jam = waktu.querySelector("h1");
const hari = waktu.querySelector("p");
const bg1 = document.querySelector(".background1");
const bg2 = document.querySelector(".background2");
const body = document.querySelector(".body");
const audio = document.querySelector(".audio");

body.classList.add("background1");

const date = new Date();
const hour = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const day = date.getDay();
const tgl = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`;
jam.innerHTML = `${hour}:${minutes}`;

// Dirubah
const pengirim = "Zafaarrrr";
const nomorWa = "6288214367530"; // awalan nomor 0 harus di awalin 62
const textWa = "Lovee youu";
const pesan = `In our 4th mensiv ini aku harap semoga kita bisa sama sama teruss, i love so much, even word cannot explain how much i love you. Do you know why I love you? because you deserve getting love and I'm afraid that the one who gives you love is not me but the wrong person. I'm afraid to lose you, Kamu cantikk lucuu dan (aduh kalo aku tulisin semua bakal penuh kali selayar)..CANTIIKK IMUT GEMEESINN, aku masih inget kamu bilang ke aku waktu di bus, kamu bilang mau pake soflens, jujurr aku heran ngapain cobaa kamu pake soflens, padahal mata kamu tu udah cantik banget sayangg, gausahh pake soflenss!!, my gf smile, senyum kamu KENAPA MANIS BEUT SEHH HERAN!!, nanti kalo di semutin gimanaa, itu baru 1, dan yang ke-2 senyum kamu tu bikin candu lucuu , TAPI TAPI ADA TAU YANG LEBIH LUCU DARI SENYUM KAMUU, YAITU EKSPRESI MARAH KAMU😱, walaupun sebenernya kasian marah muluu tapi lucuu, hobby baru aku sekarang bikin kamu marahh WKWK. Thankyou ya sayang udah sama aku terus, thank you so muchh, and I LOVEE YOUU❤`;

if (pengirim) {
  nama.innerHTML = pengirim;
  nama1.innerHTML = pengirim;
} else {
  nama.innerHTML = "Nama Kamu";
  nama1.innerHTML = "Nama Kamu";
}

btnPlay.addEventListener("click", () => {
  audio.play();
  messege1.style.display = "block";
  messege1.style.transform = "translateX(0)";
  btnPlay.style.display = "none";
  hilang1.style.display = "block";
});

hilang1.addEventListener("click", () => {
  messege1.style.display = "none";
  messege2.style.transform = "translateX(0)";
  hilang1.style.display = "none";
  hilang2.style.display = "block";
  Swal.fire({
    imageUrl: "./assets/img/foto3.jpg",
    imageHeight: 155,
    title:
      "WKWK lucuu banget foto fotonyaa!! gemesss, apalagi ada kamunya Hehehe, \n aku ada pesan buat kamu, mau tau ga?",
    html: `<input type="text" id="login" class="swal2-input" placeholder="">`,
    confirmButtonText: "Ketik Mauu!",
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector("#login").value;
      if (!login) {
        Swal.showValidationMessage(`KETIK MAUUU WOYY!!`);
      }
      return { login };
    },
  }).then((result) => {
    let i = 0;
    const speed = 50;
    let txt = `${pesan}`;

    const typeWriter = () => {
      if (i < txt.length) {
        messege2P.innerHTML += txt.charAt(i);
        i++;
        messege2.classList.remove("kelip");
        hilang2.style.display = "none";
        setTimeout(typeWriter, speed);
      } else {
        messege2.classList.add("kelip");
        body.classList.replace("background1", "background2");
        body.classList.add("muncul");
        hilang2.style.display = "block";
      }
    };
    typeWriter();
  });
});

hilang2.addEventListener("click", () => {
  window.open(`https://wa.me/${nomorWa}/?text=${textWa}`, "_blank");
});
