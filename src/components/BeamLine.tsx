import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface BeamLineProps {
    containerRef: React.RefObject<HTMLElement>;
    color?: string;
    glowColor?: string;
}

const BeamLine: React.FC<BeamLineProps> = ({ 
    containerRef, 
    color = "bg-cyan-400",
    glowColor = "rgba(34,211,238,0.8)"
}) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2 overflow-visible z-20">
            <motion.div
                className={`w-full origin-top ${color}`}
                style={{
                    scaleY,
                    height: '100%',
                    boxShadow: `0 0 15px ${glowColor}`
                }}
            />
        </div>
    );
};

export default BeamLine;
