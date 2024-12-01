export default {
	extends: [
	  'stylelint-config-standard-scss',
	  'stylelint-config-prettier-scss',
	  'stylelint-config-tailwindcss'
	],
	rules: {
	  'scss/at-rule-no-unknown': [
		true,
		{
		  ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
		}
	  ]
	}
  }
