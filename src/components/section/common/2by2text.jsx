import React from 'react';

const TwoByTwoText = ({ sections }) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full border border-gray-300 flex items-center justify-center mb-6">
                <span className="text-xl font-medium">{section.icon}</span>
              </div>
              <h3 className="text-lg font-medium mb-4">{section.title}</h3>
              <p className="text-gray-600 text-center max-w-md">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoByTwoText;