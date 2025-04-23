import React from 'react';
import Header from '../Header';
import styles from '../Layout.module.css';
import './index.css';

const Publications = () => {
  const publications = [
    {
      thumbnail: "/chi25ss.png",
      title: "Script&Shift: A Layered Interface Paradigm for Integrating Content Development and Rhetorical Strategy with LLM Writing Assistants",
      conference: "CHI'25",
      authors: "<b>Momin N. Siddiqui</b>, Roy Pea, Hariharan Subramonyam"
    },
    {
      thumbnail: "/kt.png",
      title: "AI in the Writing Process: How Purposeful AI Support Fosters Student Writing",
      conference: "AIED'25",
      authors: "<b>Momin N. Siddiqui</b>, Vryan Feliciano, Roy Pea, Hariharan Subramonyam"
    },
    {
      thumbnail: "/tutorgym.png",
      title: "TutorGym: A Testbed for Evaluating AI Agents as Tutors and Students",
      conference: "AIED'25",
      authors: "Daniel Weitekamp*, <b>Momin N.Siddiqui</b>*, Christopher MacLellan"
    },

    {
      thumbnail: "/htn.png",
      title: "HTN-Based Tutors: A New Intelligent Tutoring Framework Based on Hierarchical Task Networks",
      conference: "L@S'24",
      authors: "<b>Momin N. Siddiqui</b>, Adit Gupta, Jennifer Reddig, Christopher MacLellan"
    },
    {
      thumbnail: "/engageme.png",
      title: "EngageME: Exploring Neuropsychological Tests for Assessing Attention in Online Learning",
      conference: "AIED'24",
      authors: "Saumya Yadav, <b>Momin N. Siddiqui</b>, Yash Vats, Jainendra Shukla"
    }
  ];

  return (
    <div className={styles.layout}>
      <div className={styles.row}>
        <Header />
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className="publications-container block">
            {publications.map((pub, index) => (
              <div key={index} className="publication-row">
                <div className="icon-wrap">
                  <button>
                    <span>
                      <div className="icon-shadow"></div>
                      <div className="thumbnail">
                        <img src={pub.thumbnail} alt={`Thumbnail for ${pub.title}`} />
                      </div>
                    </span>
                  </button>                  
                </div>                
                
                <div className="publication-details">
                  <h2>{pub.title} [{pub.conference}]</h2>
                  <p dangerouslySetInnerHTML={{ __html: pub.authors }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications; 