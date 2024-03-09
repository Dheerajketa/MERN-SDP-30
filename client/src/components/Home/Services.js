import React from 'react';

const services = [
  {
    id: 1,
    name: 'Digital Banking',
    items: [
      'Bank & savings accounts',
      'Credit cards',
      'Personal loans'
    ],
    imageSrc: require('../../images/services/service-5.jpg'),
    imageAlt: 'Digital Banking',
  },
  {
    id: 2,
    name: 'Mobile & Web Banking',
    items: [
      'Instant Access',
      'Savings Fixed Term',
      'Instant Savings'
    ],
    imageSrc: require('../../images/services/service-6.jpg'),
    imageAlt: 'Mobile Banking',
  },
  {
    id: 3,
    name: 'Insurance Policies',
    items: [
      'Pet insurance',
      'Transport Insurance',
      'Accident insurance'
    ],
    imageSrc: require('../../images/services/service-7.jpg'),
    imageAlt: 'Insurance Policies',
  },
  {
    id: 4,
    name: 'Home & Property Loan',
    items: [
      'Residential Mortgages',
      'Buy-to-let Mortgages',
      'Building Mortgages'
    ],
    imageSrc: require('../../images/services/service-8.jpg'),
    imageAlt: 'Insurance Policies',
  },
  {
    id: 5,
    name: 'All Bank Account',
    items: [
      'Instant Access Savings',
      'Instant Access Cash',
      'Young Savers Account'
    ],
    imageSrc: require('../../images/services/service-9.jpg'),
    imageAlt: 'All Bank Account',
  },
  {
    id: 6,
    name: 'Borrowing Accounts',
    items: [
      'Card Credit Bank',
      'Setter personal loan',
      'Overdraft'
    ],
    imageSrc: require('../../images/services/service-10.jpg'),
    imageAlt: 'Borrowing Accounts',
  },
  {
    id: 7,
    name: 'Private Banking',
    items: [
      'Dedicated personal service',
      'Specialist teams',
      'Tailored products'
    ],
    imageSrc: require('../../images/services/service-11.jpg'),
    imageAlt: 'Account Bank All',
  },
  {
    id: 8,
    name: 'Fixed Term Accounts',
    items: [
      'Fixed Term Saving',
      'Fixed Rate Cash',
      'Resume your Current'
    ],
    imageSrc: require('../../images/services/service-12.jpg'),
    imageAlt: 'Fixed Term Accounts',
  },
  // Add more services as needed...
];

const Services = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 ">
        <h2 className="sr-only">Services</h2>

        <div className="grid grid-cols-1 gap-6 group sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md   transition-transform duration-300 transform group hover:scale-105"
            >
              <img
                src={service.imageSrc}
                alt={service.imageAlt}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
                <ul className="list-disc pl-5">
                  {service.items.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
