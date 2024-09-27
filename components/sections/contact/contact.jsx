// import Section from '../../structure/section';
// import Container from '../../structure/container';
// import SectionTitle from '../../blocks/section.title.block';
// import Icon from '../../utils/icon.util';
// import css from '../../../styles/sections/articles/recent.module.scss'; // Using the same styles as articles
// import button from '../../../styles/blocks/button.module.scss';

//   return (
//     <Section classProp="borderBottom">
//       <Container spacing={'verticalXXXXLrg'}>
//         <SectionTitle
//           title="Contact Me"
//           preTitle="Get in Touch"
//           subTitle="Feel free to reach out for collaborations, freelance opportunities, or just a chat."
//         />

//         {/* Buttons Section */}
//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-80px', marginBottom: '-50px', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
// 		<button
//             className={`button ${button.primary}`}
//             onClick={() => window.open("https://calendly.com/hamzza/30min", "_blank")}>
//             <Icon icon={['fad', 'handshake']} /> Book Meeting 
//           </button>
// 		  <button
//             className={`button ${button.primary}`}
//             onClick={() => window.open("mailto:its.hamza100@gmail.com", "_blank")}>
//             <Icon icon={['fas', 'envelope']} /> Email
//           </button>
// 		  <button
//             className={`button ${button.primary}`}
//             onClick={() => window.open("tel:+923046685004", "_blank")}>
//             <Icon icon={['fad', 'phone']} /> Phone
//           </button>
// 		  <button
//             className={`button ${button.primary}`}
//             onClick={() => window.open("https://www.linkedin.com/in/muhammad-hamza-shakoor/", "_blank")}>
//             <Icon icon={['fab', 'linkedin']} /> LinkedIn
//           </button>
// 		  <button
//             className={`button ${button.primary}`}
//             onClick={() => window.open("https://github.com/thehamzza", "_blank")}>
//             <Icon icon={['fab', 'github']} /> GitHub
//           </button>
// 		  <button
//             className={`button ${button.primary}`}
//             onClick={() => window.open("https://wa.me/+923046685004", "_blank")}>
//             <Icon icon={['fab', 'whatsapp']} /> WhatsApp
//           </button>
// 		  <button
//             className={`button ${button.primary}`}
//             onClick={() => window.open("https://medium.com/@the.hamza", "_blank")}>
//             <Icon icon={['fab', 'medium']} /> Medium
//           </button>
// 		  <button
//             className={`button ${button.primary}`}
//             onClick={() => window.open("https://www.upwork.com/freelancers/~019f4a4d5b9a3239e0", "_blank")}>
//             <Icon icon={['fab', 'upwork']} /> Upwork
//           </button>
// 		  <button
//             className={`button ${button.primary}`}
//             onClick={() => window.open("https://www.fiverr.com/itshamza100", "_blank")}>
//             <Icon icon={['fal', 'fiverr']} /> Fiverr
//           </button>
         
//         </div>
//       </Container>
//     </Section>
//   );
// }



//----- v2 ----

// Import necessary React hooks and components
import { useEffect } from 'react'; // Import useEffect to handle the page refresh logic
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';
import Icon from '../../utils/icon.util';
import button from '../../../styles/blocks/button.module.scss'; // Import button styles

// Define the Contact component
export default function Contact() {
  // useEffect hook to handle the page refresh logic
  useEffect(() => {
    if (!sessionStorage.getItem('contactPageRefreshed')) {
      sessionStorage.setItem('contactPageRefreshed', 'true');
      window.location.reload();
    }
  }, []); // Empty dependency array means this will run only once when the component mounts

  // Adjusted button width
  const buttonWidth = '220px'; 

  return (
    <Section classProp="borderBottom">
      <Container spacing={'verticalXXXXLrg'}>
        {/* Title and subtitle for the Contact page */}
        <SectionTitle
          title="Contact Me"
          preTitle="Get in Touch"
          subTitle="Feel free to reach out for collaborations, freelance opportunities, or just a chat."
        />

        {/* Container for contact buttons */}
        <div 
          style={{
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '-80px', 
            marginBottom: '-50px', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '20px',
            width: '100%', 
          }}
        >
          {/* Array of contact details */}
          {[
            { label: 'Book Meeting', link: "https://calendly.com/hamzza/30min", icon: ['fad', 'handshake'] },
            { label: 'Email', link: "mailto:its.hamza100@gmail.com", icon: ['fas', 'envelope'] },
            { label: 'Phone', link: "tel:+923046685004", icon: ['fad', 'phone'] },
            { label: 'LinkedIn', link: "https://www.linkedin.com/in/muhammad-hamza-shakoor/", icon: ['fab', 'linkedin'] },
            { label: 'GitHub', link: "https://github.com/thehamzza", icon: ['fab', 'github'] },
            { label: 'WhatsApp', link: "https://wa.me/+923046685004", icon: ['fab', 'whatsapp'] },
            { label: 'Medium', link: "https://medium.com/@the.hamza", icon: ['fab', 'medium'] },
            { label: 'Upwork', link: "https://www.upwork.com/freelancers/~019f4a4d5b9a3239e0", icon: ['fab', 'upwork'] },
            { label: 'Fiverr', link: "https://www.fiverr.com/itshamza100", icon: ['fal', 'fiverr'] }
          ].map(({ label, link, icon }, index) => (
            <button
              key={index}
              className={`button ${button.primary}`} // Use the existing primary button class
              onClick={() => window.open(link, "_blank")}
              style={{
                minWidth: buttonWidth, // Ensures all buttons have the same width
                maxWidth: buttonWidth,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0073e6', // Set your desired background color
                color: '#ffffff', // Adjust text color to white for better contrast
                textAlign: 'center',
                borderRadius: '50px', 
                border: 'none', // Remove border if needed
              }}
            >
              <Icon icon={icon} /> {label}
            </button>
          ))}
        </div>
      </Container>
    </Section>
  );
}
