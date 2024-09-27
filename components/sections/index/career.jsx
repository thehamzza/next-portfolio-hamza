// // Core packages
// import Image from 'next/image'

// import Badges 		from '../../utils/badge.list.util'

// // Section structure
// import Section from '../../structure/section';
// import Container from '../../structure/container';

// // Section general blocks
// import SectionTitle from '../../blocks/section.title.block'
// import SectionGridBg from '../../blocks/section.grid.block'

// // Career scss
// import career from '../../../styles/sections/index/career.module.scss'

// /**
//  * Section: Career
//  *
//  * @returns {jsx} <Career />
//  */
// export default function Career() {
// 	return (
// 		<Section classProp={`${career.section} borderBottom`}>
// 			<Container spacing={['verticalXXXLrg']}>
// 				<SectionTitle
// 					title="Experience"
// 					preTitle="Career"
// 					subTitle="I am current managing, designing, and developing all consumer and digital product initiatives at My Supply Co."
// 				/>
// 				<section className={career.area}>
// 					<article className={career.company}>
// 						<div className={career.companyContent}>
// 							<span className={career.companyHeader}>
// 								<h3>My Supply Co.</h3>
// 								<h4>Permanent Full-time</h4>
// 								<h4>Apr 2019 - Present · 3 yrs 10 mos</h4>
// 								<h5>Vancouver, British Columbia, Canada</h5>
// 							</span>
// 							<p>
// 							My Supply Co. helps Canadians manage mental and physical health with naturally occurring nootropic and adaptogenic products. They carry products with complex attributes, aiming to solve a large variety of personal care needs — this requires an extremely customized and evolving approach to how the store is built and functions.
// 							</p>
// 						</div>
// 						<div className={career.companyAlt}></div>
// 					</article>

// 					<article className={career.companyPositions}>
// 						<div className={career.position}>
// 							<div className={career.positionContent}>
// 								<span class={career.positionHeader}>
// 									<h3>Director of Product Design and Development</h3>
// 									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
// 								</span>
// 								<p>
// 								I am responsible for the ideation, planning, and development of new consumer goods—and customer and employee facing microservice software. During these projects I work with key stakeholders within our company and supplychain to ensure and meet quality goals across multiple domains.
// 								</p>
// 							</div>
// 							<div className={career.positionAlt}></div>
// 						</div>

// 						<div className={career.position}>
// 							<div className={career.positionContent}>
// 								<span class={career.positionHeader}>
// 									<h3>Full Stack Developer & User Experience Designer</h3>
// 									<h4>Feb 2020 - Nov 2021 · 1 yrs 10 mos</h4>
// 								</span>
// 								<p>
// 								As the lead full stack developer I am responsible for all software development, CI/CD, and QA. This is for the front end, APIs, and the back end. Additionally I was tasked with identifying and analyzing weak points in the customer journey and employee workflows. Each project had to be estimated and prioritized based on its workload and immediate impact to efficiency or revenue. Some of these projects have been so successful internally that we have planned refactoring for commercialization. 
// 								</p>
// 								<p>
// 								Some key projects complete during this time 👇
// 								</p>
// 								<ul className={career.list}>
// 									<li>
// 										Product attribute and settings automated testing
// 										<span className={career.subList}><span className={career.bullet}></span>Eradicated critical data input errors</span>
// 									</li>
// 									<li>
// 										Inventory management reporting and automation 
// 										<span className={career.subList}><span className={career.bullet}></span>Decreased purchasing labour by ~80%</span>
// 									</li>
// 									<li>
// 										Sales management plugin with AJAX shopping cart integration
// 										<span className={career.subList}><span className={career.bullet}></span>Increased AOV by 8.3%</span>
// 									</li>
// 									<li>
// 										Bespoke ID verification software and WooCommerce integration
// 										<span className={career.subList}><span className={career.bullet}></span>Decreased Credit Card fraud by 98%</span>
// 									</li>
// 								</ul>
// 								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
// 							</div>
// 							<div className={career.positionAlt}></div>
// 						</div>
					
