'use client'

import React, { useState, useEffect } from 'react';

export function CursorFollow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const trackPosition = (e: any) => {
        setPosition({ x: e.pageX, y: e.pageY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', trackPosition);

        return () => {
            document.removeEventListener('mousemove', trackPosition);
        };
    }, []);

    return (
        <section 
            id='cursorHover'
            className="absolute h-[200px] w-[200px] top-0 left-0 rounded-full"   
            style={{
                backgroundImage: 'radial-gradient(circle, #ec2039, rgba(0,0,0,0) 70%)',
                transform: `translate(${position.x - 100}px, ${position.y - 100}px)`, // Adjust for half of the element's width and height
            }}
        >
        </section>
    );
}
