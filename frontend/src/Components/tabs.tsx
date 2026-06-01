import { useState } from "react";

const Tab1 = () => <div>Tab 1 conteent successful</div>;

const Tab2 = () => {
  throw new Error("Intensionally falling in error");
};

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div>Tabs</div>
      <div>
        <div>
          <button onClick={() => setActiveTab(0)}>Tab 1</button>
        </div>
        <div>
          <button onClick={() => setActiveTab(1)}>Tab 2</button>
        </div>
      </div>
      {!activeTab ? (
        <div>
          <Tab1 />
        </div>
      ) : (
        <div>
          Tab2 Content <Tab2 />
        </div>
      )}
    </div>
  );
};
