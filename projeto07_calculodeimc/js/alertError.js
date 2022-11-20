export const alertError = {
    element: document.querySelector('.error'),

    open() {
        alertError.element.classList.remove('hide')
    },

    close() {
        alertError.element.classList.add('hide')
    }
}