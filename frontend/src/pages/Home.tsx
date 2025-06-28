import React from 'react';
import PostCard from '../components/PostCard';
import CreatePost from '../components/CreatePost';
import { MessageCircle, Users, Heart, Sparkles } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Community Members', value: '1,247' },
    { icon: Heart, label: 'Prayers Shared', value: '3,891' },
    { icon: MessageCircle, label: 'Conversations', value: '2,156' },
    { icon: Sparkles, label: 'Lives Touched', value: '8,734' },
  ];

  const posts = [
    {
      id: 1,
      author: 'Sarah Johnson',
      time: '2 hours ago',
      content: 'Grateful for the beautiful sunrise this morning. It reminded me of God\'s faithfulness - new mercies every day! 🌅',
      likes: 23,
      comments: 8,
      image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      author: 'Michael Chen',
      time: '4 hours ago',
      content: 'Our church food drive collected over 500 pounds of food this weekend! Amazing to see our community come together to serve those in need. Thank you to everyone who participated! 🙏',
      likes: 45,
      comments: 12
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      time: '6 hours ago',
      content: 'Been reflecting on Philippians 4:13 lately. "I can do all things through Christ who strengthens me." What a powerful reminder that we\'re never alone in our struggles.',
      likes: 38,
      comments: 15
    },
    {
      id: 4,
      author: 'David Thompson',
      time: '8 hours ago',
      content: 'Volunteered at the local shelter today with my family. The joy on the children\'s faces was priceless. Sometimes the smallest acts of kindness make the biggest difference.',
      likes: 67,
      comments: 23
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
            FaithConnect
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A sacred space where faith meets community. Share your journey, find encouragement, 
          and grow together in love and service.
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-amber-500 rounded-lg mb-4 mx-auto">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <CreatePost />
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Daily Verse */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-3">Verse of the Day</h3>
            <blockquote className="text-blue-100 italic mb-3">
              "For I know the plans I have for you," declares the Lord, "plans to prosper you 
              and not to harm you, to give you hope and a future."
            </blockquote>
            <div className="text-blue-200 text-sm">Jeremiah 29:11</div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Upcoming Events</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Community Prayer Night</div>
                  <div className="text-sm text-gray-600">Tonight at 7:00 PM</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Youth Group Outing</div>
                  <div className="text-sm text-gray-600">Saturday at 10:00 AM</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Food Drive Collection</div>
                  <div className="text-sm text-gray-600">Sunday after service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Prayer Requests Preview */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Recent Prayer Requests</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-800 mb-1">
                  Please pray for my grandmother's recovery...
                </div>
                <div className="text-xs text-gray-500">- Anna K., 2 hours ago</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-800 mb-1">
                  Seeking guidance for a major life decision...
                </div>
                <div className="text-xs text-gray-500">- Mark T., 5 hours ago</div>
              </div>
            </div>
            <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm">
              View All Prayer Requests →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;