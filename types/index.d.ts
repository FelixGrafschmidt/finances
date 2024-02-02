interface Data {
	categories: string[]
	months: Month[]
}

interface Month {
	name: string
	month: number
	year: number
	entries: Entry[]
	edit: boolean
}

interface Entry {
	title: string
	category: string
	value: number
	notes: string
	planned: boolean
}
