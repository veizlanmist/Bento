// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Veizlan',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Rise and shine,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Squeaky dreams,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'e4b7f2d213ea60aff425e6f47390a8e4', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '28.462',
	defaultLongitude: '-16.268',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Bluesky',
			icon: 'cloud',
			link: 'https://bsky.app',
		},
		{
			id: '2',
			name: 'Fur Affinity',
			icon: 'paw-print',
			link: 'https://www.furaffinity.net/',
		},
		{
			id: '3',
			name: 'typing.works',
			icon: 'whole-word',
			link: 'https://typing.works',
		},
		{
			id: '4',
			name: 'CDKeys',
			icon: 'gamepad-2',
			link: 'https://www.cdkeys.com/',
		},
		{
			id: '5', 
			name: 'Tumblr',
			icon: 'scan-heart',
			link: 'https://www.tumblr.com/',
		},
		{
			id: '6',
			name: 'Pinterest',
			icon: 'image',
			link: 'https://www.pinterest.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'headphones',
			id: '1',
			links: [
				{
					name: 'Chad Chad',
					link: 'https://www.youtube.com/@thechadx2/videos',
				},
				{
					name: 'Jacob Geller',
					link: 'https://www.youtube.com/@JacobGeller/videos',
				},
				{
					name: 'Miniminuteman',
					link: 'https://www.youtube.com/@miniminuteman773/videos',
				},
				{
					name: 'Nicole Rafiee',
					link: 'https://www.youtube.com/@NicoleRafiee/videos',
				},
			],
		},
		{
			icon: 'sparkles',
			id: '2',
			links: [
				{
					name: 'Prydwen',
					link: 'https://www.prydwen.gg',
				},
				{
					name: 'Tethys.gg',
					link: 'https://tethys.gg',
				},
				{
					name: 'WuWa Tracker',
					link: 'https://wuwatracker.com',
				},
				{
					name: 'ZZZ Toolbox',
					link: 'https://zzz.rng.moe',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
