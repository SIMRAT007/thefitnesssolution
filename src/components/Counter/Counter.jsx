import React from 'react'
import { stats } from '../../mockData/data'
import { motion, useInView } from "framer-motion";

const Counter = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { triggerOnce: false });

    return (
        <div className="py-2 sm:pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-[#f1ffc6] sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </motion.div>
            </div>
        </div>
    )
}

export default Counter