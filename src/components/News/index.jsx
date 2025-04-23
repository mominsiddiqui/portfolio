import React from 'react';
import styles from '../Block.module.css';
import './index.css';

const News = () => {
  // Sample news data - you can replace this with your actual data
  const newsItems = [
    {
      id: 1,
      date: "APRIL 2025",
      description: "TutorGym and AI in Writing Process accepted for AIED 2025!"
    },
    {
      id: 2,
      date: "MARCH 2025",
      description: "🏆 Script&Shift received Honorable Mention at CHI 2025!"
    },
    {
      id: 3,
      date: "JANUARY 2025",
      description: "Script&Shift accepted for CHI 2025!"
    },
    // {
    //   id: 4,
    //   date: "NOVEMBER 2024",
    //   description: "🏆 Recognized as Foley Scholar Fellow!"
    // },
    // {
    //   id: 5,
    //   date: "MAY 2024",
    //   description: "HTN-Tutor accepted for Learning @ Scale 2024!"
    // },
    // {
    //     id: 6,
    //     date: "MARCH 2024",
    //     description: "EngageMe accepted for AIED 2024!"
    //   }
  ];

  return (
    <div className={`${styles.block}`}>      
      <div className="news-container">
        <div className="news-title">NEWS</div>
        <div className="news-cards">
          {newsItems.map(item => (
              <div className="news-wrap" key={item.id}>
                <button>
                  <span>
                    <div className="news-shadow"></div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                      <div style={{fontFamily: 'Open Sans', fontWeight: 700}}>{item.date}</div>
                      <div style={{fontSize: '1em'}}>
                        {item.description.split(/(TutorGym|AI in Writing Process|Script&Shift|EngageMe|HTN-Tutor)/).map((part, index) => 
                          ['TutorGym', 'AI in Writing Process', 'Script&Shift', 'EngageMe', 'HTN-Tutor'].includes(part) ? 
                            <em key={index}>{part}</em> : 
                            part
                        )}
                      </div>
                    </div>
                    
                  </span>
                </button>                  
              </div>              
          ))}
        </div>
      </div>
    </div>
  );
};

export default News; 