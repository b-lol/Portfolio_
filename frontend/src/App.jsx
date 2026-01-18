import { useState, useEffect } from 'react'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://portfolio-production-e2cb.up.railway.app/api/projects/')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <div>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 1000,
      }}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>      

      {/* Hero Section */}
      <section id="home" style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        backgroundColor: '#1a1a2e',
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1.5rem', 
          color: '#fff',
          fontWeight: '700',
        }}>
          Hi! Welcome to my website.
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#ccc', 
          maxWidth: '500px',
          lineHeight: '1.6',
        }}>
          Here you'll find the fun and interesting things I've been working on.
        </p>
        <p style={{ 
          fontSize: '1.1rem', 
          fontStyle: 'italic', 
          color: '#a78bfa',
          marginTop: '2rem',
        }}>
          "Where there's a problem, there's opportunity."
        </p>
        <a 
          href="#projects" 
          style={{
            marginTop: '3rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#6B3FA0',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '1rem',
          }}
        >
          View Projects
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>My Projects</h2>
        
        {projects.map(project => (
          <div key={project.id} style={{
            display: 'flex',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto 3rem auto',
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}>
            {/* Project Info */}
            <div style={{
              flex: 1,
              borderLeft: '5px solid #6B3FA0',
              paddingLeft: '1.5rem',
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#222' }}>{project.title}</h3>
              <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {project.description}
              </p>
              <p style={{ 
                backgroundColor: '#f0e6ff', 
                padding: '0.75rem 1rem', 
                borderRadius: '6px',
                marginBottom: '1.5rem',
                color: '#4A2C6A',
              }}>
                <strong>Tech:</strong> {project.technologies}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.github_url && (
                  <a 
                    href={project.github_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#fff', 
                      backgroundColor: '#6B3FA0',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      textDecoration: 'none',
                    }}
                  >
                    GitHub
                  </a>
                )}
                {project.live_url && (
                  <a 
                    href={project.live_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#6B3FA0', 
                      border: '2px solid #6B3FA0',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      textDecoration: 'none',
                    }}
                  >
                    Live Site
                  </a>
                )}
              </div>
            </div>

            {/* Screenshot Placeholder */}
            <div style={{
              flex: 1,
              backgroundColor: '#e8e0f0',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '250px',
              color: '#6B3FA0',
              border: '2px dashed #6B3FA0',
            }}>
              Screenshot coming soon
            </div>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '4rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <h2 style={{ marginBottom: '2rem', color: '#fff' }}>Technical Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          <div>
            <h4 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>Languages</h4>
            <p style={{ color: '#fff' }}>Java, Python, C++, C, JavaScript, Dart</p>
          </div>
          
          <div>
            <h4 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>Frameworks</h4>
            <p style={{ color: '#fff' }}>Node.js, Express.js, FastAPI, Flutter, Django, React</p>
          </div>
          
          <div>
            <h4 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>Web/APIs</h4>
            <p style={{ color: '#fff' }}>REST API, WebSockets, HTML/CSS, OAuth 2.0</p>
          </div>
          
          <div>
            <h4 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>Tools/DevOps</h4>
            <p style={{ color: '#fff' }}>Docker, Git, Linux</p>
          </div>
          
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>ML/AI</h4>
            <p style={{ color: '#fff' }}>scikit-learn, pandas, NumPy, Search Algorithms, CSPs, Bayesian Networks</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ 
        padding: '4rem 2rem',
        backgroundColor: '#f9f9f9',
      }}>
        <h2 style={{ marginBottom: '2rem', textAlign: 'center', color: '#222' }}>About Me</h2>
        
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderLeft: '5px solid #6B3FA0',
        }}>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: '#444' }}>
            My name is Bilal. Though Canadian, I spent much of my early years abroad. Moving 
            from country to country shaped me into a cultural nomad. Aware and appreciative 
            of human diversity.
          </p>
          
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: '#444' }}>
            As a teenager, I came across a quote: "Where there's a problem, there's opportunity." 
            That same year I read Steve Jobs' biography, and the story of iPhone's conception stuck 
            with me. Apple executives complaining about their phones, and Jobs spearheading a change.
            While reading the biography, I kept walking by the same truck with the quote: "It's better to strike 
            a match than curse the darkness".
            Clearly the universe was teaching me a lesson. And that lesson stuck.
          </p> 
          
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: '#444' }}>
            Originally, I was med school bound. I did everything: academics, research, volunteering, 
            athletics, leadership. And I got accepted. But I couldn't afford to go. Faced with reality,
            I asked myself am I gonna curse at the darkness or light a match? Am I a board member or Jobs? 
            With AI making headlines, I pivoted into a new career in Computer Science. 
            And here I discovered a new passion. The theory, the complexity, the possibilities.
          </p>
          
          <p style={{ lineHeight: '1.8', color: '#444' }}>
            Anytime someone near me is unhappy with their tech, I perk up and think: can I 
            make it better?
          </p>
  
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        textAlign: 'center',
      }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#fff' }}>Get In Touch</h2>
        <p style={{ color: '#ccc', marginBottom: '2rem' }}>
          Want to connect? Find me here:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a 
            href="https://github.com/b-lol" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#fff', 
              backgroundColor: '#6B3FA0',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontSize: '1.1rem', 
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/bilal-suboor-13il4l/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#6B3FA0', 
              backgroundColor: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontSize: '1.1rem', 
              textDecoration: 'none',
            }}
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#777',
        borderTop: '1px solid #333',
      }}>
        <p>© 2026 b-lol</p>
      </footer>

    </div>
  )
}

export default App