document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const menuWrapper = document.querySelector(".hamburger-menu");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const BREAKPOINT = 900;

    const closeMenu = () => {
        menu.classList.remove("active");
        menuWrapper.classList.remove("active");
        if (hamburgerIcon) hamburgerIcon.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
        menu.classList.add("active");
        menuWrapper.classList.add("active");
        if (hamburgerIcon) hamburgerIcon.setAttribute("aria-expanded", "true");
    };

    const toggleMenu = () => {
        const isOpen = menu.classList.contains("active");
        if (isOpen) closeMenu(); else openMenu();
    };

    // クリックで開閉（モバイル時のみ見える）
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener("click", toggleMenu);

        // キーボード操作（Enter / Space）
        hamburgerIcon.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleMenu();
        }
        });
    }

    // リンククリックで閉じる（モバイル時のオーバーレイ用）
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // ESCで閉じる
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    // 画面サイズ変更時：デスクトップ幅に戻ったら状態をリセット
    const handleResize = () => {
        if (window.innerWidth >= BREAKPOINT) {
        closeMenu(); // デスクトップでは常時表示なのでactiveは不要
        }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // 初期適用
});
