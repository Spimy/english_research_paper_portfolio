import { authors } from '$lib/authors';
import type { Tab } from '$lib/types/tab';

export const reflections: Tab[] = [
	{
		query: 'william',
		tabTitle: 'William',
		authors: authors.filter((author) => author.firstName === 'William'),
		title: 'Reflection',
		content: [
			{
				body: [
					'During the research process of writing this paper, there have been a few roadblocks that required me to find alternative solutions. One such roadblock was the lack of resources for the chosen topic due to its nicheness. Whether it is the Sunway Library, or even Google Scholar, there is a lack of materials required for our research. Moreover, when resources are found on Google Scholar, but are locked behind a paywall, there were occasions where Sunway Library was not able to procure the documents required. This required me, and my group members, to be creative, using some articles of other but similar topics, and infer details from them to link to our own paper.',
					'The most fun part during this coursework for me is the process of working on the portfolio. Differing from the norm, as I enjoy coding, we have decided to code the entire portfolio, from scratch, without using any third-party tools / website builders such as Canva or Wix. This gave us freedom on the portfolio design which allowed us to tie it to the theme of our research paper even more closely than what website builders provide with their templates. The most challenging part of coding the portfolio is the implementation of the gacha animation for the roadmap page. Since none of the group members know how to draw, having the chest animated in 2D was not feasible. Instead, we have opted for a 3D chest instead, modelled in Blender. This also gave me the opportunity to try out a new library, Three.js, which I have never used before to render 3D objects on a webpage.',
					"This coursework was also a good opportunity for group work, allowing me to develop my collaborative work soft skill which is essential  in today's competitive job hunts. The workload shared across group members was well balanced and realistic, reflecting real world work division. Furthermore, balancing the workload while keeping track of time in mind has helped in developing time management skills to always keep up with not only the official deadline set for the assignment, but also personal (and group) deadlines as well.",
					'Overall, my experience with this coursework has been a positive one: it was not only productive, but also fun to work on. It helped me to gain, develop and improve the skillsets required in my field of study. While reading and writing research papers may not be a day-to-day job for someone in the field of software, reading and writing is a crucial skill required by software engineers when it comes to software documentations. Thus, I think this course work was well required.'
				]
			}
		],
		references: [],
		download: {
			url: '/reflections/G1_23020043_Reflection.pdf',
			filename: 'G1_23020043_Reflection.pdf'
		}
	},
	{
		query: 'joshua',
		tabTitle: 'Joshua',
		authors: authors.filter((author) => author.firstName === 'Joshua'),
		title: 'Reflection',
		content: [
			{
				body: [
					'[WIP] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum elementum bibendum. Proin accumsan nibh mollis facilisis tempor. Praesent a enim egestas, aliquet est ac, blandit nulla. Vivamus in porttitor neque, id iaculis sem. Nullam vitae tortor quis est egestas tempus eu at nibh. Sed dignissim scelerisque eleifend. Nulla fermentum purus nisl, quis bibendum mi pharetra a. Sed sit amet mauris convallis, fringilla justo in, auctor lectus. Vivamus ullamcorper urna eu ex aliquet cursus. Cras tempus ipsum massa, quis aliquam eros maximus porta. Duis turpis eros, ullamcorper nec viverra sed, vulputate a ipsum.'
				]
			}
		],
		references: [],
		download: {
			url: '',
			filename: ''
		}
	},
	{
		query: 'shaan',
		tabTitle: 'Shaan',
		authors: authors.filter((author) => author.firstName === 'Shaan'),
		title: 'Reflection',
		content: [
			{
				body: [
					'[WIP] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum elementum bibendum. Proin accumsan nibh mollis facilisis tempor. Praesent a enim egestas, aliquet est ac, blandit nulla. Vivamus in porttitor neque, id iaculis sem. Nullam vitae tortor quis est egestas tempus eu at nibh. Sed dignissim scelerisque eleifend. Nulla fermentum purus nisl, quis bibendum mi pharetra a. Sed sit amet mauris convallis, fringilla justo in, auctor lectus. Vivamus ullamcorper urna eu ex aliquet cursus. Cras tempus ipsum massa, quis aliquam eros maximus porta. Duis turpis eros, ullamcorper nec viverra sed, vulputate a ipsum.'
				]
			}
		],
		references: [],
		download: {
			url: '',
			filename: ''
		}
	}
];
