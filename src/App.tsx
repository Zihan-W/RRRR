import React from 'react';

function App() {
  const paperTitle = "RRRR: Rapid Real-World Residual RL for Multi-Task VLA Adaptation";
  const abstract = `Vision-Language-Action (VLA) foundation models demonstrate strong cross-task generalization, yet real-world robotic deployment often requires task-specific post-training alignment. Single-task fine-tuning risks overwriting pretrained knowledge, while multi-task joint training frequently suffers from distribution shifts and gradient interference, leading to performance degradation and catastrophic forgetting. Achieving rapid task-level alignment with minimal real-world interaction cost, while maintaining stable updates to a shared model in multi-task settings, remains a central challenge in VLA post-training.
  We propose RRRR (Rapid Real-World Residual RL), a plug-and-play, high-frequency residual module built upon a frozen VLA backbone. The residual module performs localized policy corrections without modifying pretrained parameters and is optimized through a unified imitation learning (IL) and reinforcement learning (RL) framework to enable stable online adaptation. It further serves as an extensible interface for incorporating additional modalities, such as force and depth sensing, enhancing real-world perception without altering pretrained representations.
  We introduce a dynamic adaptive residual factor that regulates residual intervention and quantifies task-specific update requirements on a VLA model. Leveraging this signal, we perform weighted supervised updates to the shared VLA model, systematically integrating single-task interaction experience while mitigating task interference during continual multi-task updates.
  Extensive real-robot experiments demonstrate that RRRR achieves efficient task-level alignment with low interaction cost and outperforms direct fine-tuning and mixed-task training baselines in sample efficiency and multi-task stability, providing a novel framework for real-world VLA post-training.`;

  const bibtex = `@article{rrrr2026,
  title={RRRR: Rapid Real-World Residual RL for Multi-Task VLA Adaptation},
  author={Authors Name},
  year={2026}
}`;

  return (
    <div className="container">
      <header>
        <h1>{paperTitle}</h1>
        <div className="authors">
          <span>Author One<sup>1</sup>, </span>
          <span>Author Two<sup>2</sup>, </span>
          <span>Author Three<sup>1</sup></span>
        </div>
        <div className="affiliations">
          <p><sup>1</sup>Institution One, <sup>2</sup>Institution Two</p>
        </div>
        <div className="links">
          <a href="#" className="link-btn">Paper (PDF)</a>
          <a href="#" className="link-btn">Code (GitHub)</a>
          <a href="#" className="link-btn">Video (Demo)</a>
        </div>
      </header>

      <section>
        <h2>Abstract</h2>
        <div className="abstract">
          {abstract.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <section>
        <h2>Framework Overview</h2>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          {/* Placeholder for an image or diagram */}
          <div style={{ width: '100%', height: '300px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
            <p style={{ color: '#999' }}>[Framework Diagram Placeholder]</p>
          </div>
          <p style={{ fontStyle: 'italic', marginTop: '10px' }}>Figure 1: Overview of the RRRR framework, showing the frozen VLA backbone and the plug-and-play residual module.</p>
        </div>
      </section>

      <section>
        <h2>Results</h2>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <div style={{ width: '100%', height: '300px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
            <p style={{ color: '#999' }}>[Experimental Results Chart Placeholder]</p>
          </div>
          <p style={{ fontStyle: 'italic', marginTop: '10px' }}>Figure 2: Performance comparison against baselines in multi-task stability and interaction cost.</p>
        </div>
      </section>

      <section>
        <h2>BibTeX</h2>
        <div className="bibtex-box">
          {bibtex}
        </div>
      </section>

      <footer>
        <p>© 2026 RRRR Research Team. Built with React and Vite.</p>
      </footer>
    </div>
  );
}

export default App;
