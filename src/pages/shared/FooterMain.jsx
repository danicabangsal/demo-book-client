
import { Footer } from 'flowbite-react';

const FooterMain = () => {
  return (
    <Footer container className="bg-[#181A2D] text-gray-100">
      <div className="w-full px-4 lg:px-24 py-10 space-y-6 text-sm leading-relaxed">
        <p>
          "We acknowledge we are gathered on Treaty 1 Territory and that Manitoba is located on the Treaty Territories
          and ancestral lands of the Anishinaabeg, Anishininewuk, Dakota Oyate, Denesuline and Nehethowuk Nations. We
          acknowledge Manitoba is located on the Homeland of the Red River Métis. We acknowledge northern Manitoba
          includes lands that were and are the ancestral lands of the Inuit. We respect the spirit and intent of
          Treaties and Treaty Making and remain committed to working in partnership with First Nations, Inuit and Métis
          people in the spirit of truth, reconciliation and collaboration."
        </p>
        <Footer.Divider className="bg-gray-700" />
        <p className="text-center text-xs uppercase tracking-wide">
          Website created by Danica Bangsal
        </p>
      </div>
    </Footer>
  )
}

export default FooterMain;
