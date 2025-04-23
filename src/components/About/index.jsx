import React from 'react';
import Header from '../Header';
import styles from '../Layout.module.css';
import './index.css';

const About = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.row}>
        <Header />
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className="about-container block">
            <div className="main-text">
              <p>
                I am an MS CS student at Georgia Tech advised by <a href="https://chrismaclellan.com/" className="professor-name">Dr. Christopher MacLellan</a>, working on intelligent tutors and cognitive systems. 
                Previously I worked as a research assistant at Stanford HAI advised by <a href="https://haridecoded.com/" className="professor-name">Dr. Hariharan Subramonyam</a>, working on learning engineering and intelligent writing systems. 
              </p>              
              <p>
                I want to learn how to leverage design and AI to build accessible and effective educational technologies. And I want to use these tools to formulate models of student learning.
              </p>
            </div>

            <div className="highlights">
              <div className="highlight-section">
              <div className="button-wrap" style={{fontSize: '0.6em'}}>
                  <button>
                    <span>RECENT PAPERS</span>
                  </button>
                  <div className="button-shadow"></div>
                </div>
                <div className="highlight-content">
                  <p><strong>[1]</strong> <strong>Momin N. Siddiqui</strong>, Roy Pea, Hari Subramonyam. “Script&Shift: A Layered Interface Paradigm for Integrating Content Development and Rhetorical Strategy with LLM Writing Assistants.” Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI 2025)</p>
                  <p><strong>[2]</strong> <strong>Momin N. Siddiqui</strong>, Vryan Feliciano, Roy Pea, Hari Subramonyam. “AI in the Writing Process: How Purposeful AI Support Fosters Student Writing.” Proceedings of the International Conference on Artificial Intelligence in Education (AIED 2025)</p>
                  <p><strong>[3]</strong> Daniel Weitekamp*, <strong>Momin N. Siddiqui</strong>*,  Chris MacLellan. “TutorGym: A Testbed for Evaluating AI Agents as Tutors and Students.” Proceedings of the International Conference on Artificial Intelligence in Education (AIED 2025)</p>
                </div>
              </div>

              <div className="highlight-section">
                <div className="button-wrap" style={{fontSize: '0.6em', fontFamily: 'Open Sans'}}>
                  <button>
                    <span>RECENT AWARDS</span>
                  </button>
                  <div className="button-shadow"></div>
                </div>
                <div className="highlight-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p>🏆 CHI Best Paper Honorable Mention (Top 5%), 2025</p>             
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p>🏆 Georgia Tech Foley Scholar Award, 2024</p>       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 