import type { ID, Link } from '~~/types'
import { defineStore } from 'pinia'

interface State {
	_navigations:
		| {
				id: ID
				link: Link
		  }[]
		| undefined
	_socials:
		| {
				id: ID
				link: Link
		  }[]
		| undefined
}

export const storeLayout = defineStore('layout', {
	state: (): State => ({
		_navigations: undefined,
		_socials: undefined
	}),

	getters: {
		navigations: state => state._navigations,
		socials: state => state._socials
	},

	actions: {
		async fetch() {
			const response = await $fetch(`/api/layout/`, {
				headers: useRequestHeaders(['cookie'])
			})

			this._navigations = response.navigations
			this._socials = response.socials
		}
	}
})
