import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { PlusCircleIcon, ClockIcon, BellIcon } from 'lucide-react';
import 'react-calendar/dist/Calendar.css'; // Import calendar styling

const Calender: React.FC = () => {
  const [value, setValue] = useState<Date | [Date, Date] | null>(new Date()); // Updated typing

  const [events, setEvents] = useState<string[]>([]); // Store events

  // Function to add a reminder/event
  const addReminder = () => {
    const newEvent = prompt('Enter event/reminder:');
    if (newEvent) {
      setEvents([...events, newEvent]);
    }
  };

  // Handle the calendar date change
  const handleDateChange = (selectedDate: Date | Date[] | null, event: React.MouseEvent<HTMLButtonElement>) => {
    // Ensure the selected date is valid
    if (Array.isArray(selectedDate)) {
      setValue(selectedDate as [Date, Date]); // Handle date range
    } else {
      setValue(selectedDate); // Handle single date
    }
  };

  return (
    <div className="min-h-screen p-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <button
          onClick={addReminder}
          className="flex items-center bg-cbt-primary text-white px-4 py-2 rounded hover:bg-cbt-secondary"
        >
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          Add Reminder
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white border rounded-lg p-6">
          <Calendar
            onChange={handleDateChange} // Use the custom handler
            value={value}
            className="w-full"
          />
        </div>

        {/* Timeline / Events Section */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <ClockIcon className="w-5 h-5 mr-2" />
            Timeline / Events
          </h2>
          {events.length === 0 ? (
            <p>No events or reminders yet.</p>
          ) : (
            <ul className="space-y-3">
              {events.map((event, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <BellIcon className="w-5 h-5 text-yellow-500" />
                  <span>{event}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calender;
