
// ==========================================
// NEXORA - GRADE SYSTEM
// ==========================================

// اطلاعات ویدیوهای هر پایه

const lessons = {

    grade7: [
        "i11t55x",
        "h516334",
        "a196ba7",
        "v38yw2a",
        "h34765x",
        "HUvE7",
        "w4283u2",
        "c490js6",
        "o0IFj",
        "a8953c5",
        "b231ugi",
        "cVrvi",
        "z22f4s6",
        "f064xs5",
        "b819c69"
    ],

    grade8: [
        "Ekwoq",
        "a73q6v8",
        "k82g60w",
        "p16v0wx",
        "m009e32",
        "i191vet",
        "m815452",
        "n22sckr",
        "8bO9U",
        "l44t91m",
        "u19tnnj",
        "6G5C2",
        "c68j20l",
        "v75s1b1",
        "o54de87",
        "l94256b"
    ],

    grade9: [
        "s86xkku",
        "n84n0hy",
        "xho4a",
        "y49jk63",
        "i32dxw0",
        "d65x842",
        "c62b795",
        "2rko3",
        "d154zq8",
        "x4542o3",
        "p84ql30",
        "j0t3s",
        "f739e3j",
        "dN8aM",
        "y4386w9"
    ]

};


// ==========================================
// تشخیص پایه از آدرس صفحه
// ==========================================

const currentPage = window.location.pathname;

let currentGrade = null;

if (currentPage.includes("science7")) {
    currentGrade = "grade7";
}

else if (currentPage.includes("science8")) {
    currentGrade = "grade8";
}

else if (currentPage.includes("science9")) {
    currentGrade = "grade9";
}


// ==========================================
// عناصر صفحه
// ==========================================

const lessonGrid = document.getElementById("lessonGrid");

const videoModal = document.getElementById("videoModal");

const videoPlayer = document.getElementById("videoPlayer");

const videoTitle = document.getElementById("videoTitle");

const closeVideo = document.getElementById("closeVideo");


// ==========================================
// ساخت نام درس‌ها
// ==========================================

function getLessonInfo(grade, index) {

    const number = index + 1;

    // پایه هشتم: 16 ویدیو برای 15 درس

    if (grade === "grade8") {

        if (number === 9) {
            return {
                number: "09",
                title: "درس نهم - قسمت اول"
            };
        }

        if (number === 10) {
            return {
                number: "09",
                title: "درس نهم - قسمت دوم"
            };
        }

        const actualLesson = number - 1;

        return {
            number: String(actualLesson).padStart(2, "0"),
            title: `درس ${actualLesson < 9 ? " " : ""}${[
                "",
                "اول",
                "دوم",
                "سوم",
                "چهارم",
                "پنجم",
                "ششم",
                "هفتم",
                "هشتم",
                "نهم",
                "دهم",
                "یازدهم",
                "دوازدهم",
                "سیزدهم",
                "چهاردهم",
                "پانزدهم"
            ][actualLesson]}`
        };
    }

    // پایه هفتم و نهم

    const names = [
        "",
        "اول",
        "دوم",
        "سوم",
        "چهارم",
        "پنجم",
        "ششم",
        "هفتم",
        "هشتم",
        "نهم",
        "دهم",
        "یازدهم",
        "دوازدهم",
        "سیزدهم",
        "چهاردهم",
        "پانزدهم"
    ];

    return {
        number: String(number).padStart(2, "0"),
        title: `درس ${names[number]}`
    };

}


// ==========================================
// ساخت کارت‌های درس
// ==========================================

function renderLessons() {

    if (!lessonGrid || !currentGrade) {
        console.error("NEXORA ERROR: صفحه درس یا پایه شناسایی نشد.");
        return;
    }

    const gradeLessons = lessons[currentGrade];

    if (!gradeLessons) {
        console.error("NEXORA ERROR: ویدیوهای این پایه پیدا نشدند.");
        return;
    }

    lessonGrid.innerHTML = "";

    gradeLessons.forEach((videoId, index) => {

        const info = getLessonInfo(currentGrade, index);

        const card = document.createElement("button");

        card.className = "lesson-card";

        card.type = "button";

        card.innerHTML = `
            <span class="lesson-number">
                LESSON ${info.number}
            </span>

            <h3>${info.title}</h3>

            <p>برای مشاهده ویدیو کلیک کنید</p>

            <span class="lesson-arrow">↗</span>
        `;

        card.addEventListener("click", () => {
            openVideo(videoId, info.title);
        });

        lessonGrid.appendChild(card);

    });

}


// ==========================================
// پخش ویدیو داخل سایت
// ==========================================

function openVideo(videoId, title) {

    if (!videoModal || !videoPlayer || !videoTitle) {
        console.error("NEXORA ERROR: عناصر پخش ویدیو پیدا نشدند.");
        return;
    }

    videoTitle.textContent = title;

    videoPlayer.innerHTML = "";

    const iframe = document.createElement("iframe");

    iframe.src =
        `https://www.aparat.com/video/video/embed/videohash/${encodeURIComponent(videoId)}/vt/frame`;

    iframe.title = title;

    iframe.allow = "autoplay; fullscreen";

    iframe.allowFullscreen = true;

    iframe.loading = "lazy";

    videoPlayer.appendChild(iframe);

    videoModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


// ==========================================
// بستن ویدیو
// ==========================================

function closeVideoPlayer() {

    if (!videoModal || !videoPlayer) {
        return;
    }

    videoModal.classList.remove("active");

    videoPlayer.innerHTML = "";

    document.body.style.overflow = "";

}


// ==========================================
// رویدادهای دکمه بستن
// ==========================================

if (closeVideo) {
    closeVideo.addEventListener("click", closeVideoPlayer);
}


// بستن با کلیک روی فضای بیرون ویدیو

if (videoModal) {

    videoModal.addEventListener("click", (event) => {

        if (event.target === videoModal) {
            closeVideoPlayer();
        }

    });

}


// بستن با کلید Escape

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeVideoPlayer();
    }

});


// ==========================================
// اجرای سیستم
// ==========================================

renderLessons();

console.log("NEXORA: Grade system loaded successfully.");
