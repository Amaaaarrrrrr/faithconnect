import React, { useState } from 'react';
import { Heart, Clock, User, Plus } from 'lucide-react';
import PrayerRequestCard from '../components/PrayerRequestCard';

const PrayerWall = () => {
  const [showForm, setShowForm] = useState(false);
  const [newPrayer, setNewPrayer] = useState({ title: '', content: '', isAnonymous: false });

  const prayerRequests = [
    {
      id: 1,
      title: 'Healing for My Grandmother',
      content: 'My grandmother was recently diagnosed with pneumonia and is in the hospital. Please pray for her complete healing and comfort for our family during this time.',
      author: 'Sarah M.',
      time: '2 hours ago',
      prayers: 34,
      isUrgent: true
    },
    {
      id: 2,
      title: 'Job Search Guidance',
      content: 'I\'ve been unemployed for three months now and struggling to find the right opportunity. Seeking God\'s guidance and provision during this challenging season.',
      author: 'Anonymous',
      time: '5 hours ago',
      prayers: 28,
      isUrgent: false
    },
    {
      id: 3,
      title: 'Marriage Restoration',
      content: 'My spouse and I are going through a difficult time. Please pray for healing, forgiveness, and restoration in our relationship.',
      author: 'John D.',
      time: '8 hours ago',
      prayers: 67,
      isUrgent: false
    },
    {
      id: 4,
      title: 'Peace During Anxiety',
      content: 'Struggling with anxiety and fear about the future. Praying for God\'s peace that surpasses understanding and strength to trust His plan.',
      author: 'Maria L.',
      time: '12 hours ago',
      prayers: 45,
      isUrgent: false
    },
    {
      id: 5,
      title: 'Financial Breakthrough',
      content: 'Facing unexpected medical bills and struggling to make ends meet. Trusting God for provision and seeking prayers for financial breakthrough.',
      author: 'Anonymous',
      time: '1 day ago',
      prayers: 89,
      isUrgent: true
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPrayer.title.trim() && newPrayer.content.trim()) {
      // Handle prayer request submission
      console.log('Prayer request submitted:', newPrayer);
      setNewPrayer({ title: '', content: '', isAnonymous: false });
      setShowForm(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Prayer Wall</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Share your prayer requests and lift each other up in faith. Together, we bear one another's burdens.
        </p>
        
        {/* Add Prayer Request Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
        >
          <Plus className="w-5 h-5" />
          <span>Share Prayer Request</span>
        </button>
      </div>

      {/* Prayer Request Form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Share Your Prayer Request</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Prayer request title"
                value={newPrayer.title}
                onChange={(e) => setNewPrayer({ ...newPrayer, title: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Share your prayer request details..."
                value={newPrayer.content}
                onChange={(e) => setNewPrayer({ ...newPrayer, content: e.target.value })}
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="anonymous"
                checked={newPrayer.isAnonymous}
                onChange={(e) => setNewPrayer({ ...newPrayer, isAnonymous: e.target.checked })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                Share anonymously
              </label>
            </div>
            <div className="flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
              >
                Share Request
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Prayer Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-4 mx-auto">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">1,247</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg mb-4 mx-auto">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-sm text-gray-600">This Week</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg mb-4 mx-auto">
            <User className="w-6 h-6 text-white" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">892</div>
            <div className="text-sm text-gray-600">People Praying</div>
          </div>
        </div>
      </div>

      {/* Prayer Requests */}
      <div className="space-y-6">
        {prayerRequests.map(request => (
          <PrayerRequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  );
};

export default PrayerWall;