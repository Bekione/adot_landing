import { terms } from '@/data/terms'
import GradientWord from '@/components/ui/GradientWord'
import MotionWrapper from '@/components/MotionWrapper'

const page = () => {
  return (
    <section className="py-12 pt-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-8">
        <MotionWrapper
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <GradientWord word='Terms of Service' size='sm' />
        </MotionWrapper>
        <MotionWrapper 
          className="max-w-3xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {terms.map((term, index) => (
            <MotionWrapper 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h2 className="text-xl md:text-2xl font-ubuntuBold text-primary mb-2">
                {term.title}
              </h2>
              <p className="text-gray-700 text-justify">
                {term.content}
              </p>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  )
}

export default page
