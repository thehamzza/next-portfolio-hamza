import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';
import Icon from '../../utils/icon.util';
import css from '../../../styles/sections/articles/recent.module.scss';
import buttonStyles from '../../../styles/blocks/button.module.scss'; // Import button styles
import button 		from '../../../styles/blocks/button.module.scss';

import content		from '../../../content/index/hero.json'


// Utility function to extract the image URL from the description
const extractImageFromDescription = (description) => {
  const regex = /<img[^>]+src="([^">]+)"/g;
  const match = regex.exec(description);
  return match ? match[1] : '/img/hamza-article-fallback-image.png'; // Fallback image path
};

export default function Recent({ mediumArticles }) {
  const feed = mediumArticles.feed;
  const articles = mediumArticles.items;

  return (
    <Section classProp="borderBottom">arx
      <Container spacing={'verticalXXXXLrg'}>
        <SectionTitle
          title="Recent Articles"
          preTitle="Informative"
          subTitle="A personal quest to become a better technical writer. I write about AI, machine learning, and web development."
        />

       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-80px', marginBottom: '-50px' }}>
        <button
          className={`button ${button.primary} leaveSite`}
          onClick={() => window.open("https://medium.com/@the.hamza", "_blank")}>
          {'Read on Medium'}
        </button>
      </div>


        <section className={css.projects}>
          {articles.map(({ title, pubDate, link, author, thumbnail, description, categories }, index) => {
            const date = new Date(pubDate).toDateString();

            // Use the thumbnail if it's available, otherwise extract it from the description
            const imageUrl = thumbnail ? thumbnail : extractImageFromDescription(description);

            return (
              <article key={index} className={css.project}>
                <span className={css.featuredImage}>
                  <img src={imageUrl} alt="Article thumbnail" />
                </span>
                <span className={css.header}>
                  <a href={link} rel="noreferrer" target="_blank">
                    {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                  </a>
                </span>
                <span className={css.descriptionContainer}></span>
                <span className={css.details}>
                  <p>By {author}</p>
                  <p className={css.pushedAt}>{date}</p>
                </span>
                <span className={css.topicsContainer}>
                  {categories.map((e, index) => (
                    <span key={index} className={css.topics}>
                      <Icon icon={['fab', 'medium']} /> {e}
                    </span>
                  ))}
                </span>
              </article>
            );
          })}
        </section>
      </Container>
    </Section>
  );
}
