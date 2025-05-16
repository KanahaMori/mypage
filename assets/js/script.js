// スライダー機能を特定のセクションに適用する関数
function setupSlider(boxSelector, prevSelector, nextSelector) {
    let currentIndex = 0;
    const boxes = document.querySelectorAll(boxSelector);
    const prevButton = document.querySelector(prevSelector);
    const nextButton = document.querySelector(nextSelector);

    if (!boxes.length || !prevButton || !nextButton) return; // 要素が見つからない場合は中断

    function updateBoxVisibility() {
        if (window.innerWidth <= 768) {
            boxes.forEach((box, index) => {
                box.style.display = index === currentIndex ? "block" : "none";
            });
        } else {
            boxes.forEach(box => {
                box.style.display = "block";
            });
        }
    }

    function toggleArrows() {
        if (window.innerWidth > 768) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            prevButton.style.display = 'inline-block';
            nextButton.style.display = 'inline-block';
        }
        updateBoxVisibility();
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateBoxVisibility();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < boxes.length - 1) {
            currentIndex++;
            updateBoxVisibility();
        }
    });

    toggleArrows();
    window.addEventListener('resize', toggleArrows);
}

// ページ読み込み時に各セクションのスライダーを設定
document.addEventListener('DOMContentLoaded', () => {
    setupSlider('.box-container-research .box', '.prev-research', '.next-research');
    setupSlider('.box-container-favorite .box', '.prev-favorite', '.next-favorite');
});
