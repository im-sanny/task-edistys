import {
  Book,
  Camera,
  Coffee,
  Gift,
  Headphones,
  Laptop,
  PlayCircle,
  Shirt,
  ShoppingBag,
  Smartphone,
  Store,
  Watch,
} from 'lucide-react';
import React from 'react';
interface MyComponentProp {
  Icon: React.ElementType;
  label: string;
}

const PartnerIcon: React.FC<MyComponentProp> = ({ Icon, label }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group min-w-[160px]">
    <Icon
      className="w-12 h-12 text-blue-600 group-hover:text-blue-800 mb-2 transition-colors"
      strokeWidth={1.5}
    />
    <p className="text-sm text-gray-600 text-center">{label}</p>
  </div>
);

const Company = () => {
  const PARTNER_ICONS = [
    { Icon: Store, label: 'Retro Brands' },
    { Icon: PlayCircle, label: 'PlayStation' },
    { Icon: Shirt, label: 'Kids Fashion' },
    { Icon: Gift, label: 'Online Gifts' },
    { Icon: ShoppingBag, label: 'Gift Emporium' },
    { Icon: Coffee, label: 'Starbucks' },
    { Icon: Laptop, label: 'Tech Hub' },
    { Icon: Headphones, label: 'Audio World' },
    { Icon: Smartphone, label: 'Mobile Zone' },
    { Icon: Book, label: 'Book Haven' },
    { Icon: Camera, label: 'Photo Studio' },
    { Icon: Watch, label: 'Time Gallery' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Mobile Scrollable View */}
        <div className="lg:hidden overflow-x-auto pb-6">
          <div className="flex space-x-4 w-max">
            {PARTNER_ICONS.map(({ Icon, label }, index) => (
              <PartnerIcon key={index} Icon={Icon} label={label} />
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-4 gap-6 max-w-7xl mx-auto">
          {PARTNER_ICONS.map(({ Icon, label }, index) => (
            <PartnerIcon key={index} Icon={Icon} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
