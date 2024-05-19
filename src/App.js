import React from "react";
import "styles/app.css";

function App() {
  return (
    <main className="home-interface">
      <h1>Harmony Verse</h1>

      <section className="home-interface__nav-section">
        <a href="https://lofi-generator.azurewebsites.net/" className="common-nav nav_1 nav_3--dark-child">
          <div className="dark-bg-theme">
            <span className="content">Lo-Fi Generator</span>
          </div>
        </a>

        <a href="https://emotion-based-music-recommendation.azurewebsites.net/" className="common-nav nav_2 nav_3--dark-child">
          <div className="dark-bg-theme">
            <span className="content">Emotion-based Music Recommendation</span>
          </div>
        </a>

        <a href="https://melody-synthesis.azurewebsites.net/" className="common-nav nav_3 nav_3--dark-child">
          <div className="dark-bg-theme">
            <span className="content">Melody Synthesizer</span>
          </div>
        </a>

        <a href="https://music-genre-classification.azurewebsites.net/" className="common-nav nav_4 nav_3--dark-child">
          <div className="dark-bg-theme">
            <span className="content">Music Genre Classifier</span>
          </div>
        </a>
      </section>
    </main>
  );
}

export default App;
