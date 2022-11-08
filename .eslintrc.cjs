module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
	rules: {
		"vue/no-unused-vars": "error",
		"vue/no-unused-components": "error",
		"vue/require-default-prop": "error",
		"vue/require-prop-types": "error",
		"vue/require-explicit-emits": "error",
		"vue/require-prop-type-constructor": "error",
		"vue/require-valid-default-prop": "error",
		"vue/return-in-computed-property": "error",
		"vue/valid-template-root": "error",
		"vue/valid-v-bind": "error",
		"vue/valid-v-cloak": "error",
		"vue/valid-v-else-if": "error",
		"vue/valid-v-else": "error",
		"vue/valid-v-for": "error",
		"vue/valid-v-html": "error",
		"vue/valid-v-if": "error",
		"vue/valid-v-model": "error",
		"vue/valid-v-on": "error",
		"vue/valid-v-once": "error",
		"vue/valid-v-pre": "error",
		"vue/valid-v-show": "error",
		"vue/valid-v-slot": "error",
		"vue/valid-v-text": "error",
		semi: ["error", "never"],
		quotes: ["error", "double"],
	},
}
