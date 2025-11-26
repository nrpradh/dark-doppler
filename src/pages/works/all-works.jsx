const works = [
    {
        year: "2025",
        projects: [
            { title: "Toolshall", img: "https://dummyimage.com/1280x720", alt: "Toolshall project preview" },
            { title: "Envirolyst", img: "https://dummyimage.com/1280x720", alt: "Envirolyst project preview" },
            { title: "Regrant", img: "https://dummyimage.com/1280x720", alt: "Regrant project preview" },
        ]
    },
    {
        year: "2024",
        projects: [
            { title: "SecurePay", img: "https://dummyimage.com/1280x720", alt: "SecurePay project preview" },
            { title: "Logicey", img: "https://dummyimage.com/1280x720", alt: "Logicey project preview" }
        ]
    },
    {
        year: "2023",
        projects: [
        { title: "Marroc", img: "https://dummyimage.com/1280x720", alt: "Marroc project preview" }
        ]
    }
];

export default function AllWorks() {
    const MAX_SLOTS = 3; // Always 3 columns for staircase

    return (
        <section className="flex flex-col min-h-[90vh]" aria-labelledby="latest-works-title">
        <header className="space-y-12">
            <h1 id="latest-works-title">Latest Works</h1>
        </header>

        {works.map((yearData) => {
            const projectsWithPlaceholders = [...yearData.projects];
            while (projectsWithPlaceholders.length < MAX_SLOTS) {
            projectsWithPlaceholders.push(null);
            }

            return (
            <div key={yearData.year} className="py-10">
                <div className="border-b mb-6">
                <time dateTime={yearData.year}>{yearData.year}</time>
                </div>

                {/* 3-column Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                {projectsWithPlaceholders.map((project, index) => (
                    <div
                    key={index}
                    className="flex flex-col space-y-4"
                    style={{
                        paddingTop: `${index * 3}rem`,
                    }}
                    >
                    {project ? (
                        <>
                        <img src={project.img} alt={project.alt} className="img-preview w-full" />
                        <div>
                            <h4>{project.title}</h4>
                        </div>
                        </>
                    ) : (
                        <div className="h-[180px] w-full"></div> 
                    )}
                    </div>
                ))}
                </div>
            </div>
            );
        })}
        </section>
    );
}
