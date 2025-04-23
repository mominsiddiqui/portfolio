import React, { useState } from 'react';
import styles from '../Block.module.css';
import './index.css'; // We'll create this file for custom styling

const MainContent = () => {
  const [tooltipContent, setTooltipContent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (content, e) => {
    setTooltipContent(content);
    setTooltipPosition({ x: e.clientX+50, y: e.clientY});
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  const tooltipData = {
    HCI: { image: "/chi25ss.png", author: "Momin N. Siddiqui, Roy Pea, Hari Subramonyam",
          title: "“Script&Shift: A Layered Interface Paradigm for Integrating Content Development and Rhetorical Strategy with LLM Writing Assistants.” Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI 2025)"
     },
     AI: { image: "/tutorgym.png", author: "Daniel Weitekamp*, Momin N. Siddiqui*, Chris MacLellan",
      title: "“TutorGym: A Testbed for Evaluating AI Agents as Tutors and Students.” Proceedings of the International Conference on Artificial Intelligence in Education (AIED 2025)."
    },
      Learning_Sciences: { image: "/kt.png", author: "Momin N. Siddiqui, Vryan Feliciano, Roy Pea, Hari Subramonyam",
          title: "“AI in the Writing Process: How Purposeful AI Support Fosters Student Writing.” Proceedings of the International Conference on Artificial Intelligence in Education (AIED 2025)."
     },
    // AI: { image: "/ai-icon.png", text: "Artificial Intelligence" },
    // "Learning Sciences": { image: "/learning-icon.png", text: "Learning Sciences" }
  };

  return (
    <div className={`${styles.block} ${styles.blockB} intro-container`}>
      <div className="content-wrapper noto-sans-regular">
        <div className="main-heading">Hi, I am <span className="highlight">Momin Siddiqui</span>!</div>
        
        <div className="sub-heading">I am an MS CS student at <img src="/gt.png" alt="Georgia Tech logo" className="gt-logo" /></div>
        
        <div className="sub-heading">My research intersects <span 
          className="underline" 
          onMouseEnter={(e) => handleMouseEnter(tooltipData.HCI, e)}
          onMouseLeave={handleMouseLeave}
        >HCI</span>, <span 
          className="underline"
          onMouseEnter={(e) => handleMouseEnter(tooltipData.AI, e)}
          onMouseLeave={handleMouseLeave}
        >AI</span> <span>and </span>  
        <span 
          className="underline"
          onMouseEnter={(e) => handleMouseEnter(tooltipData["Learning_Sciences"], e)}
          onMouseLeave={handleMouseLeave}
        >Learning Sciences</span></div>
        
        <div className="advisor-section">
          <p>Advisors: Chris MacLellan, Hari Subramonyam</p>
        </div>
      </div>

      {tooltipContent && (
        <div 
          className="tooltip-box"
          style={{ 
            left: `${tooltipPosition.x}px`, 
            top: `${tooltipPosition.y}px`,
          }}
        >
          {/* <div className="tooltip-image">
            <img src={tooltipContent.image} alt="Icon" />
          </div>
          <div className="tooltip-text">
            {tooltipContent.text}
          </div> */}
          <div className="tooltip-wrap">
            <div className="tooltip-shadow"></div>
            <div className="tooltip-inner">
                <div className="tooltip-image-column">
                  <img src={tooltipContent.image} alt="Icon" />
                </div>
                <div className="tooltip-text-column">
                  <div style={{padding: "0.8em"}}>
                    <span>{tooltipContent.author}</span>
                    <span>{tooltipContent.title}</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent; 