// 						<div className={career.position}>
// 							<div className={career.positionContent}>
// 									<span class={career.positionHeader}>
// 										<h3>Front End Developer & User Interface Designer</h3>
// 										<h4>Apr 2019 - Feb 2020 · 11 mos</h4>
// 									</span>
// 								<p>
// 									I was brought on to help fill multiple creative rolls in a small start-up environment. Working with the marketing team to create the brand and logos — designing and developing a new front end for the website — and improving the users experience and store KPIs through design and merchandising optimizations.
// 								</p>
// 								<p>
// 									Some key projects completed during this time 👇
// 								</p>
// 								<ul className={career.list}>
// 									<li>
// 										Full functionality interactive shopping cart to replace cart page
// 										<span className={career.subList}><span className={career.bullet}></span>Increased conversions by 0.7%</span>
// 									</li>
// 									<li>Complex multi-state animated menus represented in an elegant UI 
// 										<span className={career.subList}><span className={career.bullet}></span>Strong brand confidence booster with state of the art menu</span>
// 									</li>
// 									<li>
// 										Design and development of the site and merchandising strategy optimized for market
// 										<span className={career.subList}><span className={career.bullet}></span>7.1% overall conversion rate </span>
// 									</li>
// 								</ul>
// 								<Badges list={stack} block="stack" fullContainer="fullContainer"/>
// 							</div>
// 							<div className={career.positionAlt}></div>
// 						</div>
// 					</article>

// 					<article className={career.company}>
// 						<div className={career.companyContent}>
// 							<span className={career.companyHeader}>
// 								<h3>Another Creative Ltd.</h3>
// 								<h4>Contract Part-time</h4>
// 								<h4>Jun 2016 - Present · 6 yrs 8 mos</h4>
// 								<h5>Vancouver, British Columbia, Canada</h5>
// 							</span>
// 							<p>
// 							Another Creative is a full stack agency that helps deliver exceptional digital experiences to small and medium businesses. Branding, Marketing, and Web/Software Development.
// 							</p>
// 						</div>
// 						<div className={career.companyAlt}></div>
// 					</article>

// 					<article className={career.company}>
// 						<div className={career.companyContent}>
// 							<span className={career.companyHeader}>
// 								<h3>West Coast Electronics</h3>
// 								<h4>Permanent Full-time</h4>
// 								<h4>Jan 2006 - Nov 2011 · 5 yrs 11 mos</h4>
// 								<h5>Vancouver, British Columbia, Canada</h5>
// 							</span>
// 							<p>I was the Electronics Wizard 🧙‍♂️</p>
// 							<p>West Coast Electronics was a repair shop that fixed computers, consoles, and cell phones.</p>
// 						</div>
// 						<div className={career.companyAlt}></div>
// 					</article>
// 				</section>
// 			</Container>
// 		</Section>
// 	)
// }

// const fullStack	= [
// 	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
// 	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
// 	{ key: 'react', 		name: 'React', 				type: 'devicon' },
// 	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
// 	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
// 	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
// 	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
// 	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
// 	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
// 	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
// 	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
// 	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
// 	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
// ]

// const stack	= [
// 	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
// 	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
// 	{ key: 'react', 		name: 'React', 				type: 'devicon' },
// 	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
// 	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
// 	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
// 	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
// 	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
// 	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
// 	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
// 	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
// 	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
// 	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
// ]



//-------v 2------

// // Core packages
// import Image from 'next/image'
// import Badges from '../../utils/badge.list.util'

// // Section structure
// import Section from '../../structure/section';
// import Container from '../../structure/container';

// // Section general blocks
// import SectionTitle from '../../blocks/section.title.block'

// // Career scss
// import career from '../../../styles/sections/index/career.module.scss'

