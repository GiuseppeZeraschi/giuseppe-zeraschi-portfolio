<template>
    <form
        method="POST"
        data-netlify="true"
        class="v-contact-form u-text--initial"
    >
        <h1 class="v-contact-form__heading u-text--large">{{ headings[headingIndex] }}</h1>
        <div class="u-form__input-group">
            <div class="u-form__input-wrapper">
                <label
                    for="firstName"
                    class="v-contact-form__label"
                >
                    First Name
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                >
            </div>
            <div class="u-form__input-wrapper">
                <label
                    for="lastName"
                    class="v-contact-form__label"
                >
                    Last Name
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                >
            </div>
        </div>
        <div class="u-form__input-group">
            <div class="u-form__input-wrapper">
                <label
                    for="phone"
                    class="v-contact-form__label"
                >
                    Phone
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                >
            </div>
            <div class="u-form__input-wrapper">
                <label
                    for="email"
                    class="v-contact-form__label"
                >
                    Email
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                >
            </div>
        </div>
        <div class="u-form__input-wrapper">
            <label
                for="message"
                class="v-contact-form__label"
            >
                Message
            </label>
            <textarea
                class="v-contact-form__text-area u-form__input"
                id="message"
                v-model="form.message"
                type="text"
                required
            />
        </div>
        <button
            type="submit"
            class="v-contact-form__submit u-button"
        >
            Send
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            headingIndex: null,
            headings: [
                'What are you waiting for?',
                'Don\'t be shy...',
                'Playing hard to get?'
            ],
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                message: ''
            }
        }
    },
    mounted() {
        this.headingIndex = Math.floor(Math.random() * Math.floor(3))
    }
}
</script>

<style lang="scss">
.v-contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60rem;

    &__heading {
        margin-bottom: $spacing-large;
        padding-bottom: $spacing-base;
        text-align: center;

        @media (min-width: $breakpoint-desk) {
            text-align: left;
        }

    }

    &__label {
        margin-bottom: $spacing-tiny;
    }

    &__input {
        margin-bottom: $spacing-small;
        width: 100%;
    }

    &__text-area {
        height: $spacing-huge;
        margin-bottom: $spacing-large;
        resize: none;
        width: 100%;
    }

    &__submit {
        align-self: center;

        @media (min-width: $breakpoint-desk) {
            align-self: flex-end;
        }

    }

}
</style>
