import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';
import Icon from '../../utils/icon.util';
import css from '../../../styles/sections/articles/recent.module.scss'; // Using the same styles as articles
import button from '../../../styles/blocks/button.module.scss';

export default function Contact() {
  return (
    <Section classProp="borderBottom">
      <Container spacing={'verticalXXXXLrg'}>
        <SectionTitle
          title="Contact Me"
          preTitle="Get in Touch"
          subTitle="Feel free to reach out for collaborations, freelance opportunities, or just a chat."
        />

        {/* Buttons Section */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-80px', marginBottom: '-50px', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
		<button
            className={`button ${button.primary}`}
            onClick={() => window.open("https://calendly.com/hamzza/30min", "_blank")}>
            <Icon icon={['fad', 'handshake']} /> Book Meeting 
          </button>
		  <button
            className={`button ${button.primary}`}
            onClick={() => window.open("mailto:its.hamza100@gmail.com", "_blank")}>
            <Icon icon={['fas', 'envelope']} /> Email
          </button>
		  <button
            className={`button ${button.primary}`}
            onClick={() => window.open("tel:+923046685004", "_blank")}>
            <Icon icon={['fad', 'phone']} /> Phone
          </button>
		  <button
            className={`button ${button.primary}`}
            onClick={() => window.open("https://www.linkedin.com/in/muhammad-hamza-shakoor/", "_blank")}>
            <Icon icon={['fab', 'linkedin']} /> LinkedIn
          </button>
		  <button
            className={`button ${button.primary}`}
            onClick={() => window.open("https://github.com/thehamzza", "_blank")}>
            <Icon icon={['fab', 'github']} /> GitHub
          </button>
		  <button
            className={`button ${button.primary}`}
            onClick={() => window.open("https://wa.me/+923046685004", "_blank")}>
            <Icon icon={['fab', 'whatsapp']} /> WhatsApp
          </button>
		  <button
            className={`button ${button.primary}`}
            onClick={() => window.open("https://medium.com/@the.hamza", "_blank")}>
            <Icon icon={['fab', 'medium']} /> Medium
          </button>
		  <button
            className={`button ${button.primary}`}
            onClick={() => window.open("https://www.upwork.com/freelancers/~019f4a4d5b9a3239e0", "_blank")}>
            <Icon icon={['fab', 'upwork']} /> Upwork
          </button>
		  <button
            className={`button ${button.primary}`}
            onClick={() => window.open("https://www.fiverr.com/itshamza100", "_blank")}>
            <Icon icon={['fal', 'fiverr']} /> Fiverr
          </button>
         
        </div>
      </Container>
    </Section>
  );
}
