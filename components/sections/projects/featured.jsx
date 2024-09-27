import FeaturedProject from '../../blocks/projects/featured'
import button 		from '../../../styles/blocks/button.module.scss';


// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'
import Tabs from '../../blocks/projects/Tabs';

export default function FeaturedProjects() {

	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="Full Stack and AI"
					subTitle="Focused on the experience, driven by the engineering."
                    
				/> 		
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '-80px', marginBottom: '-50px' }}>
					<button
					className={`button ${button.primary} leaveSite`}
					onClick={() => window.open("https://github.com/thehamzza?tab=repositories", "_blank")}>
					{'Explore Github'}
					</button>
				</div>



				<Tabs currentCategory="all"/>
	        	{
				content.map( (data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})
				}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}