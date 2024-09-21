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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a creative technologist, I develop intuitive software solutions using a diverse set of tools and languages."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Polymath foundations"
							icon={[ 'fat', 'chart-network' ]}
							copy="With a strong foundation in both design and development, I bring a unique perspective to every project and am constantly learning and evolving to stay up-to-date with the latest industry trends."
							iconClass={about.icon}
							containerClass={about.container}
						/>

						<BadgesBlock 
							title="Programming Languages" 
							copy="Python, JavaScript, R"
							list={[
								{ key: 'python', name: 'Python', type: 'devicon' },
								{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
								{ key: 'r', name: 'R', type: 'devicon' },
							]}
							block="software" 
							fullContainer="fullContainer"
							icon="code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>

						<BadgesBlock 
							title="Frameworks & Libraries" 
							copy="Django, React, TensorFlow, PyTorch"
							list={[
								{ key: 'django', name: 'Django', type: 'devicon' },
								{ key: 'react', name: 'React', type: 'devicon' },
								{ key: 'python', name: 'TensorFlow', type: 'devicon' },
								{ key: 'pytorch', name: 'PyTorch', type: 'devicon' },
							]}
							block="software" 
							fullContainer="fullContainer"
							icon="layer-group"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Data Engineering" 
							copy="MongoDB, PySpark, SQL, Talend, Postgresql, DataBricks"
							list={[
								{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
								{ key: 'python', name: 'PySpark', type: 'devicon' },
								{ key: 'database', name: 'SQL', type: 'fas' },
								{ key: 'table', name: 'Talend', type: 'fas' },
								{ key: 'postgresql', name: 'Postgresql', type: 'devicon' },
								{ key: 'trowel-bricks', name: 'Databricks', type: 'fas' },
							]}
							block="software" 
							fullContainer="fullContainer"
							icon="database"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>

						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="cogs"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>	

						<BadgesBlock 
							title="Software I love to work with" 
							copy="With over 20 years of experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
											
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>

			
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },

]

const tech	= [
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
]
