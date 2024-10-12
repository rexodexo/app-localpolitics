import React from 'react';
import { Award } from 'lucide-react';

const ProfilePage: React.FC = () => {
  // This data would typically come from a user context or API call
  const user = {
    username: 'JohnDoe',
    level: 3,
    points: 150,
    achievements: [
      { name: 'Proposition Scholar', icon: '🏆' },
      { name: 'Debate Champion', icon: '🎭' },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-purple-800">Your Profile</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center text-2xl font-bold text-purple-800">
              {user.username[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-purple-800">{user.username}</h2>
              <p className="text-purple-600">Level {user.level} Citizen</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Your Civic Engagement</h3>
            <p className="text-purple-600 mb-2">{user.points} points</p>
            <div className="w-full bg-purple-200 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-purple-600 mt-1">75% to Level {user.level + 1}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Recent Achievements</h3>
            <div className="space-y-2">
              {user.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-purple-600">{achievement.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional sections can be added here, such as:
            - Recent Activity
            - Saved Propositions
            - Voting History
            - Account Settings
        */}
      </div>
    </div>
  );
};

export default ProfilePage;