// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set in full-stack development and machine learning, I bring a unique perspective to building efficient and scalable solutions. My journey includes solving complex problems and constantly evolving as a well-rounded tech professional."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/muhammad-hamza-profile-sideview.jpeg" alt="Muhammad Hamza at NUST"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Skills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Beyond my technical expertise, I excel in leadership, time management, and multitasking, developed through my experience as a software engineer and project manager. I’m a team player, passionate about delivering value. Outside of work, I stay active through swimming, powerlifting and hiking, which fuel my discipline and creativity." 
							/>
						<BadgesBlock 
							title="Reasearch and development" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of development is planning the architecture of a project. From designing data pipelines to mapping out machine learning models, I enjoy working through every detail to ensure an effiecient solution."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'cubes', 		name: 'System Design', 		type: 'fad' },
	{ key: 'solar-system', 			name: 'Infrastructure', 	type: 'fad' },
	{ key: 'layer-plus', 			name: 'Integration', 	type: 'fad' },
	{ key: 'qrcode', 			name: 'Security and Compliance', 	type: 'far' },
	{ key: 'clipboard-list-check', 		name: 'Quality Assurance', 		type: 'fad' },
	{ key: 'planet-moon', 		name: 'Deployment', 	type: 'fad' },
]