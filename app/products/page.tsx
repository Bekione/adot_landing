import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Package, Sparkles, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#503c3c] mb-4">Welcome to Adot Technologies</h1>
        <p className="text-xl text-gray-600">Innovative solutions tailored for Ethiopian businesses and beyond.</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <ProductCard
          title="Adot ERP"
          description="Empower your business with our tailored ERP solution."
          icon={<Package size={48} />}
          link="/products/adot-erp"
        />
        <ProductCard
          title="Youthopia"
          description="A safe and engaging platform for kids to learn and grow."
          icon={<Sparkles size={48} />}
          link="/products/youthopia"
        />
        <ProductCard
          title="Coming Soon"
          description="Exciting new product in development. Stay tuned!"
          icon={<Clock size={48} />}
          link="/products/coming-soon"
        />
      </motion.section>
    </div>
  )
}



interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ProductCard = ({ title, description, icon, link }: ProductCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="text-[#503c3c] mb-4">{icon}</div>
    <h2 className="text-2xl font-bold text-[#503c3c] mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href={link} className="inline-flex items-center text-[#503c3c] hover:text-[#d5cea3]">
      Learn More <ArrowRight size={16} className="ml-2" />
    </Link>
  </motion.div>
)

