import FeaturedProject from '../../components/blocks/projects/featured'
import { useRouter } from 'next/router';
// Section structure
import Section 		from '../../components/structure/section';
import Container 	from '../../components/structure/container';
import SectionTitle from '../../components/blocks/section.title.block'
import css 			from '../../styles/sections/projects/featured.module.scss'
import content 		from '../../content/projects/featured.json'
import Tabs from '../../components/blocks/projects/Tabs';

export default function FeaturedProjects() {


 debugger;
    const router = useRouter();
    const { projects } = router.query;
    const filteredProjects = projects
  ? content.filter((proj) => Array.isArray(proj.category) && proj.category.includes(projects))
  : content;
	

	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="AI and Full Stack"
					subTitle="Focused on the experience, driven by the engineering."
				/> 		
                <Tabs currentCategory={projects}/>
	        	{
				filteredProjects.map( (data, index) => {
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