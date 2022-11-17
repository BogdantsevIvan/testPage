const ANIM_ITEMS = document.querySelectorAll('.animItem');
if (ANIM_ITEMS.length > 0) {
    // console.log(ANIM_ITEMS.length);
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {     // Функция Анимации при пролистывании
        for (let i = 0; i < ANIM_ITEMS.length; i++) {
            const ANIM_ITEM = ANIM_ITEMS[i];
            const ANIM_ITEM_HIGHT = ANIM_ITEM.clientHeight;
            const ANIM_ITEM_OFFSET = offset(ANIM_ITEM).top;
            const ANIM_START = 4;
            let animItemPoint = window.innerHeight - ANIM_ITEM_HIGHT / ANIM_START;
            if (ANIM_ITEM_HIGHT > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / ANIM_START;
            }
            if ((window.pageYOffset > (ANIM_ITEM_OFFSET - animItemPoint)) && (window.pageYOffset < (ANIM_ITEM_OFFSET + ANIM_ITEM_HIGHT))) {
                ANIM_ITEM.classList.add('active');
            } else {
                if (!ANIM_ITEM.classList.contains('animNoHide')) {
                    ANIM_ITEM.classList.remove('active');
                }
            }
        }
    }
    function offset(el) {   // Функция определения расстояния при пролистывании
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}