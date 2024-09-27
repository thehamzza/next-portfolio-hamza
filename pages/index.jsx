import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'
import Interest from "../components/sections/index/interest"
import Education from "../components/sections/index/education"
import Achievements from "../components/sections/index/achievements"


import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			{/* <Looking /> */}
			<About />
			<Technical />
			<Career />
			<Education/>
			<Achievements/>
			<Interest/>
		</>
	);
}