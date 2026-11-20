
// ==========================================
// NEXORA 2.0 - SCIENCE LESSON SYSTEM
// ==========================================

const lessons = {
    "7": [
        "https://www.aparat.com/v/i11t55x?playlist=451093",
        "https://www.aparat.com/v/h516334?playlist=451093",
        "https://www.aparat.com/v/a196ba7?playlist=451093",
        "https://www.aparat.com/v/v38yw2a?playlist=451093",
        "https://www.aparat.com/v/h34765x?playlist=451093",
        "https://www.aparat.com/v/HUvE7?playlist=451093",
        "https://www.aparat.com/v/w4283u2?playlist=451093",
        "https://www.aparat.com/v/c490js6?playlist=451093",
        "https://www.aparat.com/v/o0IFj?playlist=451093",
        "https://www.aparat.com/v/a8953c5?playlist=451093",
        "https://www.aparat.com/v/b231ugi?playlist=451093",
        "https://www.aparat.com/v/cVrvi?playlist=451093",
        "https://www.aparat.com/v/z22f4s6?playlist=451093",
        "https://www.aparat.com/v/f064xs5?playlist=451093",
        "https://www.aparat.com/v/b819c69?playlist=451093"
    ],

    "8": [
        "https://www.aparat.com/v/Ekwoq?playlist=458393",
        "https://www.aparat.com/v/a73q6v8?playlist=458393",
        "https://www.aparat.com/v/k82g60w?playlist=458393",
        "https://www.aparat.com/v/p16v0wx?playlist=458393",
        "https://www.aparat.com/v/m009e32?playlist=458393",
        "https://www.aparat.com/v/i191vet?playlist=458393",
        "https://www.aparat.com/v/m815452?playlist=458393",
        "https://www.aparat.com/v/n22sckr?playlist=458393",
        "https://www.aparat.com/v/8bO9U?playlist=458393",
        "https://www.aparat.com/v/l44t91m?playlist=458393",
        "https://www.aparat.com/v/u19tnnj?playlist=458393",
        "https://www.aparat.com/v/6G5C2?playlist=458393",
        "https://www.aparat.com/v/c68j20l?playlist=458393",
        "https://www.aparat.com/v/v75s1b1?playlist=458393",
        "https://www.aparat.com/v/o54de87?playlist=458393",
        "https://www.aparat.com/v/l94256b?playlist=458393"
    ],

    "9": [
        "https://www.aparat.com/v/s86xkku?playlist=336296",
        "https://www.aparat.com/v/n84n0hy?playlist=336296",
        "https://www.aparat.com/v/xho4a?playlist=336296",
        "https://www.aparat.com/v/y49jk63?playlist=336296",
        "https://www.aparat.com/v/i32dxw0?playlist=336296",
        "https://www.aparat.com/v/d65x842?playlist=336296",
        "https://www.aparat.com/v/c62b795?playlist=336296",
        "https://www.aparat.com/v/2rko3?playlist=336296",
        "https://www.aparat.com/v/d154zq8?playlist=336296",
        "https://www.aparat.com/v/x4542o3?playlist=336296",
        "https://www.aparat.com/v/p84ql30?playlist=336296",
        "https://www.aparat.com/v/j0t3s?playlist=336296",
        "https://www.aparat.com/v/f739e3j?playlist=336296",
        "https://www.aparat.com/v/dN8aM?playlist=336296",
        "https://www.aparat.com/v/y4386w9?playlist=336296"
    ]
};

// عنوان کارت‌ها
const lessonTitles = {
    "7": [],
    "8": [],
    "9": []
};

// تشخیص پایه از صفحه
const grade = document.body.dataset.grade;
const lessonGrid = document.getElementById("lessonGrid");

// ساخت کارت‌ها
function createLessonCard(url, index, gradeNumber) {
    const card = document.createElement("a");

    card.className = "lesson-card";
    card.href = url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    let title = `درس ${index + 1}`;

    if (gradeNumber === "8" && index === 8) {
        title = "درس نهم - قسمت اول";
    }

    if (gradeNumber === "8" && index === 9) {
        title = "درس نهم - قسمت دوم";
    }

    card.innerHTML = `
    <div class="lesson-number">
      ${String(index + 1).padStart(2, "0")}
    </div>

    <div class="lesson-info">
      <span class="lesson-label">SCIENCE ${gradeNumber}</span>
      <h3>${title}</h3>
      <p>برای مشاهده ویدیو کلیک کن</p>
    </div>

    <div class="lesson-play">
      ▶
    </div>
  `;

    return card;
}

// نمایش کارت‌ها
function renderLessons() {
    if (!lessonGrid) {
        console.error("NEXORA ERROR: lessonGrid پیدا نشد!");
        return;
    }

    const gradeLessons = lessons[grade];

    if (!gradeLessons) {
        console.error("NEXORA ERROR: پایه موردنظر پیدا نشد!");
        return;
    }

    lessonGrid.innerHTML = "";

    gradeLessons.forEach((url, index) => {
        const card = createLessonCard(url, index, grade);
        lessonGrid.appendChild(card);
    });

    console.log(
        `NEXORA: ${gradeLessons.length} lessons loaded for grade ${grade}`
    );
}

// اجرا
renderLessons();
