import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "home",
	},
	// blog: {
	// 	path: "/all",
	// 	title: "All Posts",
	// },
	tags: {
		path: "/tags",
		title: "tags",
	},

	// about: {
	// 	path: "/about",
	// 	title: "about",
	// },
};

export const SITE = {
	name: "ServerlessHorrors",
	title: "ServerlessHorrors",
	description: "Stories you never want to feel on your own skin",
	url: "https://serverlesshorrors.com",
	githubUrl: "https://github.com/andrasbacsai/serverlesshorrors.com",
	listDrafts: false,
	image: "/assets/blog-cover.jpg",
	// image:
	// 	"https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
	// YT video channel Id (used in media.astro)
	ytChannelId: "",
	// Optional, user/author settings (example)
	// Author: name
	author: "Andras Bacsai", // Example: Fred K. Schott
	// Author: Twitter handler
	authorTwitter: "heyandras", // Example: FredKSchott
	// Author: Image external source
	authorImage: " https://pbs.twimg.com/profile_images/1884210412524027905/jW4NB4rx_400x400.jpg", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// Author: Bio
	authorBio:
		'Founder of <a href="https://coollabs.io" target="_blank">coollabs.io</a> | <a href="https://coolify.io" target="_blank">coolify.io</a> | <a href="https://jean.build" target="_blank">jean.build</a> | <a href="https://serverlesshorrors.com" target="_blank">serverlesshorrors.com</a> | <a href="https://llmhorrors.com" target="_blank">llmhorrors.com</a> | <a href="https://fonts.coollabs.io" target="_blank">fonts.coollabs.io</a> | ❤️ OSS & simplicity | 2 x dad, Entrepreneur.',
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false;

export const USE_VIEW_STATS = false;
