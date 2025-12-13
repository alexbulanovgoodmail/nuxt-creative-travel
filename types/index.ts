/* types */

export interface Seo {
	meta: {
		[key: string]: string | undefined
	}
	H1: string
	content: string[] | null
	[key: string]: unknown
}

export type SchemaOrg = {
	[key: string]: string | undefined
}[]

export type ID = string | number

export interface Link {
	label: string
	to?: string
}

export interface Media {
	url: string
	alt: string
}

export interface ArticlePreview {
	id: ID
	link: Link
	image: Media
	title: string
	subtitle: string
	createdAt: string
}

export interface ItineraryPreview {
	id: ID
	image: Media
	title: string
	description: string
	period: string
}

export interface Article {
	id: ID
	title: string
	subtitle: string
	location: string
	createdAt: string
	updatedAt: string
	content: string
}
