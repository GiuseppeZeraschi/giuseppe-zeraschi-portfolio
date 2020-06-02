<template>
    <form
        @submit.prevent="handleSubmit"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="v-contact-form u-text--initial u-wrapper--small"
    >
        <h1 class="v-contact-form__heading u-margin-bottom--large u-text--gigantic u-text--center u-color-primary">
            {{ headings[headingIndex] }}
        </h1>
        <h2 class="u-text--large v-contact-form__sub-heading u-color-light-grey-one u-text--center u-margin-bottom--huge">
            Don't hesitate to get in contact and I'll get back to you as soon as possible.
        </h2>
        <div class="u-form__input-group">
            <div class="u-form__input-wrapper">
                <div class="v-contact-form__honey-pot">
                <label>
                    Don’t fill this out if you're human:
                    <input name="bot-field">
                </label>
                </div>
                <label
                    for="firstName"
                    :class="{ 'v-contact-form__label--active': inputActive('firstName') }"
                    class="v-contact-form__label"
                >
                    First Name
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="firstName"
                    name="firstName"
                    v-model="form.firstName"
                    type="text"
                    autocomplete="given-name"
                    required
                    @focus="focus.firstName = true"
                    @blur="focus.firstName = false"
                >
            </div>
            <div class="u-form__input-wrapper">
                <label
                    for="lastName"
                    :class="{ 'v-contact-form__label--active': inputActive('lastName') }"
                    class="v-contact-form__label"
                >
                    Last Name
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="lastName"
                    name="lastName"
                    v-model="form.lastName"
                    type="text"
                    autocomplete="family-name"
                    required
                    @focus="focus.lastName = true"
                    @blur="focus.lastName = false"
                >
            </div>
        </div>
        <div class="u-form__input-group">
            <div class="u-form__input-wrapper">
                <label
                    for="phone"
                    :class="{ 'v-contact-form__label--active': inputActive('phone') }"
                    class="v-contact-form__label"
                >
                    Phone
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="phone"
                    name="phone"
                    v-model="form.phone"
                    type="tel"
                    autocomplete="tel"
                    @focus="focus.phone = true"
                    @blur="focus.phone = false"
                >
            </div>
            <div class="u-form__input-wrapper">
                <label
                    for="email"
                    :class="{ 'v-contact-form__label--active': inputActive('email') }"
                    class="v-contact-form__label"
                >
                    Email
                </label>
                <input
                    class="v-contact-form__input u-form__input"
                    id="email"
                    name="email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    required
                    @focus="focus.email = true"
                    @blur="focus.email = false"
                >
            </div>
        </div>
        <div class="u-form__input-wrapper">
            <label
                for="message"
                :class="{ 'v-contact-form__label--active': inputActive('message') }"
                class="v-contact-form__label"
            >
                Message
            </label>
            <textarea
                class="v-contact-form__text-area u-form__input"
                id="message"
                name="message"
                v-model="form.message"
                type="text"
                required
                @focus="focus.message = true"
                @blur="focus.message = false"
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
            },
            focus: {
                firstname: false,
                lastName: false,
                phone: false,
                email: false,
                message: false
            }
        }
    },
    mounted() {
        this.headingIndex = Math.floor(Math.random() * Math.floor(3))
    },
    methods: {
        inputActive(input) {
            return !!this.form[input] || this.focus[input];
        },
        encode(data) {
            return Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');
        },
        handleSubmit() {
            fetch('/', {
                method: 'post',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: this.encode({
                'form-name': 'contact',
                ...this.form
            })
        })
        .then(() => this.$router.push('form-success'))
        .catch(() => this.$router.push('form-fail'));
        }
    }
}
</script>

<style lang="scss">
.v-contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__honey-pot {
        display: none;
    }

    &__label {
        margin-bottom: $spacing-tiny;

        &--active {
            color: $color-primary-light;
        }

    }

    &__input {
        margin-bottom: $spacing-small;
        width: 100%;
    }

    &__text-area {
        height: $spacing-huge;
        margin-bottom: $spacing-huge;
        resize: none;
        width: 100%;

        @media (min-width: $breakpoint-desk) {
            margin-bottom: $spacing-large;
        }
    }

    &__submit {
        align-self: center;

        @media (min-width: $breakpoint-desk) {
            align-self: flex-end;
        }

    }

}
</style>
