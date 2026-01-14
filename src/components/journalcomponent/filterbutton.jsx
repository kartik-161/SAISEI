import React from 'react'

const Filterbutton = ({ tag, activeCategory, onFilterChange }) => {
    return (
        <div className="flex justify-end gap-6 text-gray-400 uppercase text-sm tracking-wide px-20">
            {tag.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onFilterChange(cat)}
                    className={`relative pb-1 transition-all cursor-pointer aeonikmed  ${activeCategory === cat
                            ? " bg-transparent  border-b text-black border-black hover:bg-transparent  "
                            : " text-gray-300 "
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}

export default Filterbutton