import React, { useState } from 'react';
import { Heart, Clock, User, MessageCircle } from 'lucide-react';

interface PrayerRequest {
  id: number;
  title: string;
  content: string;
  author: string;
  time: string;
  prayers: number;
  isUrgent: boolean;
}

interface PrayerRequestCardProps {
  request: PrayerRequest;
}

const PrayerRequestCard: React.FC<PrayerRequestCardProps> = ({ request }) => {
  const [isPraying, setIsPraying] = useState(false);
  const [prayerCount, setPrayerCount] = useState(request.prayers);

  const handlePray = () => {
    setIsPraying(!isPraying);
    setPrayerCount(isPraying ? prayerCount - 1 : prayerCount + 1);
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
      request.isUrgent ? 'border-red-200 bg-red-50/30' : 'border-blue-100'
    }`}>
      {request.isUrgent && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Urgent Prayer Request</span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{request.author}</h4>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{request.time}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{request.title}</h3>
          <p className="text-gray-700 leading-relaxed">{request.content}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePray}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isPraying
                  ? 'text-blue-700 bg-blue-100 hover:bg-blue-200'
                  : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <Heart className={`w-5 h-5 ${isPraying ? 'fill-current' : ''}`} />
              <span>{isPraying ? 'Praying' : 'Pray'}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-green-700 hover:bg-green-50 font-medium transition-all duration-200">
              <MessageCircle className="w-5 h-5" />
              <span>Encourage</span>
            </button>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Heart className="w-4 h-4" />
            <span>{prayerCount} people praying</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerRequestCard;