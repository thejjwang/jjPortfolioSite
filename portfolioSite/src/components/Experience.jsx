import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div className='pb-4'>
        <h2 className='my-20 text-center text-4xl'>Experience</h2>
        <div>
            {EXPERIENCES.map((Experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-stone-400'>
                            {Experience.year}
                        </p>
                    </div>
                    <div>
                        <h3>
                            (experience.role) - {" "}
                            <span></span>
                        </h3>
                        <p></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )

}

export default Experience