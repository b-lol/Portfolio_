
import ScrollMirror from './components/ScrollMirror'
import { useState, useEffect } from 'react'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://portfolio-production-e2cb.up.railway.app/api/projects/')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <div style={{ width: '100%' }}>
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
          Hi! My name is Bilal Suboor. <br />
          I am a Computer Science student at UBC.
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

            {/* Project Media */}
            <div style={{
              flex: 1,
              borderRadius: '8px',
              minHeight: '250px',
              overflow: 'hidden',
            }}>
              {project.title === 'Portfolio' ? (
                <ScrollMirror />
              ) : project.video_url ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                >
                  <source src={project.video_url} type="video/mp4" />
                </video>
              ) : project.image_url ? (
                <img
                  src={project.image_url}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#e8e0f0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#6B3FA0',
                  border: '2px dashed #6B3FA0',
                  borderRadius: '8px',
                  minHeight: '250px',
                }}>
                  Media coming soon
                </div>
              )}
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
        <p style={{ color: '#fff' }}>Python, TypeScript, JavaScript, Java, SQL, Dart, C++</p>
      </div>

      <div>
        <h4 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>Frameworks</h4>
        <p style={{ color: '#fff' }}>FastAPI, React, Node.js/Express.js, Django REST, Flutter</p>
      </div>

      <div>
        <h4 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>Data &amp; ML</h4>
        <p style={{ color: '#fff' }}>pandas, scikit-learn, PyTorch, HuggingFace, ChromaDB, Ollama, Tesseract</p>
      </div>

      <div>
        <h4 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>Databases</h4>
        <p style={{ color: '#fff' }}>PostgreSQL, MySQL, ClickHouse, SQLite</p>
      </div>

      <div>
        <h4 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>Tools/DevOps</h4>
        <p style={{ color: '#fff' }}>Docker, Docker Compose, Git, Linux, CI/CD, Slurm/HPC</p>
      </div>

      <div>
        <h4 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>Web/APIs</h4>
        <p style={{ color: '#fff' }}>REST APIs, WebSockets, OAuth 2.0, HTML/CSS</p>
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
            Med school accepted. I declined. Now I write software for the people working there.
          </p>
          
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: '#444' }}>
            A nutrition degree with high honors, and four years spent building a medical school application: research, clinical work, youth community programs, and three years at UHN as an Epic Credentialed Trainer and Certified Analyst. After the acceptance came, I turned it down. That last job is why. Smart people losing hours to workflows nobody designed for them. A dozen clicks to record one thing. A pattern I've seen everywhere since.
          </p> 
          
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: '#444' }}>
            Now I'm finishing a CS degree at UBC while working as a software engineer and data analyst, writing the LLM and vision model pipelines that turn raw clinical data into the structured datasets behind published papers. Healthcare is where I learned the problem, but it isn't the boundary. I'm looking for co-op roles where I can go deep on the engineering itself. Right now that means local inference, on-device deployment, and data privacy.
          </p>
          
          <p style={{ lineHeight: '1.8', color: '#444' }}>
            I spent most of my early years abroad, moving country to country so often that adapting became the default rather than the exception. Somewhere in there I picked up a line I've never managed to shake: it's better to strike a match than curse the darkness. So when someone near me is frustrated with their tech, I perk up and think, can I make that better?
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

        <p style={{
          color: '#6b7280',
          fontSize: '0.85rem',
          marginTop: '2.5rem'
        }}>
          Authorized to work in Canada and the US
        </p>
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