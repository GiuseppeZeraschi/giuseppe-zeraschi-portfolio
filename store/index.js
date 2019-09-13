export const state = () => ({
    mobileNavIsActive: false
})

export const mutations = {
    toggleMobileNav(state) {
        state.mobileNavIsActive = !state.mobileNavIsActive
    },
    closeMobileNav(state) {
        state.mobileNavIsActive = false
    }
}
