import { iconMap } from "@/lib/icon-map"

export const internBenefits: Array<{
    icon: keyof typeof iconMap;
    text: string;
  }> = [
    { 
      icon: "Briefcase", 
      text: 'Hands-on experience in cutting-edge tech projects' 
    },
    { 
      icon: "Users", 
      text: 'Mentorship from industry professionals' 
    },
    { 
      icon: "Globe", 
      text: 'Contribution to real-world open-source projects' 
    },
    { 
      icon: "CheckCircle", 
      text: 'Networking opportunities within the tech community' 
    },
  ]


export const techtonicBenefits: Array<{
    icon: keyof typeof iconMap;
    text: string;
  }> = [
    { 
      icon: "Wrench", 
      text: 'Access to cutting-edge tools and technologies' 
    },
    { 
      icon: "Users", 
      text: 'Mentorship from industry professionals' 
    },
    { 
      icon: "Sparkles", 
      text: 'Collaborative project opportunities' 
    },
    { 
      icon: "Lightbulb", 
      text: 'Support for tech events and hackathons' 
    },
  ]