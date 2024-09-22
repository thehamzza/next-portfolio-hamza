import Contact from '../../components/sections/contact/contact';
import Color from '../../components/utils/page.colors.util';
import colors from '../../content/contact/_colors.json'; // Use the colors for the contact page

export default function ContactPage() {
  return (
    <>
      <Color colors={colors} />
      <Contact />
    </>
  );
}
