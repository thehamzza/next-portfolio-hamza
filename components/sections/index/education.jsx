// // Core packages
// import Image from 'next/image'

// // Section structure
// import Section from '../../structure/section';
// import Container from '../../structure/container';

// // Section general blocks
// import SectionTitle from '../../blocks/section.title.block'
// import SectionGridBg from '../../blocks/section.grid.block'

// // Section specific blocks
// import BadgesBlock from '../../blocks/about.badges.block'
// import CopyBlock from '../../blocks/about.copy.block'

// // Section scss
// import about from '../../../styles/sections/index/about.module.scss';

// /**
//  * Section: About
//  * An overview of yourself.
//  * Highlight your top level attributes and disciplines.
//  * 
//  * @returns {jsx} <About />
//  */
// export default function About() {
// 	return (
// 		<Section classProp={about.section}>	
// 			<Container spacing={['verticalXXXLrg']}>
// 				<SectionTitle
// 					title="Education"
// 					preTitle="Background"
// 					subTitle="My academic journey has been rooted in engineering and mathematics, providing a robust foundation for my career in data science and machine learning. I supplemented this with specialized coursework to build a comprehensive skill set."
// 				/>
// 				<section className={about.content}>
// 					<div className={about.image}>
// 						<img src="/img/hamza-powerlifting-winner.jpeg" alt="Hamza at Powerlifting Meet"/>
// 						{/* <Image src="/public/img/hamza-powerlifting-winner.jpeg" width={600} height={800}/> */}
// 					</div>
// 					<div className={about.copy} >
// 							<CopyBlock 
// 								title="Technical Foundations"
// 								containerClass={about.container}
// 								iconClass={about.icon}
// 								icon={['fat', 'graduation-cap']}
// 								copy="My degree in Electrical Engineering and Computer Science from NUST equipped me with a deep understanding of engineering principles, mathematics, and computer science. This strong foundation allows me to approach complex problems with analytical and technical rigor." 
// 							/>
// 						<BadgesBlock 
// 							title="Research and development" 
// 							containerClass={about.container}
// 							list={methods} 
// 							fullContainer="fullContainer"
// 							block="methods" 
// 							icon="fingerprint"
// 							copy="One of my favorite aspects of development is planning the architecture of a project. From designing data pipelines to mapping out machine learning models, I enjoy working through every detail to ensure an effiecient solution."
// 							//invertedColor="invertedColor"
// 							headerIcon={`${about.icon}`}
// 						/>
// 					</div>
// 				</section>	
// 			</Container>
// 		</Section>
// 	)
// }

// const methods 	= [
// 	{ key: 'cubes', 		name: 'System Design', 		type: 'fad' },
// 	{ key: 'solar-system', 			name: 'Infrastructure', 	type: 'fad' },
// 	{ key: 'layer-plus', 			name: 'Integration', 	type: 'fad' },
// 	{ key: 'qrcode', 			name: 'Security and Compliance', 	type: 'far' },
// 	{ key: 'clipboard-list-check', 		name: 'Quality Assurance', 		type: 'fad' },
// 	{ key: 'planet-moon', 		name: 'Deployment', 	type: 'fad' },
// ]



// ----- V2 ------

// // Core packages
// import Image from 'next/image'

// // Section structure
// import Section from '../../structure/section';
// import Container from '../../structure/container';

// // Section general blocks
// import SectionTitle from '../../blocks/section.title.block';
// import SectionGridBg from '../../blocks/section.grid.block';

// // Section specific blocks
// import BadgesBlock from '../../blocks/about.badges.block';
// import CopyBlock from '../../blocks/about.copy.block';

// // Section scss
// import about from '../../../styles/sections/index/about.module.scss';

// /**
//  * Section: About
//  * An overview of yourself.
//  * Highlight your top-level attributes and disciplines.
//  * 
//  * @returns {jsx} <About />
//  */
// export default function About() {
// 	return (
// 		<>
// 			{/* Education Section */}
// 			<Section classProp={about.section}>	
// 				<Container spacing={['verticalXXXLrg']}>
// 					<SectionTitle
// 						title="Education"
// 						preTitle="Background"
// 						subTitle="My academic journey has been rooted in engineering and mathematics, providing a robust foundation for my career in data science and machine learning. I supplemented this with specialized coursework to build a comprehensive skill set."
// 					/>
// 					<section className={about.content}>
// 						<div className={about.image}>
// 							<img src="/img/hamza-powerlifting-winner.jpeg" alt="Hamza at Powerlifting Meet"/>
// 						</div>
// 						<div className={about.copy}>
// 							<CopyBlock 
// 								title="Technical Foundations"
// 								containerClass={about.container}
// 								iconClass={about.icon}
// 								icon={['fat', 'graduation-cap']}
// 								copy="My degree in Electrical Engineering and Computer Science from NUST equipped me with a deep understanding of engineering principles, mathematics, and computer science. This strong foundation allows me to approach complex problems with analytical and technical rigor." 
// 							/>
// 							<BadgesBlock 
// 								title="Relevant Coursework" 
// 								containerClass={about.container}
// 								list={coursework} 
// 								fullContainer="fullContainer"
// 								block="methods" 
// 								icon="book-open"
// 								copy="Relevant coursework includes subjects that played a key role in shaping my skills and knowledge in data science, machine learning, and software engineering."
// 								headerIcon={`${about.icon}`}
// 							/>
// 						</div>
// 					</section>	
// 				</Container>
// 			</Section>

