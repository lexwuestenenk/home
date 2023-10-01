import React from 'react';

export function DotMatrix() {
    const rows = 6;
    const columns = 9;

    return (
        <div className="flex flex-col items-between h-screen p-20 absolute w-full justify-between">
            {Array.from({ length: rows }, (_, rowIndex) => (
                <div className="flex w-full justify-between" key={rowIndex}>
                    {Array.from({ length: columns }, (_, colIndex) => (
                        <div className="w-2 h-2 bg-white m-2 rounded-full hover:bg-black ease-in duration-200" key={colIndex}></div>
                    ))}
                </div>
            ))}
        </div>
    );
}
