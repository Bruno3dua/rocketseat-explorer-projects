window.addEventListener("keydown", handleKeyDown)

export const Modal = {
    message: document.querySelector(".modalCard h1"),
    btnClose: document.querySelector(".close"),
    wrapper: document.querySelector(".modalWrapper"),

    open() {
        Modal.wrapper.classList.remove('hide')
    },

    close() {
        Modal.wrapper.classList.add('hide')
    }
}

Modal.btnClose.onclick = () => {
    Modal.close()
}

function handleKeyDown(e) {
    if (e.key == 'Escape')
        Modal.close()
}