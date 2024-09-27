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
 * Section: Achievements
 * An overview of your achievements and milestones.
 * Highlight your notable achievements that reflect your expertise and dedication.
 * 
 * @returns {jsx} <Achievements />
 */
export default function Achievements() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Achievements"
					preTitle="Milestones"
					subTitle="These accomplishments highlight my dedication and expertise in machine learning, data science, and research."
				/>
				<section className={about.content}>
					{/* Image on the left */}
					<div className={about.image}>
						<img 
							src="/img/hamza-in-eeg-lab-nust-2022.jpeg" 
							alt="Hamza Receiving Awards" 
							style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
						/>
					</div>
					{/* Achievements content on the right */}
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
	);
}

// Define the achievements for the Achievements Section
const achievements = [
	{ key: 'award', name: 'First Position in Final Year Project - CureMD', type: 'fad' },
	{ key: 'university', name: 'HEC Funded Research Project', type: 'fad' },
	{ key: 'file-certificate', name: 'Published Research Paper in IEEE', type: 'fad' }
];
