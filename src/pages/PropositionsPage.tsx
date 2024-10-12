import React, { useState } from "react";
import { Leaf, BookOpen, Car, Building, Sun, DollarSign, Users, Heart, Scale } from "lucide-react";

const propositions = [
  {
    id: "prop-a",
    name: "Proposition A: Park Renovation Fund",
    summary: "Allocates $50 million for renovating and expanding city parks over the next 5 years.",
    status: "Active",
    category: "Environment",
    icon: Leaf,
    support: 65,
    against: 35,
    partyStances: {
      democratic: "Support",
      republican: "Oppose",
      independent: "Neutral"
    }
  },
  {
    id: "prop-b",
    name: "Proposition B: School Funding Initiative",
    summary: "Increases property tax by 0.5% to fund public school improvements and teacher salary increases.",
    status: "Active",
    category: "Education",
    icon: BookOpen,
    support: 72,
    against: 28,
    partyStances: {
      democratic: "Support",
      republican: "Oppose",
      independent: "Support"
    }
  },
  {
    id: "prop-c",
    name: "Proposition C: Traffic Management System",
    summary: "Implements a smart traffic management system to reduce congestion in downtown areas.",
    status: "Active",
    category: "Infrastructure",
    icon: Car,
    support: 58,
    against: 42,
    partyStances: {
      democratic: "Support",
      republican: "Neutral",
      independent: "Support"
    }
  },
  {
    id: "prop-d",
    name: "Proposition D: Affordable Housing Development",
    summary: "Allocates $100 million for developing affordable housing units over the next 10 years.",
    status: "Active",
    category: "Housing",
    icon: Building,
    support: 68,
    against: 32,
    partyStances: {
      democratic: "Support",
      republican: "Oppose",
      independent: "Support"
    }
  },
  {
    id: "prop-e",
    name: "Proposition E: Clean Energy Transition",
    summary: "Requires the city to source 50% of its energy from renewable sources by 2030.",
    status: "Active",
    category: "Environment",
    icon: Sun,
    support: 70,
    against: 30,
    partyStances: {
      democratic: "Support",
      republican: "Oppose",
      independent: "Support"
    }
  },
  {
    id: "prop-f",
    name: "Proposition F: Small Business Support",
    summary: "Creates a $20 million fund to provide low-interest loans to local small businesses.",
    status: "Active",
    category: "Economy",
    icon: DollarSign,
    support: 62,
    against: 38,
    partyStances: {
      democratic: "Support",
      republican: "Support",
      independent: "Support"
    }
  },
  {
    id: "prop-g",
    name: "Proposition G: Public Transportation Expansion",
    summary: "Expands bus routes and increases frequency of public transportation services.",
    status: "Active",
    category: "Transportation",
    icon: Car,
    support: 75,
    against: 25,
    partyStances: {
      democratic: "Support",
      republican: "Neutral",
      independent: "Support"
    }
  },
  {
    id: "prop-h",
    name: "Proposition H: Mental Health Services",
    summary: "Allocates additional funding for mental health services and facilities in the community.",
    status: "Active",
    category: "Healthcare",
    icon: Heart,
    support: 80,
    against: 20,
    partyStances: {
      democratic: "Support",
      republican: "Support",
      independent: "Support"
    }
  },
  {
    id: "prop-i",
    name: "Proposition I: Police Reform Initiative",
    summary: "Implements new training programs and oversight measures for the local police department.",
    status: "Active",
    category: "Public Safety",
    icon: Scale,
    support: 55,
    against: 45,
    partyStances: {
      democratic: "Support",
      republican: "Oppose",
      independent: "Neutral"
    }
  },
  {
    id: "prop-j",
    name: "Proposition J: Youth Employment Program",
    summary: "Establishes a summer job program for high school students in various city departments.",
    status: "Active",
    category: "Employment",
    icon: Users,
    support: 78,
    against: 22,
    partyStances: {
      democratic: "Support",
      republican: "Support",
      independent: "Support"
    }
  }
];

export default function PropositionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPropositions = selectedCategory === "All" 
    ? propositions 
    : propositions.filter(prop => prop.category === selectedCategory);

  const categories = ["All", ...new Set(propositions.map(prop => prop.category))];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-purple-800">Ballot Propositions</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-800 hover:bg-purple-100"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPropositions.map(prop => (
            <div key={prop.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-purple-800">{prop.name}</h2>
                <prop.icon className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-gray-600 mb-4">{prop.summary}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {prop.status}
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {prop.category}
                </span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-600">Support</span>
                  <span className="text-purple-600">{prop.support}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${prop.support}%` }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-600">Against</span>
                  <span className="text-purple-600">{prop.against}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gray-600 h-2.5 rounded-full" style={{ width: `${prop.against}%` }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-800">Quick Party Stances</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-600">Democratic: {prop.partyStances.democratic}</span>
                  <span className="text-red-600">Republican: {prop.partyStances.republican}</span>
                </div>
                <div className="text-sm text-purple-600">
                  Independent: {prop.partyStances.independent}
                </div>
              </div>
              <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Learn More & Discuss
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}