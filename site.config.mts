import type { AstroInstance } from 'astro';
import { Facebook, Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'Ngoc Quan Pham',
	favicon: 'favicon.ico',
	owner: 'Quan Pham',
	base_url: 'https://travel.ngocquan.com',
	profileImage: 'profile.jpg',
	socialLinks: [
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/ngocquanai',
			icon: Facebook,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/ngoc._.quan/',
			icon: Instagram,
		} as SocialLink,
	],
};
