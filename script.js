const buttonNo = document.querySelector("#button");
const buttonIya = document.querySelector(".btn-iya");

if (buttonNo) {
    // Move button so it never leaves its parent (.card:nth-child(2)).
    // On small screens (media query max-width:430px) we disable movement so
    // the mobile layout (buttons stacked/relative) is preserved.

    const mq = window.matchMedia('(max-width:430px)');

    const moveButtonInsideParent = () => {
        const parent = buttonNo.parentElement;
        if (!parent) return;

        const parentWidth = parent.clientWidth;
        const parentHeight = parent.clientHeight;
        const btnWidth = buttonNo.offsetWidth;
        const btnHeight = buttonNo.offsetHeight;

        const maxLeft = Math.max(0, parentWidth - btnWidth);
        const maxTop = Math.max(0, parentHeight - btnHeight);

        const left = Math.floor(Math.random() * (maxLeft + 1));
        const top = Math.floor(Math.random() * (maxTop + 1));

        buttonNo.style.left = `${left}px`;
        buttonNo.style.top = `${top}px`;
    };

    const touchHandler = (e) => {
        e.preventDefault();
        moveButtonInsideParent();
    };

    const resizeHandler = () => {
        const parent = buttonNo.parentElement;
        if (!parent) return;
        const parentWidth = parent.clientWidth;
        const parentHeight = parent.clientHeight;
        const btnWidth = buttonNo.offsetWidth;
        const btnHeight = buttonNo.offsetHeight;

        const currentLeft = parseInt(buttonNo.style.left || '0', 10);
        const currentTop = parseInt(buttonNo.style.top || '0', 10);

        const maxLeft = Math.max(0, parentWidth - btnWidth);
        const maxTop = Math.max(0, parentHeight - btnHeight);

        if (currentLeft > maxLeft) buttonNo.style.left = `${maxLeft}px`;
        if (currentTop > maxTop) buttonNo.style.top = `${maxTop}px`;
    };

    function attachMovement() {
        // Use absolute positioning inside parent so left/top refer to the container
        buttonNo.style.position = 'absolute';
        buttonNo.addEventListener('mouseover', moveButtonInsideParent);
        buttonNo.addEventListener('touchstart', touchHandler, { passive: false });
        window.addEventListener('resize', resizeHandler);
    }

    attachMovement();
}

if (buttonIya) {
    const pesan = "Hai, aku mau kok jadi pacar kamu";
    buttonIya.addEventListener("click", () => {
        window.location = `https://api.whatsapp.com/send?phone=6281250217363&text=${pesan}`;
    });
}
