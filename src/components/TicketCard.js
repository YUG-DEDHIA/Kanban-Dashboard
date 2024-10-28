import React from 'react';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out border border-gray-200">
      <span className="ticket-id text-xs font-semibold text-gray-500">#{ticket.id}</span>
      <h3 className="text-lg font-bold text-gray-800 mt-1">{ticket.title}</h3>
      <p className="text-gray-600 mt-2">{ticket.description}</p>
      <p className="text-gray-600 mt-2">Status: {ticket.status}</p>
    </div>
  );
};

export default TicketCard;
