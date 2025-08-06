import Slideout from "@divaastra/components/drawer/Slideout";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface DrawerContent {
  title?: string;
  content: ReactNode;
  position?: "left" | "right" | "top" | "bottom";
  width?: string;
  height?: string;
}

interface DrawerContextType {
  openDrawer: (content: DrawerContent) => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerData, setDrawerData] = useState<DrawerContent | null>(null);

  const openDrawer = (content: DrawerContent) => {
    setDrawerData(content);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setTimeout(() => setDrawerData(null), 300); // Delay reset for animation
  };

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
      {children}

      {/* Global Slideout */}
      {drawerData && (
        <Slideout
          isOpen={isOpen}
          onClose={closeDrawer}
          title={drawerData.title}
          position={drawerData.position || "right"}
          width={drawerData.width || "w-80"}
          height={drawerData.height || "h-full"}
        >
          {drawerData.content}
        </Slideout>
      )}
    </DrawerContext.Provider>
  );
};

export const useDrawer = (): DrawerContextType => {
  const context = useContext(DrawerContext);
  if (!context) throw new Error("useDrawer must be used inside DrawerProvider");
  return context;
};

// App.tsx;
// tsx;
// Copy;
// Edit;
// import React from "react";
// import { DrawerProvider } from "./components/DrawerContext";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <DrawerProvider>
//       <Home />
//     </DrawerProvider>
//   );
// }

// export default App;

// Home.tsx;
// tsx;
// Copy;
// Edit;
// import React from "react";
// import { useDrawer } from "../components/DrawerContext";

// const Home: React.FC = () => {
//   const { openDrawer } = useDrawer();

//   const openSettingsDrawer = () => {
//     openDrawer({
//       title: "Settings",
//       content: (
//         <div>
//           <p>Change your settings here.</p>
//           <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
//             Save
//           </button>
//         </div>
//       ),
//       position: "right",
//     });
//   };

//   return (
//     <div className="p-6">
//       <button
//         onClick={openSettingsDrawer}
//         className="px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         Open Drawer
//       </button>
//     </div>
//   );
// };

// export default Home;

// ✅ Now you have:
// ✔️ A global Drawer Manager
// ✔️ You can open any drawer with custom content from anywhere
// ✔️ Supports left, right, top, bottom slideouts
// ✔️ No prop drilling
