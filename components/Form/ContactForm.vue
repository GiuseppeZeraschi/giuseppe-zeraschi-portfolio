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
                    :class="{ 'v-contact-form__label--active': inputActive(form.firstName) }"
                    class="v-contact-form__label"
                >
                    First Name
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="firstName"
                    v-model="form.firstName.value"
                    type="text"
                    autocomplete="given-name"
                    required
                    @focus="form.firstName.focus = true"
                    @blur="form.firstName.focus = false"
                >
            </div>
            <div class="u-form__input-wrapper">
                <label
                    for="lastName"
                    :class="{ 'v-contact-form__label--active': inputActive(form.lastName) }"
                    class="v-contact-form__label"
                >
                    Last Name
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="lastName"
                    v-model="form.lastName.value"
                    type="text"
                    autocomplete="family-name"
                    required
                    @focus="form.lastName.focus = true"
                    @blur="form.lastName.focus = false"
                >
            </div>
        </div>
        <div class="u-form__input-group">
            <div class="u-form__input-wrapper">
                <label
                    for="phone"
                    :class="{ 'v-contact-form__label--active': inputActive(form.phone) }"
                    class="v-contact-form__label"
                >
                    Phone
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="phone"
                    v-model="form.phone.value"
                    type="tel"
                    autocomplete="tel"
                    @focus="form.phone.focus = true"
                    @blur="form.phone.focus = false"
                >
            </div>
            <div class="u-form__input-wrapper">
                <label
                    for="email"
                    :class="{ 'v-contact-form__label--active': inputActive(form.email) }"
                    class="v-contact-form__label"
                >
                    Email
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="email"
                    v-model="form.email.value"
                    type="email"
                    autocomplete="email"
                    required
                    @focus="form.email.focus = true"
                    @blur="form.email.focus = false"
                >
            </div>
        </div>
        <div class="u-form__input-wrapper">
            <label
                for="message"
                :class="{ 'v-contact-form__label--active': inputActive(form.message) }"
                class="v-contact-form__label"
            >
                Message
            </label>
            <textarea
                class="v-contact-form__text-area u-form__input"
                id="message"
                v-model="form.message.value"
                type="text"
                required
                @focus="form.message.focus = true"
                @blur="form.message.focus = false"
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
                firstName: {
                    value: '',
                    focus: false
                },
                lastName: {
                    value: '',
                    focus: false
                },
                phone: {
                    value: '',
                    focus: false
                },
                email: {
                    value: '',
                    focus: false
                },
                message: {
                    value: '',
                    focus: false
                }
            }
        }
    },
    mounted() {
        this.headingIndex = Math.floor(Math.random() * Math.floor(3))
    },
    methods: {
        inputActive(input) {
            return !!input.value || input.focus;
        }
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

        &--active {
            color: $color-primary;
        }

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
