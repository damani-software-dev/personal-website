export interface ProjectData {
    id: string
    slug: string
    title: string
    description: string
    descript2: string
    problem: string
    goal: string
    impact: string
    tags: string[]
    discovery: string
    stakeholderRes: string []
    usertype: {header: string; subtext:string; title: string; descrip:string }[]
    painpoints: string[]
    brainstorm: string
    interviewTakeaway: string []
    heroImage: string
    background: string
    competitor: {header: string; subtext:string; strength: string; weakness:string }[]
    solutionIdeas: {url: string; title: string; description: string}[]
    conceptImages: { url: string; alt: string }[]
    resultImages: { url: string; alt: string }[]
  }
  
  // This would typically come from a CMS or database
  const projectsData: ProjectData[] = [
    {
      id: "1",
      slug: "flip-floss",
      title: "Leveraging AI and Gamification to Improve Kids' Financial Literacy Skills",
      description: "Airspace Logistics Hub LLC is a company that does logistics operations for businesses and couriers.",
      descript2: "An attempt to push kids forward into financial literacy.",
      discovery:"After being onboarded onto the team, I get right into discovery mode. To effectively engage students while learning, I had to do my research. I first reached out to the stakeholders to get a deeper understanding of the business goals and how I can effectively align these in my final solution. The insights from this meeting are as follows:",
      stakeholderRes: [ 
      "Expand the Customer Base", 
      "Increase Engagement and Retention", 
      "Foster Parent/Teacher Involvement", 
      "Leverage AI for Personalized Learning",
      "Ensure Effective Learning Outcomes",
    ],

      background: "The world of learning is evolving and intense. Flip & Floss, an edtech company, reached out to me through a mutual connection. They were on the brink of transitioning from a workshop environment to a company based in Canada, with a value proposition to help 1 million kids learn financial literacy through gamification and AI. As the Lead UX Designer, my role was to help Flip & Floss create an experience that would engage kids from ages 8 to 16.",
      usertype: [
        { header: "Identify Users Type", subtext: "Airspace posses two primary users, these are:", title:"Administraters", descrip:"Manage all couriers activity and operational process." },
        { header: "", subtext: "", title:"Couriers", descrip:"Initiate and carry out operational activities among products packaging and shipping operation." }
      ],
      painpoints: [
        "“I don’t like when there’s too much reading… I just want to play and earn coins.” — Aiden, 9", 
        "“It’s cool when the game lets me level up. It makes me feel like I’m getting better at something.” — Liana, 11",
        "“I’ve seen some apps talk about saving money, but they’re boring. If it was more like Roblox or Clash Royale, then maybe I’d play.” — Jordan, 13",
        "“Can I use my own character? Like if I can design it and it talks back to me or something.” — Emilia, 10"
      ],
      brainstorm:"Before I even delve into brainstorming ideas, there are a few takeaways & understanding from the kids' interview insights. Outlining these considerations will help to guide my design thinking process. These are:",
      interviewTakeaway: [
        "Kids crave play over passive learning.",
        "They want to feel like they’re progressing.",
        "Personalization matters.",
        
    ],
      heroImage: "/case 1.svg?height=400&width=600",
      competitor: [
        { header: "", subtext: "Airspace Dashboard 1", strength:"", weakness:"" },
        { header: "", subtext: "Airspace Dashboard 1", strength:"", weakness:"" }
      ],
      solutionIdeas: [
        { url: "", title: "Airspace Dashboard 1", description:"" },
        { url: "", title: "Airspace Dashboard 1", description:"" }
      ],
      problem:
        "As it relates to stakeholder needs, users needs and industry requirements, Airspace is currently not effectively align with their users needs as it relates to streamline operations and its user experience.",
      goal: "The objective is to improve user experience, streamline operations, and adapt to emerging market trends.",
      impact:
        "Operational efficiency was increase by 30% through streamlined processes and productivity. 40% of users are more satisfied with the new workflow which leads to better usability and long term sustainability.",
      tags: ["UX/UI Design", "UX Research", "User Testing"],
      resultImages: [
        { url: "/AHL.svg?height=500&width=1000", alt: "Airspace Dashboard 1" },
        { url: "/AHL.svg?height=500&width=1000", alt: "Airspace Dashboard 2" },
        
      ],
      conceptImages: [
        { url: "/AHL.svg?height=500&width=1000", alt: "Airspace Dashboard 1" },
        { url: "/AHL.svg?height=500&width=1000", alt: "Airspace Dashboard 2" },
      ],
    },
    {
      id: "2",
      slug: "eksix-brand",
      title: "Enhancing Eksix Brand Identity",
      description: "Eksix Technologies Ltd is a company that provides software solution that are feasable and intuitive.",
      descript2: "",
      discovery:"",
      stakeholderRes: [],
      background: "",
      usertype: [
        { header: "", subtext: "Airspace Dashboard 1", title:"", descrip:"" },
        { header: "", subtext: "Airspace Dashboard 1", title:"", descrip:"" }
      ],
      painpoints: [
       
      ],
      brainstorm:"",
      interviewTakeaway: [],
      heroImage: "/BrandBoard.png?height=400&width=600",

        competitor: [
          { header: "", subtext: "Airspace Dashboard 1", strength:"", weakness:"" },
          { header: "", subtext: "Airspace Dashboard 1", strength:"", weakness:"" }
        ],
        solutionIdeas: [
          { url: "", title: "Airspace Dashboard 1", description:"" },
          { url: "", title: "Airspace Dashboard 1", description:"" }
        ],
      problem:
        "The existing app had low engagement metrics, with users struggling to discover key features. Customer feedback indicated frustration with the complex navigation and outdated visual design.",
      goal: "Create an intuitive, modern interface that simplifies banking tasks, improves feature discoverability, and increases overall user satisfaction and engagement.",
      impact:
        "After the redesign, user engagement increased by 45%, feature discovery improved by 60%, and customer satisfaction scores rose from 3.2 to 4.7 out of 5.",
      tags: ["Brand Identity", "Logo Design"],
      resultImages: [
        { url: "/BrandBoard.png?height=500&width=1000", alt: "FinTech App Dashboard" },
        { url: "/placeholder.svg?height=500&width=1000", alt: "FinTech App Features" },
        { url: "/placeholder.svg?height=500&width=1000", alt: "FinTech App Analytics" },
      ],
      conceptImages: [
        { url: "/AHL.svg?height=500&width=1000", alt: "Airspace Dashboard 1" },
        { url: "/AHL.svg?height=500&width=1000", alt: "Airspace Dashboard 2" },
      ],
      
    },
   
  ]
  
  export async function getProjectData(slug: string): Promise<ProjectData> {
    // In a real application, this would fetch from an API or database
    const project = projectsData.find((p) => p.slug === slug)
  
    if (!project) {
      throw new Error(`Project with slug "${slug}" not found`)
    }
  
    return project
  }
  
  export async function getAllProjects(): Promise<ProjectData[]> {
    // In a real application, this would fetch from an API or database
    return projectsData
  }
  
  