// 			{/* Achievements Section */}
// 			<Section classProp={about.section}>	
// 				<Container spacing={['verticalXXXLrg']}>
// 					<SectionTitle
// 						title="Achievements"
// 						preTitle="Milestones"
// 						subTitle="These accomplishments highlight my dedication and expertise in machine learning, data science, and research."
// 					/>
// 					<section className={about.content}>
// 						<div className={about.copy}>
// 							<CopyBlock 
// 								title="Key Achievements"
// 								containerClass={about.container}
// 								iconClass={about.icon}
// 								icon={['fat', 'trophy']}
// 								copy="Throughout my career, I have achieved significant milestones that reflect my commitment to excellence in the fields of machine learning, data science, and research."
// 							/>
// 							<BadgesBlock 
// 								title="Professional Achievements" 
// 								containerClass={about.container}
// 								list={achievements} 
// 								fullContainer="fullContainer"
// 								block="methods" 
// 								icon="medal"
// 								copy="These achievements highlight my contributions to impactful projects and my pursuit of innovation in technology."
// 								headerIcon={`${about.icon}`}
// 							/>
// 						</div>
// 					</section>
// 				</Container>
// 			</Section>
// 		</>
// 	);
// }

// // Define the coursework for the Education Section
// const coursework = [
// 	{ key: 'signal', name: 'Signal Processing', type: 'fad' },
// 	{ key: 'brain', name: 'Machine Learning', type: 'fad' },
// 	{ key: 'eye', name: 'Computer Vision', type: 'fad' },
// 	{ key: 'database', name: 'Data Science', type: 'fad' },
// 	{ key: 'code', name: 'Data Structures & Algorithms (DSA)', type: 'fad' },
// 	{ key: 'object-group', name: 'Object-Oriented Programming (OOP)', type: 'fad' },
// ];

// // Define the achievements for the Achievements Section
// const achievements = [
// 	{ key: 'award', name: 'First Position in Final Year Project - CureMD', type: 'fad' },
// 	{ key: 'university', name: 'HEC Funded Research Project', type: 'fad' },
// 	{ key: 'file-certificate', name: 'Published Research Paper in IEEE', type: 'fad' }
// ];


// ----- v3------
// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block';
import SectionGridBg from '../../blocks/section.grid.block';

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block';
import CopyBlock from '../../blocks/about.copy.block';

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top-level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<>
			{/* Education Section */}
			<Section classProp={about.section}>	
				<Container spacing={['verticalXXXLrg']}>
					<SectionTitle
						title="Education"
						preTitle="Background"
						subTitle="My academic journey has been rooted in engineering and mathematics, providing a robust foundation for my career in data science and machine learning. I supplemented this with specialized coursework to build a comprehensive skill set."
					/>
					<section className={about.content}>
						<div className={about.image}>
							<img src="/img/hamza-powerlifting-winner.jpeg" alt="Hamza at Powerlifting Meet"/>
						</div>
						<div className={about.copy}>
							<CopyBlock 
								title="Technical Foundations"
								containerClass={about.container}
								iconClass={about.icon}
								icon={['fat', 'graduation-cap']}
								copy="My degree in Electrical Engineering and Computer Science from NUST equipped me with a deep understanding of engineering principles, mathematics, and computer science. This strong foundation allows me to approach complex problems with analytical and technical rigor." 
							/>
							<BadgesBlock 
								title="Relevant Coursework" 
								containerClass={about.container}
								list={coursework} 
								fullContainer="fullContainer"
								block="methods" 
								icon="book-open"
								copy="Relevant coursework includes subjects that played a key role in shaping my skills and knowledge in data science, machine learning, and software engineering."
								headerIcon={`${about.icon}`}
							/>
						</div>
					</section>	
				</Container>
			</Section>

			{/* Achievements Section with Image on the Right */}
			<Section classProp={about.section}>	
				<Container spacing={['verticalXXXLrg']}>
					<SectionTitle
						title="Achievements"
						preTitle="Milestones"
						subTitle="These accomplishments highlight my dedication and expertise in machine learning, data science, and research."
					/>
					<section className={about.content} style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
						{/* Image on the right */}
						<div className={about.image}>
							<img src="/img/hamza-in-eeg-lab-nust-2022.jpeg" alt="Hamza Receiving Awards"/>
						</div>
						{/* Achievements content on the left */}
						<div className={about.copy}>
							<CopyBlock 
								title="Key Achievements"
								containerClass={about.container}
								iconClass={about.icon}
								icon={['fat', 'trophy']}
								copy="Throughout my career, I have achieved significant milestones that reflect my commitment to excellence in the fields of machine learning, data science, and research."
							/>
							<BadgesBlock 
								title="Professional Achievements" 
								containerClass={about.container}
								list={achievements} 
								fullContainer="fullContainer"
								block="methods" 
								icon="medal"
								copy="These achievements highlight my contributions to impactful projects and my pursuit of innovation in technology."
								headerIcon={`${about.icon}`}
							/>
						</div>
					</section>
				</Container>
			</Section>
		</>
	);
}

// Define the coursework for the Education Section
const coursework = [
	{ key: 'signal', name: 'Signal Processing', type: 'fad' },
	{ key: 'brain', name: 'Machine Learning', type: 'fad' },
	{ key: 'eye', name: 'Computer Vision', type: 'fad' },
	{ key: 'database', name: 'Data Science', type: 'fad' },
	{ key: 'code', name: 'Data Structures & Algorithms (DSA)', type: 'fad' },
	{ key: 'object-group', name: 'Object-Oriented Programming (OOP)', type: 'fad' },
];

// Define the achievements for the Achievements Section
const achievements = [
	{ key: 'award', name: 'First Position in Final Year Project - CureMD', type: 'fad' },
	{ key: 'university', name: 'HEC Funded Research Project', type: 'fad' },
	{ key: 'file-certificate', name: 'Published Research Paper in IEEE', type: 'fad' }
];