// /**
//  * Section: Career
//  *
//  * @returns {jsx} <Career />
//  */
// export default function Career() {
// 	return (
// 		<Section classProp={`${career.section} borderBottom`}>
// 			<Container spacing={['verticalXXXLrg']}>
// 				<SectionTitle
// 					title="Experience"
// 					preTitle="Career"
// 					subTitle="I have extensive experience in software engineering, data science, and machine learning, contributing to various projects across multiple industries."
// 				/>
// 				<section className={career.area}>
// 					{/* Data Gurus Pvt Ltd Experience */}
// 					<article className={career.company}>
// 						<div className={career.companyContent}>
// 							<span className={career.companyHeader}>
// 								<h3>Data Gurus Pvt Ltd</h3>
// 								<h4>Permanent Full-time</h4>
// 								<h4>Oct 2022 – Present</h4>
// 								<h5>Frankfurt, Germany (Remote)</h5>
// 							</span>
// 							<p>
// 								Data Gurus Pvt Ltd is a data-driven company that focuses on delivering advanced data solutions. I spearheaded data science projects, handled big data, and developed scalable data infrastructures and machine learning models.
// 							</p>
// 						</div>
// 						<div className={career.companyAlt}></div>
// 					</article>

// 					{/* Positions at Data Gurus Pvt Ltd */}
// 					<article className={career.companyPositions}>
// 						{/* Data Engineer Position */}
// 						<div className={career.position}>
// 							<div className={career.positionContent}>
// 								<span className={career.positionHeader}>
// 									<h3>Data Engineer</h3>
// 									<h4>Oct 2022 - Present</h4>
// 								</span>
// 								<p>
// 									Managed a scalable data infrastructure, integrating data lakes and warehouses with PySpark, DataBricks, and PostgreSQL, and developed ETL pipelines for optimized data flow. Spearheaded data projects focused on solar panels and vending machines, reducing latency by 30%.
// 								</p>
// 								<ul className={career.list}>
// 									<li>Developed interactive dashboards using Dash and Streamlit in Python for data visualization.</li>
// 									<li>Managed fault prediction and anomaly detection models for electric company devices, improving monitoring.</li>
// 									<li>Integrated RAG and LLM technologies to enhance AI-driven projects and processes.</li>
// 								</ul>
// 								<Badges list={dataEngineerStack} block="stack" fullContainer="fullContainer"/>
// 							</div>
// 							<div className={career.positionAlt}></div>
// 						</div>

// 						{/* Software Engineer Position */}
// 						<div className={career.position}>
// 							<div className={career.positionContent}>
// 								<span className={career.positionHeader}>
// 									<h3>Software Engineer</h3>
// 									<h4>Jun 2021 - Oct 2022</h4>
// 								</span>
// 								<p>
// 									Optimized backend systems written in Python and Java, leading to increased performance and reliability. Designed and maintained core databases, including Postgres, SQL, and MongoDB, for handling large-scale data.
// 								</p>
// 								<ul className={career.list}>
// 									<li>Engineered scalable data infrastructure using PySpark and DataBricks, reducing resource consumption.</li>
// 									<li>Implemented CI/CD tools and managed AWS services such as EC2, EBS, and S3 for efficient software delivery.</li>
// 									<li>Collaborated with senior developers to integrate machine learning models into production systems.</li>
// 								</ul>
// 								<Badges list={softwareEngineerStack} block="stack" fullContainer="fullContainer"/>
// 							</div>
// 							<div className={career.positionAlt}></div>
// 						</div>
// 					</article>

// 					{/* Pay Analog LTD Experience */}
// 					<article className={career.company}>
// 						<div className={career.companyContent}>
// 							<span className={career.companyHeader}>
// 								<h3>Pay Analog LTD</h3>
// 								<h4>Technical Project Manager</h4>
// 								<h4>May 2022 – Oct 2022</h4>
// 								<h5>UAE (Remote)</h5>
// 							</span>
// 							<p>
// 								Led integration and enhancement of multiple modules, including EPRS, Airalo, Kiwi API, and Netflix. Directed UI, Frontend, and Backend development, managed API integration, and implemented DevOps practices, driving SaaS product expansion.
// 							</p>
// 						</div>
// 						<div className={career.companyAlt}></div>
// 					</article>

