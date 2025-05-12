import { Article, TopicSectionData } from "./types";

export const featuredArticle: Article = {
  id: "1",
  title: "AI Systems That Work With People Rather Than Replace Them",
  description:
    "Teams of humans and AI systems will create more powerful results than either could achieve alone.",
  image:
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
  category: "Artificial Intelligence",
  date: "October 23, 2023",
  author: {
    name: "Will Douglas Heaven",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  url: "#",
};

export const mockArticles: Article[] = [
  {
    id: "2",
    title: "The Race to Build a Universal Quantum Computer",
    description:
      "For the first time, researchers have shown that a particular superconducting material could work at temperatures and pressures low enough to help build a practical quantum computer.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    category: "Computing",
    date: "October 20, 2023",
    author: {
      name: "Sophia Chen",
      avatar:
        "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    url: "#",
  },
  {
    id: "3",
    title: "Climate Change Is Making Hurricanes More Dangerous",
    description:
      "New research confirms what scientists have long suspected: climate change is making hurricanes more powerful and dangerous.",
    image:
      "https://images.unsplash.com/photo-1579105728744-9d8bd14d66de?q=80&w=1931&auto=format&fit=crop",
    category: "Climate Change",
    date: "October 19, 2023",
    author: {
      name: "James Temple",
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    url: "#",
  },
  {
    id: "4",
    title: "The Future of Remote Work: Balancing Flexibility and Connection",
    description:
      "Companies are finding new ways to maintain culture and productivity in a post-pandemic world where remote work has become the norm.",
    image:
      "https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1973&auto=format&fit=crop",
    category: "Business",
    date: "October 18, 2023",
    author: {
      name: "Elizabeth Woyke",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    url: "#",
  },
  {
    id: "5",
    title:
      "Biotech Startups Are Creating Ethical Guidelines for Human Brain Research",
    description:
      "As research into brain-computer interfaces accelerates, companies are establishing their own ethical frameworks.",
    image:
      "https://images.unsplash.com/photo-1559757175-7cb05f7e9caf?q=80&w=1989&auto=format&fit=crop",
    category: "Biotechnology",
    date: "October 15, 2023",
    author: {
      name: "Antonio Regalado",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    url: "#",
  },
  {
    id: "6",
    title: "New Solar Panel Designs Could Revolutionize Clean Energy",
    description:
      "Recent breakthroughs in solar panel efficiency and design promise to make renewable energy more accessible.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1972&auto=format&fit=crop",
    category: "Energy",
    date: "October 14, 2023",
    author: {
      name: "Casey Crownhart",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    url: "#",
  },
  {
    id: "7",
    title: "SpaceX's Mars Mission Timeline Advances as Testing Succeeds",
    description:
      "With recent successful tests of their Starship prototype, SpaceX is one step closer to its Mars ambitions.",
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1974&auto=format&fit=crop",
    category: "Space",
    date: "October 10, 2023",
    author: {
      name: "Neel Patel",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    url: "#",
  },
  {
    id: "8",
    title: "Quantum Computing's Impact on Cryptography",
    description:
      "Security experts are preparing for a post-quantum world where current encryption methods may become vulnerable.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1740&auto=format&fit=crop",
    category: "Cybersecurity",
    date: "October 8, 2023",
    author: {
      name: "Patrick Howell O'Neill",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    url: "#",
  },
  {
    id: "9",
    title: "The Ethics of Facial Recognition Technology",
    description:
      "As facial recognition becomes more widespread, researchers and policymakers debate its ethical implications.",
    image:
      "https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=1974&auto=format&fit=crop",
    category: "Tech Policy",
    date: "October 5, 2023",
    author: {
      name: "Tate Ryan-Mosley",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    url: "#",
  },
  {
    id: "10",
    title: "Digital Health Startups Are Transforming Healthcare",
    description:
      "New technologies are making healthcare more accessible and personalized than ever before.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    category: "Health Tech",
    date: "October 1, 2023",
    author: {
      name: "Charlotte Jee",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    url: "#",
  },
];

export const topicSections: TopicSectionData[] = [
  {
    title: "Artificial Intelligence",
    articles: [
      mockArticles[0],
      {
        id: "11",
        title: "How Machine Learning Is Revolutionizing Drug Discovery",
        description:
          "AI algorithms are helping researchers identify promising drug candidates more quickly and at lower cost.",
        image:
          "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        category: "Artificial Intelligence",
        date: "October 12, 2023",
        author: {
          name: "Karen Hao",
          avatar:
            "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        url: "#",
      },
      {
        id: "12",
        title: "The New Wave of AI Art Generators",
        description:
          "Text-to-image models are reshaping creative industries and raising questions about the future of art.",
        image:
          "https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?q=80&w=1964&auto=format&fit=crop",
        category: "Artificial Intelligence",
        date: "October 9, 2023",
        author: {
          name: "Melissa Heikkilä",
          avatar:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        url: "#",
      },
    ],
  },
  {
    title: "Climate Tech",
    articles: [
      mockArticles[2],
      mockArticles[5],
      {
        id: "13",
        title:
          "Carbon Capture Technologies Show Promise in Fighting Climate Change",
        description:
          "New approaches to removing carbon dioxide from the atmosphere could help mitigate the effects of global warming.",
        image:
          "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2070&auto=format&fit=crop",
        category: "Climate Tech",
        date: "October 7, 2023",
        author: {
          name: "James Temple",
          avatar:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        url: "#",
      },
    ],
  },
  {
    title: "Computing",
    articles: [
      mockArticles[1],
      mockArticles[7],
      {
        id: "14",
        title: "The Semiconductor Industry's Next Challenge",
        description:
          "As Moore's Law slows, chipmakers are exploring new materials and architectures to keep advancing computing power.",
        image:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
        category: "Computing",
        date: "October 3, 2023",
        author: {
          name: "Sophia Chen",
          avatar:
            "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        url: "#",
      },
    ],
  },
];
