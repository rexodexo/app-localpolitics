import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Users, FileText, BarChart2, AlertCircle, MessageSquare, ThumbsUp, ThumbsDown, UserPlus, Share2, MoreHorizontal, TrendingUp } from "lucide-react";

interface Election {
  // Define the structure of an election object
}

interface Contest {
  type: string;
  referendumTitle?: string;
  referendumSubtitle?: string;
}

export default function Homepage() {
  const [postContent, setPostContent] = useState("");
  const [elections, setElections] = useState<Election[]>([]);
  const [contests, setContests] = useState<Contest[]>([]);

  useEffect(() => {
    // Fetch election data (mock function for now)
    const fetchElectionData = async () => {
      // Simulating API call
      const mockElections: Election[] = [];
      const mockContests: Contest[] = [
        {
          type: 'Referendum',
          referendumTitle: 'City Park Renovation',
          referendumSubtitle: 'Allocate funds for renovating Central Park'
        },
        {
          type: 'Referendum',
          referendumTitle: 'Public Transportation Expansion',
          referendumSubtitle: 'Expand bus routes to suburban areas'
        }
      ];
      setElections(mockElections);
      setContests(mockContests);
    };

    fetchElectionData();
  }, []);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Post submitted:", postContent);
    setPostContent("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Quick Links</h2>
            <nav className="space-y-2">
              <Link to="/" className="flex items-center text-purple-600 hover:text-purple-800">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
              <Link to="/representatives" className="flex items-center text-purple-600 hover:text-purple-800">
                <Users className="mr-2 h-4 w-4" />
                Representatives
              </Link>
              <Link to="/legislation" className="flex items-center text-purple-600 hover:text-purple-800">
                <FileText className="mr-2 h-4 w-4" />
                Legislation
              </Link>
              <Link to="/polls" className="flex items-center text-purple-600 hover:text-purple-800">
                <BarChart2 className="mr-2 h-4 w-4" />
                Polls
              </Link>
              <Link to="/report" className="flex items-center text-purple-600 hover:text-purple-800">
                <AlertCircle className="mr-2 h-4 w-4" />
                Report an Issue
              </Link>
            </nav>
          </div>

          {/* Trending News/Topics */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Trending News</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-purple-600 mr-2 mt-1" />
                <p className="text-sm">Local school board proposes new curriculum changes</p>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-purple-600 mr-2 mt-1" />
                <p className="text-sm">City plans to revitalize downtown area with new green spaces</p>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-purple-600 mr-2 mt-1" />
                <p className="text-sm">Debate over proposed increase in local sales tax</p>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:w-1/2 space-y-6">
          {/* Create Post */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Create Post</h2>
            <form onSubmit={handlePostSubmit}>
              <textarea
                className="w-full p-2 rounded-md border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                rows={3}
                placeholder="What's on your mind about local politics?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              ></textarea>
              <button type="submit" className="mt-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Post
              </button>
            </form>
          </div>

          {/* Feed */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex mb-4">
              <button className="flex-1 text-center py-2 text-purple-600 border-b-2 border-purple-600">Your Feed</button>
              <button className="flex-1 text-center py-2 text-gray-500 hover:text-purple-600">Trending</button>
              <button className="flex-1 text-center py-2 text-gray-500 hover:text-purple-600">Local Issues</button>
            </div>
            {/* Sample posts */}
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-purple-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <p>The new bike lane proposal could really change our downtown area. What are your thoughts on how it might affect local businesses?</p>
                <div className="flex mt-2 space-x-2">
                  <button className="flex items-center text-gray-500 hover:text-purple-600">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Comment (23)
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-purple-600">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Support (45)
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-purple-600">
                    <ThumbsDown className="h-4 w-4 mr-1" />
                    Oppose (12)
                  </button>
                </div>
              </div>
              <div className="border-b pb-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-purple-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Local News</p>
                    <p className="text-sm text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <p>City Council to vote on the new community center project next week. Here's a breakdown of the proposal and its potential impact.</p>
                <div className="flex mt-2 space-x-2">
                  <button className="flex items-center text-gray-500 hover:text-purple-600">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Discuss
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-purple-600">
                    <FileText className="h-4 w-4 mr-1" />
                    Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
          {/* Upcoming Ballot Propositions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Upcoming Ballot Propositions</h2>
            <p className="text-sm text-purple-600 mb-4">Stay informed and make your voice heard!</p>
            <div className="space-y-4">
              {contests.filter(contest => contest.type === 'Referendum').map((contest, index) => (
                <div key={index} className="bg-purple-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-purple-800">{contest.referendumTitle}</h3>
                  <p className="text-sm text-purple-600">{contest.referendumSubtitle}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Referendum
                    </span>
                    <Link to={`/propositions/${index}`} className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/propositions" className="block mt-4 text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              View All Propositions
            </Link>
          </div>

          {/* Your Network */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Your Network</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Alex Johnson</p>
                    <p className="text-sm text-gray-500">Level 5 Citizen</p>
                  </div>
                </div>
                <button className="text-purple-600 hover:text-purple-800">
                  <MessageSquare className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Lee</p>
                    <p className="text-sm text-gray-500">Level 4 Citizen</p>
                  </div>
                </div>
                <button className="text-purple-600 hover:text-purple-800">
                  <MessageSquare className="h-5 w-5" />
                </button>
              </div>
              <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold py-2 px-4 rounded">
                <UserPlus className="inline-block mr-2 h-5 w-5" />
                Find More Connections
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}