// 					{/* Cyfer Solutions Experience */}
// 					<article className={career.company}>
// 						<div className={career.companyContent}>
// 							<span className={career.companyHeader}>
// 								<h3>Cyfer Solutions</h3>
// 								<h4>Python Developer</h4>
// 								<h4>July 2021 – Feb 2022</h4>
// 								<h5>Islamabad, Pakistan</h5>
// 							</span>
// 							<p>
// 								Developed web applications using Django for backend and React for frontend. Applied machine learning techniques to deliver impactful data insights and developed web scraping automation tools to enhance data acquisition.
// 							</p>
// 						</div>
// 						<div className={career.companyAlt}></div>
// 					</article>

// 					{/* Graysol LLC Experience */}
// 					<article className={career.company}>
// 						<div className={career.companyContent}>
// 							<span className={career.companyHeader}>
// 								<h3>Graysol LLC</h3>
// 								<h4>Project Manager</h4>
// 								<h4>Aug 2019 – Present</h4>
// 								<h5>Islamabad, Pakistan</h5>
// 							</span>
// 							<p>
// 								Managed a team of software developers, overseeing the entire software development life cycle from lead generation to project delivery. Contributed to Web and Data Science projects, delivering solutions to over 30 US businesses.
// 							</p>
// 						</div>
// 						<div className={career.companyAlt}></div>
// 					</article>

// 					{/* Neuro Informatics Research Lab Experience */}
// 					<article className={career.company}>
// 						<div className={career.companyContent}>
// 							<span className={career.companyHeader}>
// 								<h3>Neuro Informatics Research Lab</h3>
// 								<h4>EE Research Assistant</h4>
// 								<h4>June 2021 – Jan 2022</h4>
// 								<h5>Islamabad, Pakistan</h5>
// 							</span>
// 							<p>
// 								Worked on a project funded by HEC, developing and testing hardware to collect EEG signals from the human brain. Published a research paper in IEEE and applied knowledge of Digital Signal Processing and Machine Learning.
// 							</p>
// 						</div>
// 						<div className={career.companyAlt}></div>
// 					</article>
// 				</section>
// 			</Container>
// 		</Section>
// 	)
// }

// // Technology stacks for different roles
// const dataEngineerStack = [
// 	{ key: 'python', name: 'Python', type: 'devicon' },
// 	{ key: 'sql', name: 'SQL', type: 'devicon' },
// 	{ key: 'spark', name: 'Apache Spark', type: 'devicon' },
// 	{ key: 'aws', name: 'AWS', type: 'devicon' },
// 	{ key: 'databricks', name: 'DataBricks', type: 'devicon' },
// 	{ key: 'docker', name: 'Docker', type: 'devicon' },
// ]

// const softwareEngineerStack = [
// 	{ key: 'python', name: 'Python', type: 'devicon' },
// 	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
// 	{ key: 'django', name: 'Django', type: 'devicon' },
// 	{ key: 'react', name: 'React', type: 'devicon' },
// 	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
// 	{ key: 'aws', name: 'AWS', type: 'devicon' },
// 	{ key: 'azure', name: 'Azure', type: 'devicon' },
// 	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
// ]



// // ------- v3 -----


