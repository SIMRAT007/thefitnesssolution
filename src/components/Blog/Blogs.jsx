import { posts } from '../../mockData/data';
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

export default function Blogs() {
  return (
    <div className="py-0 sm:py-0 mb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-0 sm:pt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <motion.img
                variants={SlideUp(0.3)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                alt=""
                src={post.author.imageUrl}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="flex items-center gap-x-4 text-xs mt-4">
                <motion.time
                  variants={SlideUp(0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  dateTime={post.datetime}
                  className="text-gray-500"
                >
                  {post.date}
                </motion.time>
                <motion.a
                  variants={SlideUp(0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  href={post.href}
                  target='_blank'
                  rel='noreferrer'
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </motion.a>
              </div>
              <div className="group relative">
                <motion.h3
                  variants={SlideUp(0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  className="mt-3 text-lg/6 font-semibold text-gray-200 group-hover:text-gray-400"
                >
                  <a href={post.href} target='_blank' rel='noreferrer'>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </motion.h3>
                <motion.p
                  variants={SlideUp(0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  className="mt-5 line-clamp-3 text-sm/6 text-gray-600"
                >
                  {post.description}
                </motion.p>
              </div>
              <div className="relative mt-4 flex items-center justify-between w-full">
                <motion.p
                  variants={SlideUp(0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  className="font-semibold text-gray-500"
                >
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </a>
                </motion.p>
                <motion.a
                  variants={SlideUp(0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  href={post.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className="inline-block px-4 py-2 text-sm font-medium text-[#98cd05] border border-[#98cd05] rounded-md hover:text-white hover:border-[#98cd05] hover:bg-[#98cd05] transition-colors duration-300">
                    Read More
                  </div>
                </motion.a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}