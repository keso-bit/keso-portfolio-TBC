import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <section id="projects" className="section">
            <h2>My <span>Projects</span></h2>

            <div className="cards">
                <ProjectCard
                    title="My First Website"
                    description="My first web development project."
                />

                <ProjectCard
                    title="Portfolio Website"
                    description="A website about me and my work."
                />

                <ProjectCard
                    title="Future Project"
                    description="More exciting projects coming soon!"
                />
            </div>
        </section>
    )
}

export default Projects