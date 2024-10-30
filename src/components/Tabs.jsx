import React, { useState } from 'react';
import './TabComponent.css';

const TabComponent = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState(1);

  // Tab content data
  const tabData = [
    {
      id: 1,
      title: 'Title 1',
      content: 'In sint do non adipisicing incididunt excepteur sit. Voluptate esse aliqua pariatur dolor ex occaecat sunt eu. Pariatur ullamco id dolore sint proident sint nostrud nisi sit id est. Duis et excepteur cupidatat sint nisi dolore qui irure qui in id excepteur irure laboris. Pariatur mollit duis cupidatat nisi Lorem non et in dolor aliquip ea sint aute. Dolore aute duis laboris exercitation occaecat sunt. Enim veniam Lorem do ipsum aliqua qui eu ipsum consectetur ex dolore ea ipsum.',
    },
    {
      id: 2,
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, metus nec tristique blandit, lorem elit ultricies lectus, vel consectetur urna purus ac orci.',
    },
    {
      id: 3,
      title: 'Title 3',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer feugiat elit et justo finibus, et luctus mauris lacinia.',
    },
    {
      id: 4,
      title: 'Title 4',
      content: 'Curabitur in elit justo. Vivamus aliquet feugiat eros at venenatis. Maecenas blandit ultrices magna, id cursus erat venenatis eget.',
    },
  ];

  // Function to handle tab click
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tab-container">
      {/* Tabs */}
      <div className="tabs">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          >
            {`Tab ${tab.id}`}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content">
        <h2 className="tab-title">{tabData[activeTab - 1].title}</h2>
        <p className="tab-paragraph">{tabData[activeTab - 1].content}</p>
      </div>
    </div>
  );
};

export default TabComponent;
