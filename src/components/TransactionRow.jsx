// import react from "react";

const TransactionRow = ({ tx }) => (
  <div className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-4">
    {/* Avatar */}
    <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
      {tx.name.charAt(0)}
    </div>
    {/* Text details */}
    <div className="flex-1">
      <p className="font-medium">
        {tx.type === "sent" ? "Sent to" : "Received from"} {tx.name}
      </p>
      <span className="text-xs text-gray-500">{tx.time}</span>
    </div>
    {/* Amount */}
    <div className="text-right">
      <p className={tx.type === "sent" ? "text-red-500 font-semibold" : "text-green-600 font-semibold"}>
        {tx.amount}
      </p>
      <span className="text-xs text-gray-500">{tx.ngn}</span>
    </div>
  </div>
);

export default TransactionRow;