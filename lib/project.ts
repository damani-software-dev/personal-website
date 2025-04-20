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
    brainstormImage:{url:string; text:string}[]
    interviewTakeaway: string []
    heroImage: string
    background: string
    testing: string
    competitor: {header: string; subtext:string; strength: string; weakness:string }[]
    sketchIdeas: {url: string; text: string}[]
    solutionImages: { url: string; text: string }[]
    outcome: string []
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
      brainstormImage: [

        { url: "/brainstorm.png?height=500&width=1000", text:"With these ideas, along with user insights, I was able to spin up a quick information architecture to showcase the structure and user navigation throughout the experience. This serves as an understanding of how users' experience would be." },
        { url: "/brainstorm2.png?height=500&width=1000", text:"As I move closer to a refined solution, here are a few wireframes that I put together to give a better understanding of what the interaction could be for the user." },
    ],

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
      
      problem:
        "Kids between the ages of 8–16 struggle to stay engaged with financial content because they are boring and text-heavy, no personalization, and doesn't feel rewarding or even fun, leading to low engagement and limited learning outcomes.\n\nWell, there you have it. I think I can strongly say I know what kids are looking for, their problem, what will get them engaged, and what to be mindful of when designing",
      
      goal: "The objective is to improve user experience, streamline operations, and adapt to emerging market trends.",
     
      impact:
        "Operational efficiency was increase by 30% through streamlined processes and productivity. 40% of users are more satisfied with the new workflow which leads to better usability and long term sustainability.",
      tags: ["UX/UI Design", "UX Research", "User Testing"],

      testing: "With numerous iterations and a lot more research to be done, time was a key factor in all of this. Flip & Floss had a particular deadline by which they would like the MVP to be ready to pitch to school boards in Canada and the US. With that said, I decided to push what I have so far to testing, testing via Maze.\n\nI used Maze to gather user feedback on how easy and engaging the experience was to find a course, complete a course lesson, and complete a quiz. Listed below are a few feedback from this testing session.",

      sketchIdeas: [
        { url: "/sketch1.png?height=500&width=1000", text:"Student Dashboard Overview" },
        { url: "/sketch2.png?height=500&width=1000", text:"" }
      ],
      solutionImages: [
        { url: "/solution1.png?height=500&width=1000", text: "Airspace Dashboard 1" },
        { url: "/solution2.png?height=500&width=1000", text: "Airspace Dashboard 2" },
        { url: "/solution3.png?height=500&width=1000", text: "Airspace Dashboard 2" },
        { url: "/solution4.png?height=500&width=1000", text: "Airspace Dashboard 2" },
        
      ],
      outcome: [
        "30% increase in user engagement", 
        "50% increase in course interaction & Quiz engagement", 
        "Flip & Floss customer base grew from 100 to 1,00"
    ],
     
    },
    {
      id: "2",
      slug: "airspace-ux",
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
      brainstormImage: [
        
        { url: "", text: "" },
        
    ],
      interviewTakeaway: [],
      heroImage: "/BrandBoard.png?height=400&width=600",

        competitor: [
          { header: "", subtext: "Airspace Dashboard 1", strength:"", weakness:"" },
          { header: "", subtext: "Airspace Dashboard 1", strength:"", weakness:"" }
        ],
        
      problem:
        "The existing app had low engagement metrics, with users struggling to discover key features. Customer feedback indicated frustration with the complex navigation and outdated visual design.",
      goal: "Create an intuitive, modern interface that simplifies banking tasks, improves feature discoverability, and increases overall user satisfaction and engagement.",
      
      impact:
        "After the redesign, user engagement increased by 45%, feature discovery improved by 60%, and customer satisfaction scores rose from 3.2 to 4.7 out of 5.",
      
        tags: ["Brand Identity", "Logo Design"],

      testing: "",

      sketchIdeas: [
        { url: "", text:"" },
        { url: "", text:"" }
      ],
      solutionImages: [
        { url: "/BrandBoard.png?height=500&width=1000", text: "FinTech App Dashboard" },
        { url: "/placeholder.svg?height=500&width=1000", text: "FinTech App Features" },
        { url: "/placeholder.svg?height=500&width=1000", text: "FinTech App Analytics" },
      ],

      outcome: [
        ""
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
  
  