// Core packages
import Image from 'next/image'
import Badges from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I have extensive experience in software engineering, data science, and machine learning, contributing to various projects across multiple industries."
				/>
				<section className={career.area}>
					{/* Data Gurus Pvt Ltd Experience */}
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Data Gurus Pvt Ltd</h3>
								<h4>Permanent Full-time</h4>
								<h4>Oct 2022 – Present</h4>
								<h5>Frankfurt, Germany (Remote)</h5>
							</span>
							<p>
								Data Gurus Pvt Ltd is a data-driven company that focuses on delivering advanced data solutions. I spearheaded data science projects, handled big data, and developed scalable data infrastructures and machine learning models.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					{/* Positions at Data Gurus Pvt Ltd */}
					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Data Engineer</h3>
									<h4>Oct 2022 - Present</h4>
								</span>
								<p>
									Managed a scalable data infrastructure, integrating data lakes and warehouses with PySpark, DataBricks, and PostgreSQL, and developed ETL pipelines for optimized data flow. Spearheaded data projects focused on solar panels and vending machines, reducing latency by 30%.
								</p>
								<p>Some key projects completed during this time 👇</p>
								<ul className={career.list}>
									<li>
										Developed interactive dashboards using Dash and Streamlit in Python for data visualization
										<span className={career.subList}><span className={career.bullet}></span>Enhanced data insights by 25%</span>
									</li>
									<li>
										Managed fault prediction and anomaly detection models for electric company devices, improving monitoring
										<span className={career.subList}><span className={career.bullet}></span>Reduced device failure rates by 40%</span>
									</li>
									<li>
										Integrated RAG and LLM technologies to enhance AI-driven projects and processes
										<span className={career.subList}><span className={career.bullet}></span>Improved data processing efficiency by 35%</span>
									</li>
								</ul>
								<Badges list={dataEngineerStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						{/* Software Engineer Position */}
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Software Engineer</h3>
									<h4>Jun 2021 - Oct 2022</h4>
								</span>
								<p>
									Optimized backend systems written in Python and Java, leading to increased performance and reliability. Designed and maintained core databases, including Postgres, SQL, and MongoDB, for handling large-scale data.
								</p>
								<p>Some key projects completed during this time 👇</p>
								<ul className={career.list}>
									<li>
										Engineered scalable data infrastructure using PySpark and DataBricks
										<span className={career.subList}><span className={career.bullet}></span>Achieved a 40% reduction in data processing time</span>
									</li>
									<li>
										Implemented CI/CD tools and managed AWS services such as EC2, EBS, and S3
										<span className={career.subList}><span className={career.bullet}></span>Reduced deployment times by 50%</span>
									</li>
									<li>
										Collaborated with senior developers to integrate machine learning models
										<span className={career.subList}><span className={career.bullet}></span>Improved model integration accuracy by 15%</span>
									</li>
								</ul>
								<Badges list={softwareEngineerStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					{/* Additional Experiences */}
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Pay Analog LTD</h3>
								<h4>Technical Project Manager</h4>
								<h4>May 2022 – Oct 2022</h4>
								<h5>UAE (Remote)</h5>
							</span>
							<p>
								Led integration and enhancement of multiple modules, including EPRS, Airalo, Kiwi API, and Netflix. Directed UI, Frontend, and Backend development, managed API integration, and implemented DevOps practices, driving SaaS product expansion.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Cyfer Solutions</h3>
								<h4>Python Developer</h4>
								<h4>July 2021 – Feb 2022</h4>
								<h5>Islamabad, Pakistan</h5>
							</span>
							<p>
								Developed web applications using Django for backend and React for frontend. Applied machine learning techniques to deliver impactful data insights and developed web scraping automation tools to enhance data acquisition.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Graysol LLC</h3>
								<h4>Project Manager</h4>
								<h4>Aug 2019 – Present</h4>
								<h5>Islamabad, Pakistan</h5>
							</span>
							<p>
								Managed a team of software developers, overseeing the entire software development life cycle from lead generation to project delivery. Contributed to Web and Data Science projects, delivering solutions to over 30 US businesses.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Neuro Informatics Research Lab</h3>
								<h4>EE Research Assistant</h4>
								<h4>June 2021 – Jan 2022</h4>
								<h5>Islamabad, Pakistan</h5>
							</span>
							<p>
								Worked on a project funded by HEC, developing and testing hardware to collect EEG signals from the human brain. Published a research paper in IEEE and applied knowledge of Digital Signal Processing and Machine Learning.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

// Technology stacks for different roles
const dataEngineerStack = [
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'sql', name: 'SQL', type: 'devicon' },
	{ key: 'spark', name: 'Apache Spark', type: 'devicon' },
	{ key: 'aws', name: 'AWS', type: 'devicon' },
	{ key: 'databricks', name: 'DataBricks', type: 'devicon' },
	{ key: 'docker', name: 'Docker', type: 'devicon' },
]

const softwareEngineerStack = [
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'django', name: 'Django', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'aws', name: 'AWS', type: 'devicon' },
	{ key: 'azure', name: 'Azure', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
]
