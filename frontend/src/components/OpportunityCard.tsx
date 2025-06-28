import React, { useState } from 'react';
import { MapPin, Clock, Users, Calendar, Heart } from 'lucide-react';

interface Opportunity {
  id: number;
  title: string;
  organization: string;
  description: string;
  location: string;
  date: string;
  time: string;
  volunteers: number;
  category: string;
  isUrgent: boolean;
  image?: string;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  const [isInterested, setIsInterested] = useState(false);

  const handleInterest = () => {
    setIsInterested(!isInterested);
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 ${
      opportunity.isUrgent ? 'border-red-200 ring-2 ring-red-100' : 'border-blue-100'
    }`}>
      {opportunity.isUrgent && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Volunteers Needed Urgently</span>
          </div>
        </div>
      )}

      {opportunity.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={opportunity.image}
            alt={opportunity.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
          <p className="text-blue-600 font-medium text-sm">{opportunity.organization}</p>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-6">{opportunity.description}</p>

        {/* Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{opportunity.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{opportunity.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>{opportunity.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="w-4 h-4 text-gray-400" />
            <span>{opportunity.volunteers} volunteers signed up</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleInterest}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isInterested
                ? 'text-red-700 bg-red-100 hover:bg-red-200'
                : 'text-gray-600 hover:text-red-700 hover:bg-red-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${isInterested ? 'fill-current' : ''}`} />
            <span>{isInterested ? 'Interested' : 'Show Interest'}</span>
          </button>
          
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;