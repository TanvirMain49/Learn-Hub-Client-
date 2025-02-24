import React from 'react'

export default function DashSession({items}) {
  return (
    <div className="overflow-x-auto dark:bg-neutral-700 w-full mt-10">
    <table className="table smooch-sans">
      {/* head */}
      <thead className="text-center  text-2xl bg-black text-white">
        <tr>
          <th>Image</th>
          <th>Session</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="text-center text-sm border dark:bg-neutral-700 dark:text-white/80 border-black bg-white">
        {items.slice(0,5).map((item, idx) => (
          <tr key={item._id}>
            <td>
              <div className="flex justify-center items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-16 w-16">
                    <img src={item.imageUrl} />
                  </div>
                </div>
              </div>
            </td>
            <td className="font-semibold">{item.title}</td>
            <td>
              {item.price === "0" ? (
                <h2 className="text-xl">$Free</h2>
              ) : (
                <h2 className="text-4xl font-bold">${item.price}</h2>
              )}
            </td>
          </tr>
        ))}
      </tbody>
      {/* foot */}
    </table>
  </div>
  )
}
