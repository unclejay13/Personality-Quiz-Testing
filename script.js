const questions = document.querySelectorAll(".question");
const nextButtons = document.querySelectorAll(".next");
const finishButton = document.getElementById("finish");
const resultDiv = document.getElementById("result");
const resultImg = document.getElementById("resultImg");
const resultTitle = document.getElementById("resultTitle");
const resultDesc = document.getElementById("resultDesc");

let currentQuestion = 0;
let answers = { A: 0, B: 0, C: 0 };

// แสดงคำถามแรก
questions[currentQuestion].classList.add("active");

// ปุ่มถัดไป
nextButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let selected = questions[index].querySelector("input[type=radio]:checked");
    if (!selected) {
      alert("อย่าลืมเลือกคำตอบน้าา");
      return;
    }
    answers[selected.value]++;
    questions[index].classList.remove("active");
    questions[index + 1].classList.add("active");
  });
});

// ปุ่มจบ
finishButton.addEventListener("click", () => {
  let selected = questions[questions.length - 1].querySelector("input[type=radio]:checked");
  if (!selected) {
    alert("อย่าลืมเลือกคำตอบน้าา");
    return;
  }
  answers[selected.value]++;

  let personality = "";
  let imgSrc = "";
  let desc = "";

  if (answers.A >= answers.B && answers.A >= answers.C) {
    personality = "นักวิเคราะห์ (The Analyst)";
    imgSrc = "https://i.postimg.cc/3wPBRsZg/1.png";
    desc = "คุณคือผู้ไขรหัส ชอบสังเกต หาหลักฐานเล็ก ๆ น้อย ๆ แล้วต่อภาพใหญ่ได้เก่ง";
  } else if (answers.B >= answers.A && answers.B >= answers.C) {
    personality = "ผู้นำการสืบสวน (The Leader)";
    imgSrc = 'https://i.postimg.cc/hjT072CN/3.png';
    desc = "คุณกล้าเสี่ยง กล้าตัดสินใจ มีเสน่ห์ในการชักจูงและเผชิญหน้ากับความจริง";
  } else {
    personality = "ผู้พิทักษ์เงามืด (The Protector)";
    imgSrc = "https://i.postimg.cc/4yGQvpqy/2.png";
    desc = "คุณให้ความสำคัญกับความปลอดภัย ความสัมพันธ์ และมักจะเสียสละเพื่อปกป้องผู้อื่น";
  }

  document.getElementById("quiz").style.display = "none";
  resultDiv.style.display = "block";
  resultImg.style.display = "block";
  resultImg.src = imgSrc;
  resultTitle.textContent = personality;
  resultDesc.textContent = desc;
});

