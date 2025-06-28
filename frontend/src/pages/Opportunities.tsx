import React, { useState } from 'react';
import { MapPin, Clock, Users, Calendar, Heart, Search } from 'lucide-react';
import OpportunityCard from '../components/OpportunityCard';

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Opportunities' },
    { id: 'local', name: 'Local Outreach' },
    { id: 'international', name: 'Missions' },
    { id: 'youth', name: 'Youth Ministry' },
    { id: 'elderly', name: 'Elder Care' },
    { id: 'homeless', name: 'Homeless Support' },
    { id: 'education', name: 'Education' }
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Food Bank Volunteer',
      organization: 'Community Hope Center',
      description: 'Help sort and distribute food to families in need. Join us every Saturday morning for a rewarding service opportunity.',
      location: 'Downtown Community Center',
      date: 'Every Saturday',
      time: '9:00 AM - 12:00 PM',
      volunteers: 15,
      category: 'local',
      isUrgent: false,
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Youth Mentorship Program',
      organization: 'Faith Youth Ministry',
      description: 'Mentor young people in our community, providing guidance, support, and friendship. Make a lasting impact on the next generation.',
      location: 'Various locations',
      date: 'Ongoing',
      time: 'Flexible schedule',
      volunteers: 8,
      category: 'youth',
      isUrgent: true,
      image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Homeless Shelter Support',
      organization: 'Grace Shelter Ministry',
      description: 'Serve meals and provide companionship to our homeless neighbors. Help us show God\'s love through practical service.',
      location: 'Grace Homeless Shelter',
      date: 'Every Sunday',
      time: '5:00 PM - 8:00 PM',
      volunteers: 22,
      category: 'homeless',
      isUrgent: false
    },
    {
      id: 4,
      title: 'Senior Companion Visits',
      organization: 'Golden Years Ministry',
      description: 'Visit elderly residents at local nursing homes. Bring joy, conversation, and human connection to those who may feel isolated.',
      location: 'Sunset Manor & Oak View',
      date: 'Weekdays',
      time: '2:00 PM - 4:00 PM',
      volunteers: 12,
      category: 'elderly',
      isUrgent: false
    },
    {
      id: 5,
      title: 'Reading Tutor for Children',
      organization: 'Literacy Angels',
      description: 'Help children improve their reading skills through one-on-one tutoring. No teaching experience required - just a heart for kids!',
      location: 'Lincoln Elementary School',
      date: 'Tuesday & Thursday',
      time: '3:30 PM - 5:00 PM',
      volunteers: 6,
      category: 'education',
      isUrgent: true
    },
    {
      id: 6,
      title: 'International Mission Trip',
      organization: 'Global Outreach Ministry',
      description: 'Join our mission team to Guatemala for construction work, children\'s ministry, and community outreach. Life-changing experience awaits!',
      location: 'Guatemala',
      date: 'July 15-22, 2024',
      time: 'Full week commitment',
      volunteers: 3,
      category: 'international',
      isUrgent: false
    }
  ];

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || opportunity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Opportunities</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover meaningful ways to serve our community and make a difference. 
          Find volunteer opportunities that match your passion and schedule.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-4 mx-auto">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-sm text-gray-600">Active Opportunities</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg mb-4 mx-auto">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">2,341</div>
            <div className="text-sm text-gray-600">Volunteers Registered</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg mb-4 mx-auto">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">8,947</div>
            <div className="text-sm text-gray-600">Hours Served</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg mb-4 mx-auto">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">23</div>
            <div className="text-sm text-gray-600">Partner Organizations</div>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map(opportunity => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-4">No opportunities found matching your criteria.</div>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear filters and show all opportunities
          </button>
        </div>
      )}
    </div>
  );
};

export default Opportunities;