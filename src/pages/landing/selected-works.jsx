const projects = [
    {
        title: "Toolshall",
        year: "2025",
        img: "https://dummyimage.com/1280x720",
        alt: "Toolshall project preview"
    },
    {
        title: "Envirolyst",
        year: "2025",
        img: "https://dummyimage.com/1280x720",
        alt: "Envirolyst project preview"
    },
    {
        title: "Regrant",
        year: "2024",
        img: "https://dummyimage.com/1280x720",
        alt: "Regrant project preview"
    }
];

import Works from "../../data/AllWorks.json"

export default function SelectedWorks({selectedIds =[]}) {
    const MAX_SLOTS = 3; // always 3 columns for staircase

    const displayedProjects = selectedIds.length
        ? selectedIds.map(id => Works.find(p => p.id === id)).filter(Boolean)
        : Works.slice(0, MAX_SLOTS); // fallback if no selection

    while (displayedProjects.length < MAX_SLOTS) displayedProjects.push(null);

    return (
        <section className="flex flex-col min-h-[90vh]" aria-labelledby="selected-works-title">
        <header>
            <h2 id="selected-works-title" className="leading-none">
            Selected Works
            </h2>
        </header>

        <div className="grid grid-cols-3 gap-4 md:py-12 py-10">
                {displayedProjects.map((project, index) => (
                    <article key={index} className="flex flex-col space-y-4" style={{ paddingTop: `${index * 2.5}rem` }}>
                        {project ? (
                            <>
                                <img src={project.snapshots[0]} alt={project.overview.title} className="img-preview w-full" />
                                <div className="flex items-end space-x-2">
                                    <time dateTime={project.category.timeline}>[{project.category.timeline}]</time>
                                    <h4 >{project.overview.title}</h4>
                                </div>
                            </>
                        ) : (
                            <div className="h-[180px] w-full"></div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}
