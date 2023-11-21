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
					'When we started this coursework, we had difficulty choosing between three niche topics. Subsequently, this created another issue of accessibility of research articles. All group members were able to find adequate research information but were limited by paywalled publishers inaccessible by the Sunway Library. However, we overcame this obstacle by delving deeper into attaining vital information from other subsidiary peer-reviewed articles based on meta-analytic studies of gambling, gambling law, and online betting and its effect on youth.',
					'Furthermore, I was tasked to write 2 sections of our 6-section research paper which included the introduction and the third supporting argument. The introduction was time-consuming as I had to build my understanding of the history of gambling and present issues regarding youth. Nonetheless, it allowed me to establish a firm thesis statement. Additionally, research into the marketing of OG and its ramifications on youth (the third argument) was demanding as all relevant research was limited to qualitative studies and few accurate quantitative studies. However, piecing together different articles and website statistics allowed me to make a valid and stimulating argument.',
					"Additionally, this assignment allowed me to fully embrace a project-based learning mentality. I initially thought that working in a group was going to be a challenging obstacle. However, my group and I quickly realised that successful and detailed delegation of tasks was at the forefront of creating a mindful and elaborate piece of coursework. We took the initiative to meet periodically to review each other's tasks and discuss future modifications.",
					"Moreover, we decided to take a different approach to how we displayed our portfolio by coding a website. One group member was tasked with coding the website as he has the most experience in web development. The second group member and I were tasked to create designs for each part of the website. We namely focused on colour palettes, theme allocation, layout, and font. I enjoyed the creative aspect of it as I found ways to learn and utilise resources in conglomeration to make the website design more unique to OG. A good illustration of this would be how the 'Table of Contents' section consists of animated playing cards; much like the ones you'd see on a gambling website. In continuation, creating a storyboard, and filming and editing the video for the portfolio tapped into my passion and expressiveness of cinematography which was something I wasn't expecting when beginning this coursework.",
					'In conclusion, I’ve learned noticeable lessons in this 13-week course adventure. Firstly, creating a precise outline helps in time management, understanding roles, and minimising stress levels. Secondly, carefully reading sources and comprising relevant arguments is key to a decisive argument. Thirdly, allowing the flow of unique and creative ideas generates a piece of work that is more personal and meaningful that one can be proud of. This course has assisted in the improvement of my writing and social skills and has helped me widen my knowledge about the capabilities of IT which is vital in my journey through software engineering.'
				]
			}
		],
		references: [],
		download: {
			url: '/reflections/G1_23020050_Reflection.pdf',
			filename: 'G1_23020050_Reflection.pdf'
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
